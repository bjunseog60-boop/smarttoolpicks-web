#!/usr/bin/env python3
"""Generate unique SVG images for each SaaS tool and guide category.

Each SVG has a unique gradient + icon/initial + tool name.
Output: public/images/tools/{slug}.svg and public/images/categories/{slug}.svg
"""
import os
import hashlib
from pathlib import Path

OUT_DIR = Path(__file__).parent.parent / "public" / "images"
TOOLS_DIR = OUT_DIR / "tools"
CATEGORIES_DIR = OUT_DIR / "categories"
GUIDES_DIR = OUT_DIR / "guides"

TOOLS_DIR.mkdir(parents=True, exist_ok=True)
CATEGORIES_DIR.mkdir(parents=True, exist_ok=True)
GUIDES_DIR.mkdir(parents=True, exist_ok=True)

# Category color schemes: (gradient_start, gradient_end, accent)
CATEGORY_COLORS = {
    "project-management": ("#1E40AF", "#3B82F6", "#DBEAFE"),
    "crm-sales": ("#065F46", "#10B981", "#D1FAE5"),
    "design-tools": ("#5B21B6", "#8B5CF6", "#EDE9FE"),
    "marketing-tools": ("#92400E", "#F59E0B", "#FEF3C7"),
    "ai-tools": ("#0E7490", "#06B6D4", "#CFFAFE"),
    "productivity": ("#3730A3", "#6366F1", "#E0E7FF"),
    "collaboration": ("#9D174D", "#EC4899", "#FCE7F3"),
}

# Tools with their categories and unique icons (unicode)
TOOLS = {
    # AI Tools
    "zapier": ("ai-tools", "Zapier", "Z"),
    "make": ("ai-tools", "Make", "M"),
    "airtable": ("ai-tools", "Airtable", "A"),
    "openai": ("ai-tools", "OpenAI", "O"),
    "pabbly-connect": ("ai-tools", "Pabbly Connect", "P"),
    "notion-ai": ("ai-tools", "Notion AI", "N"),
    "chatgpt": ("ai-tools", "ChatGPT", "C"),
    "grammarly-ai": ("ai-tools", "Grammarly AI", "G"),

    # Collaboration
    "slack": ("collaboration", "Slack", "S"),
    "microsoft-teams": ("collaboration", "Microsoft Teams", "T"),
    "google-chat": ("collaboration", "Google Chat", "G"),
    "microsoft-365": ("collaboration", "Microsoft 365", "M"),
    "google-workspace": ("collaboration", "Google Workspace", "W"),
    "discord": ("collaboration", "Discord", "D"),

    # Design
    "gimp": ("design-tools", "GIMP", "G"),
    "inkscape": ("design-tools", "Inkscape", "I"),
    "canva-free": ("design-tools", "Canva Free", "C"),
    "adobe-photoshop": ("design-tools", "Adobe Photoshop", "Ps"),
    "krita": ("design-tools", "Krita", "K"),
    "figma": ("design-tools", "Figma", "F"),
    "adobe-xd": ("design-tools", "Adobe XD", "Xd"),
    "sketch": ("design-tools", "Sketch", "S"),
    "invision-studio": ("design-tools", "InVision Studio", "In"),
    "protopie": ("design-tools", "ProtoPie", "Pi"),

    # Marketing
    "salesforce-einstein": ("marketing-tools", "Salesforce Einstein", "SE"),
    "jasper-ai": ("marketing-tools", "Jasper AI", "J"),
    "adobe-sensei": ("marketing-tools", "Adobe Sensei", "AS"),
    "hubspot-ai-tools": ("marketing-tools", "HubSpot AI Tools", "H"),
    "oracle-eloqua": ("marketing-tools", "Oracle Eloqua", "OE"),
    "activecampaign": ("marketing-tools", "ActiveCampaign", "AC"),
    "mailchimp": ("marketing-tools", "Mailchimp", "Mc"),
    "hubspot-marketing-hub": ("marketing-tools", "HubSpot Marketing", "HM"),
    "getresponse": ("marketing-tools", "GetResponse", "GR"),
    "drip": ("marketing-tools", "Drip", "Dr"),

    # Productivity
    "clickup": ("productivity", "ClickUp", "CU"),
    "coda": ("productivity", "Coda", "Co"),
    "superhuman": ("productivity", "Superhuman", "SH"),
    "jira": ("productivity", "Jira", "Ji"),
    "asana": ("productivity", "Asana", "As"),
    "notion": ("productivity", "Notion", "No"),
    "todoist": ("productivity", "Todoist", "Td"),

    # Project Management
    "trello": ("project-management", "Trello", "Tr"),
    "monday-com": ("project-management", "Monday.com", "Mo"),

    # CRM
    "hubspot-crm": ("crm-sales", "HubSpot CRM", "HC"),
    "zoho-crm": ("crm-sales", "Zoho CRM", "ZC"),
    "salesforce-essentials": ("crm-sales", "Salesforce", "SF"),
    "pipedrive": ("crm-sales", "Pipedrive", "Pd"),
}

