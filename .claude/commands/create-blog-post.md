---
description: Create a new bilingual blog post pair for es and en
argument-hint: <input_es> <input_en> <filename_es> <filename_en>
---

# create-blog-post

Create a new blog post in **both** `es` and `en` for this repository.

## Arguments

This command expects 4 positional arguments passed after the command name. If any are missing or empty, **stop and ask the user** for them before doing any work.

| Position | Name | Description |
|----------|------|-------------|
| `$1` | `input_es` | Full path to the Spanish source markdown file |
| `$2` | `input_en` | Full path to the English source markdown file |
| `$3` | `filename_es` | Output filename for the Spanish post (e.g. `my-post.md`) |
| `$4` | `filename_en` | Output filename for the English post (e.g. `my-post.md`) |

Received arguments: `$ARGUMENTS`

## Source files

The input paths may be outside the repository. Read them directly from the paths provided and use them as the canonical sources for the whole command. Do not create source copies, backups, or archive directories.

## Required output

- Create the Spanish post at `content/blog/es/{filename_es}`.
- Create the English post at `content/blog/en/{filename_en}`.
- Use previous posts in `content/blog/es` and `content/blog/en` as the template for frontmatter shape and file structure only; copy paragraph formatting from the source, since older posts use legacy `\` separator lines.

## Rules to follow

1. Read `input_es` and `input_en` exactly as provided.
   - These are full paths.
   - The files may live outside the repo.
   - Use your file-reading tool for the text itself; use shell `cat` only if no file-reading tool is available.
   - Use these source files directly for all later steps.
2. Respect the original text content.
   - Do **not** rewrite, summarize, or paraphrase.
   - Only make minimal text fixes when clearly necessary (like a typo or a missing accent for Spanish like "facil" -> "fácil").
3. Always replace:
   - `“` and `”` with `"`
   - `‘` and `’` with `'`
4. Preserve paragraph spacing and line breaks exactly as they appear in the source file.
   - Inspect each source file with `cat -A` (or `cat -vet`) for whitespace only: it turns every accented character into mojibake, so never transcribe text from its output.
   - The source will use one of these patterns (or a mix of both):
     * `  ` (two trailing spaces at end of line, visible as `  $` in `cat -A`) = soft line break within the same paragraph. Replicate it as `  ` (two spaces) at end of line.
     * Empty line (visible as `$` on its own in `cat -A`) = actual paragraph separation. Replicate it as an empty line.
     * A single trailing space = no break. Drop it.
   - Do **not** blindly insert `\` lines between paragraphs. Follow what the source does.
5. If you make any text change beyond the required quote normalization or an obvious typo/accent fix, mention it briefly at the end.
6. If this command does not cover a situation, stop and ask the user instead of guessing.

## Frontmatter requirements

Follow the same frontmatter shape used by existing posts, in this field order, with string values double-quoted so a `: ` inside a title cannot break the YAML:

```yaml
---
title: "..."
description: "..."
url_img: "/images/blog/<name>.<ext>"
date: "YYYY-MM-DD"
author: "..."
tags: ["...", "..."]
aliases: ["..."]
tintasur: false
---
```

- `title`: the source title.
- `description`: the source subtitle/summary.
- `date`: today's date.
- `author`: the author named in the source, else `Farox`.
- `tags`: meaningful tags for each language; they may be the same when valid in both languages (like `Software`).
- `aliases`:
  - Spanish post: `[{filename_en without .md}]`
  - English post: `[{filename_es without .md}]`
- `tintasur`: `false` by default; set `true` only when the user confirms the piece belongs to the Tinta Sur collaboration (it adds the credit footer).

## Cover image

1. Look for the cover image link described in the source content under `Imagen de Portada` or `Foto de Portada`.
2. By default the same image serves both languages — download it once. If the cover carries text tied to one language, ask the user; then save one cover per language, named from `filename_es` and `filename_en`, and give each post its own `url_img`.
3. Save it in the repo at `public/images/blog/`.
4. Name the file from `filename_en` without `.md`, using the downloaded file's actual extension (check with `file`). Example: if `filename_en` is `my-post.md` and the image downloads as WebP, save `public/images/blog/my-post.webp`.
5. Set `url_img` in both posts to the same public path, for example `/images/blog/my-post.webp` (per-language paths only in the language-specific cover case above).
6. If the image link is missing or download fails, stop and ask the user how to proceed.

## Other images to be downloaded

There may be more image links to download:
`[LINK TO AN IMAGE](https://drive.google.com/file/d/........)` or `**FOTO | [LINK](...)`.

1. Drive links are viewer pages, not files: download with `https://drive.google.com/uc?export=download&id=<ID>` (or `gdown`), then confirm with `file` that the result is an image.
2. Save them in `public/images/blog/`, named `{filename_en}-{x}` where `{x}` is an index starting at 1. Images shared by both posts use that same path in both bodies; a Spanish-only image uses `{filename_es}-{x}`. Ask the user if unsure.
3. Replace each `**FOTO | [LINK](...)` line in place with `![<alt text in that language>](/images/blog/<name>.<ext>)` in both posts, dropping the `FOTO` label.
4. If an image cannot be downloaded, keep its original link in the post and report it.

## Content extraction guidance

- Everything above `**CUERPO DEL TEXTO**` (`Título`, `Bajada`, `Foto de Portada`, `Autor`) supplies the frontmatter; the body starts after that marker and never repeats the title as an H1.
- Use the post title from the source content.
- Use an appropriate description from the source content.
  - Prefer an explicit summary/subtitle when present.
  - Otherwise use a short excerpt from the source without changing its meaning.
- Keep each language aligned with its own source file.

## Execution steps

1. Validate all four arguments, the source paths, and the article output paths. Do not overwrite existing article outputs.
2. Inspect a few existing blog posts in `content/blog/es` and `content/blog/en`.
3. Read the source markdown files: text with your file-reading tool, whitespace with `cat -A`.
4. Extract the metadata and body content.
5. Normalize only what is allowed:
   - smart quotes
   - apostrophes
   - obvious typo/accent fixes if truly needed
   - paragraph spacing and line breaks (soft breaks with `  `, paragraph separation with empty lines) to match the source
6. Download and save the cover and the inline images.
7. Create the new Spanish and English blog post files, with every `FOTO`/link placeholder replaced by the local image.
8. Do a quick verification pass to confirm:
   - both files exist in the correct directories
   - frontmatter is complete and its string values are quoted
   - aliases point to the other language slug
   - both posts use the same `url_img` (unless per-language covers)
   - every `url_img` and body `/images/blog/...` path exists on disk, and no `FOTO` or `drive.google.com` placeholder remains
   - paragraph spacing and line breaks match the source files (verify with `cat -A` if needed)

## Final response

- Briefly report which files were created.
- If any text was changed beyond the required normalization rules, list those changes in a short summary.
