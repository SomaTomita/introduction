"""Generates docs/architecture/site-architecture.png from this repo's actual structure.

Requires: pip install diagrams (and the Graphviz `dot` binary on PATH).
Run from anywhere: python3 docs/architecture/generate_diagram.py
"""

import os

from diagrams import Cluster, Diagram, Edge
from diagrams.generic.blank import Blank
from diagrams.onprem.client import User
from diagrams.onprem.vcs import Github
from diagrams.programming.framework import Nextjs, React, Vercel
from diagrams.programming.language import Typescript

OUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUT_NAME = "site-architecture"

graph_attr = {
    "fontsize": "20",
    "bgcolor": "white",
    "pad": "0.3",
    "splines": "spline",
    "nodesep": "0.6",
    "ranksep": "1.2",
}

GRAY = "gray45"

with Diagram(
    "introduction — Site Architecture",
    filename=os.path.join(OUT_DIR, OUT_NAME),
    outformat="png",
    show=False,
    direction="LR",
    graph_attr=graph_attr,
):
    visitor = User("Site Visitor")

    with Cluster("GitHub"):
        repo = Github("SomaTomita/introduction")

    with Cluster("Vercel (Hosting)"):
        vercel = Vercel("Build & Edge Network")

    with Cluster("Next.js App (Pages Router) — this repo"):
        config = Blank("next.config.mjs\ni18n: ja/en (localeDetection off)\nimages.remotePatterns")
        app_shell = Nextjs("_app.tsx (wraps Layout)\n_document.tsx")

        with Cluster("Pages (src/pages)"):
            home_page = Nextjs("index.tsx")
            list_page = Nextjs("contents/index.tsx")
            post_page = Nextjs("contents/[slug].tsx")
            category_page = Nextjs("contents/category/[slug].tsx")
            about_page = Nextjs("about.tsx")
            pages = [home_page, list_page, post_page, category_page, about_page]
            cms_pages = [home_page, list_page, post_page, category_page]

        with Cluster("Components (src/components)"):
            shared_ui = React(
                "on every page:\nlayout/* (Layout, Header, Footer,\nContainer, TwoColumn)\nmeta.tsx, nav, logo,\nsocial, lang-switcher"
            )
            post_ui = React(
                "post/*\n(Posts, PostBody, ConvertBody,\nPostHeader, PostCategories,\nPagenation, prev-next-post)"
            )
            page_ui = React("hero, contact")

        with Cluster("lib (src/lib)"):
            api_ts = Typescript("api.ts\n(microcms-js-sdk client)")
            env_ts = Typescript("env.ts (zod)")
            schemas_ts = Typescript("schemas.ts (zod)")
            logger_ts = Typescript("logger.ts")
            extract_ts = Typescript("extract-text.ts")
            i18n_ts = Typescript("i18n.ts\nconstants.ts")
            dict_ts = Typescript("dictionary.ts\nuse-dictionary.ts")

        with Cluster("Static Assets"):
            assets = Blank("src/images/* (next/image)\npublic/ (favicon, eyecatch)")

    with Cluster("Content (microCMS)"):
        microcms = Blank("REST API\ncontents / categories")
        cms_assets = Blank("images.microcms-assets.io")

    with Cluster("Quality Gates"):
        tests = Blank("Vitest\ni18n.test / dictionary.test\n/ constants.test")

    # Deployment (Vercel's GitHub integration; no in-repo CI config)
    repo >> Edge(label="git push") >> vercel
    vercel >> Edge(label="next build (SSG) & serve") >> app_shell
    visitor >> Edge(label="HTTPS") >> vercel

    # Routing / config
    config >> Edge(style="dotted", color=GRAY, label="locale routes (ja/en)") >> app_shell
    app_shell >> pages

    # Composition
    app_shell >> Edge(label="Layout on every page") >> shared_ui
    for p in pages:
        p >> Edge(color=GRAY) >> post_ui
    for p in [home_page, list_page, about_page]:
        p >> Edge(color=GRAY) >> page_ui

    # Content fetching at build time (about.tsx has no CMS data)
    cms_pages[0] >> Edge(style="dashed", label="getStaticProps / getStaticPaths") >> api_ts
    for p in cms_pages[1:]:
        p >> Edge(style="dashed") >> api_ts
    env_ts >> Edge(label="loadEnv()") >> api_ts
    schemas_ts >> Edge(label="parses responses") >> api_ts
    api_ts >> Edge(style="dashed", color=GRAY, label="logs failures") >> logger_ts
    api_ts >> Edge(label="REST (microcms-js-sdk)") >> microcms
    post_ui >> Edge(style="dashed", color=GRAY, label="next/image (remote eyecatch)") >> cms_assets

    # i18n: consumed by components and by the pages with localized copy
    shared_ui >> Edge(style="dotted", color=GRAY, label="locale-aware SEO / switcher") >> i18n_ts
    for p in [list_page, category_page, about_page]:
        p >> Edge(style="dotted", color=GRAY) >> dict_ts
    dict_ts >> Edge(style="dotted", color=GRAY) >> i18n_ts
    about_page >> Edge(style="dotted", color=GRAY) >> i18n_ts

    # Post detail builds its meta description from the CMS body
    post_page >> Edge(style="dashed", color=GRAY, label="meta description") >> extract_ts

    # Local images are imported by components/pages, not by the app shell
    page_ui >> Edge(style="dashed", color=GRAY, label="static imports") >> assets

    # Test suite covers the pure lib modules
    i18n_ts >> Edge(style="dashed", color=GRAY, label="unit tests") >> tests
    dict_ts >> Edge(style="dashed", color=GRAY) >> tests