# Guide hero images
GUIDES_META = {
    "no-code-ai-tools": ("ai-tools", "No-Code AI Tools"),
    "slack-vs-teams": ("collaboration", "Slack vs Teams"),
    "free-design-software": ("design-tools", "Free Design Software"),
    "ai-marketing-automation": ("marketing-tools", "AI Marketing"),
    "productivity-saas-2026": ("productivity", "Productivity SaaS 2026"),
    "asana-vs-jira": ("project-management", "Asana vs Jira"),
    "team-collaboration": ("collaboration", "Team Collaboration"),
    "productivity-hybrid-teams": ("productivity", "Hybrid Team Tools"),
    "ai-productivity-tools": ("ai-tools", "AI Productivity"),
    "marketing-automation": ("marketing-tools", "Marketing Automation"),
    "design-software-uiux": ("design-tools", "UI/UX Design"),
    "crm-small-business": ("crm-sales", "CRM Small Business"),
    "pm-agile-teams": ("project-management", "Agile PM Tools"),
    # Featured
    "best-pm-tools-2026": ("project-management", "Best PM Tools 2026"),
    "top-crm-compared": ("crm-sales", "Top CRM Compared"),
    "no-code-ai-guide": ("ai-tools", "No-Code AI Guide"),
    "best-design-2026": ("design-tools", "Best Design 2026"),
}


def hash_color_shift(name, base_hex, shift_range=40):
    """Create a slight color variation based on tool name hash."""
    h = int(hashlib.md5(name.encode()).hexdigest()[:6], 16)
    r = int(base_hex[1:3], 16)
    g = int(base_hex[3:5], 16)
    b = int(base_hex[5:7], 16)
    r = max(0, min(255, r + (h % shift_range) - shift_range // 2))
    g = max(0, min(255, g + ((h >> 8) % shift_range) - shift_range // 2))
    b = max(0, min(255, b + ((h >> 16) % shift_range) - shift_range // 2))
    return f"#{r:02x}{g:02x}{b:02x}"


def gen_tool_svg(slug, category, display_name, icon, size=200):
    """Generate a square tool image SVG."""
    colors = CATEGORY_COLORS.get(category, ("#374151", "#6B7280", "#F3F4F6"))
    c1 = hash_color_shift(slug, colors[0])
    c2 = hash_color_shift(slug + "end", colors[1])
    accent = colors[2]

    # Unique angle based on hash
    angle = int(hashlib.md5(slug.encode()).hexdigest()[:4], 16) % 360

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 {size} {size}">
  <defs>
    <linearGradient id="bg-{slug}" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate({angle % 90})">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="{size}" height="{size}" rx="16" fill="url(#bg-{slug})"/>
  <circle cx="{size//2}" cy="{size//2 - 15}" r="42" fill="{accent}" opacity="0.15"/>
  <text x="{size//2}" y="{size//2 - 5}" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="36" font-weight="700" fill="{accent}">{icon}</text>
  <text x="{size//2}" y="{size//2 + 35}" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="{accent}" opacity="0.9">{display_name}</text>
</svg>'''
    return svg


def gen_guide_svg(slug, category, title, w=600, h=400):
    """Generate a wide guide hero image SVG."""
    colors = CATEGORY_COLORS.get(category, ("#374151", "#6B7280", "#F3F4F6"))
    c1 = hash_color_shift(slug + "hero", colors[0])
    c2 = hash_color_shift(slug + "hero-end", colors[1])
    accent = colors[2]

    # Decorative elements based on hash
    h_val = int(hashlib.md5(slug.encode()).hexdigest()[:8], 16)
    cx1 = 100 + (h_val % 200)
    cy1 = 80 + ((h_val >> 8) % 150)
    cx2 = 350 + ((h_val >> 16) % 200)
    cy2 = 200 + ((h_val >> 24) % 150)
    r1 = 60 + (h_val % 40)
    r2 = 40 + ((h_val >> 4) % 50)

    # Split title into lines if needed
    words = title.split()
    if len(words) <= 3:
        lines = [title]
    else:
        mid = len(words) // 2
        lines = [" ".join(words[:mid]), " ".join(words[mid:])]

    text_y_start = h // 2 - (len(lines) - 1) * 16
    text_elems = ""
    for i, line in enumerate(lines):
        text_elems += f'  <text x="{w//2}" y="{text_y_start + i * 34}" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="28" font-weight="700" fill="{accent}">{line}</text>\n'

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="gbg-{slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" rx="20" fill="url(#gbg-{slug})"/>
  <circle cx="{cx1}" cy="{cy1}" r="{r1}" fill="{accent}" opacity="0.08"/>
  <circle cx="{cx2}" cy="{cy2}" r="{r2}" fill="{accent}" opacity="0.06"/>
  <rect x="{w-120}" y="20" width="100" height="4" rx="2" fill="{accent}" opacity="0.1"/>
  <rect x="20" y="{h-30}" width="80" height="4" rx="2" fill="{accent}" opacity="0.1"/>
{text_elems}</svg>'''
    return svg


def gen_category_svg(slug, w=600, h=400):
    """Generate a category fallback image."""
    colors = CATEGORY_COLORS.get(slug, ("#374151", "#6B7280", "#F3F4F6"))
    cat_name = slug.replace("-", " ").title()
    return gen_guide_svg(f"cat-{slug}", slug, cat_name, w, h)


def main():
    count = 0

    # 1. Tool images (200x200)
    for slug, (cat, name, icon) in TOOLS.items():
        svg = gen_tool_svg(slug, cat, name, icon)
        path = TOOLS_DIR / f"{slug}.svg"
        path.write_text(svg, encoding="utf-8")
        count += 1

    print(f"Generated {count} tool images in {TOOLS_DIR}")

    # 2. Guide hero images (600x400)
    guide_count = 0
    for slug, (cat, title) in GUIDES_META.items():
        svg = gen_guide_svg(slug, cat, title)
        path = GUIDES_DIR / f"{slug}.svg"
        path.write_text(svg, encoding="utf-8")
        guide_count += 1

    print(f"Generated {guide_count} guide images in {GUIDES_DIR}")

    # 3. Category fallback images
    cat_count = 0
    for slug in CATEGORY_COLORS:
        svg = gen_category_svg(slug)
        path = CATEGORIES_DIR / f"{slug}.svg"
        path.write_text(svg, encoding="utf-8")
        cat_count += 1

    print(f"Generated {cat_count} category images in {CATEGORIES_DIR}")
    print(f"Total: {count + guide_count + cat_count} images")


if __name__ == "__main__":
    main()
