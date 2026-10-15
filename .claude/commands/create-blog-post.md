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

## Source archive

Before creating either post, archive exact copies of both source files at:

- `content/blog/sources/{slug_en}/source-es.md`
- `content/blog/sources/{slug_en}/source-en.md`

Here `{slug_en}` is `filename_en` without `.md`. Archive both inputs even when their original paths are already inside the repository. If the user passes these exact archive paths as the inputs, use the files in place without copying them over themselves.

The input paths may be outside the repository. Read them from the paths provided and copy their contents unchanged into the archive. Use the archived copies as the canonical sources for the rest of the command. Do not edit or normalize the archived copies; allowed text fixes apply only to the generated posts.

Before copying, check that neither archive destination already exists, unless it is exactly the same path as its corresponding input. If either destination exists at a different path, do not overwrite it; ask the user how to proceed. Check both archive destinations before copying either file so the archive pair cannot be left incomplete.

## Required output

- Create the Spanish post at `content/blog/es/{filename_es}`.
- Create the English post at `content/blog/en/{filename_en}`.
- Use previous posts in `content/blog/es` and `content/blog/en` as the template for structure, frontmatter order, and general formatting.

## Rules to follow

1. Read `input_es` and `input_en` exactly as provided.
   - These are full paths.
   - The files may live outside the repo.
   - If needed, read them with shell `cat`.
   - Archive exact copies at `content/blog/sources/{slug_en}/source-es.md` and `source-en.md`, where `{slug_en}` is `filename_en` without `.md`. If an input already is its corresponding archive file, leave it in place. Use the archived copies as the canonical sources for all later steps.
2. Respect the original text content.
   - Do **not** rewrite, summarize, or paraphrase.
   - Only make minimal text fixes when clearly necessary (like a typo or a missing accent for spanish like "facil" -> "fácil").
3. Always replace:
   - `"` and `"` with `"`
   - `'` with `'`
4. Preserve paragraph spacing and line breaks exactly as they appear in the archived source file.
   - **First**, read each archived source file with `cat -A` to reveal exact whitespace characters.
   - The source will use one of these patterns (or a mix of both):
     * `  ` (two trailing spaces at end of line, visible as `  $` in `cat -A`) = soft line break within the same paragraph. Replicate it as `  ` (two spaces) at end of line.
     * Empty line (visible as `$` on its own in `cat -A`) = actual paragraph separation. Replicate it as an empty line.
   - Do **not** blindly insert `\` lines between paragraphs. Follow what the source does.
   - Exception: before/above titles like `## Some title` and before/after lists, no extra spacing is needed (source typically has none).
5. If you make any text change beyond the required quote normalization or an obvious typo/accent fix, mention it briefly at the end.

## Frontmatter requirements

Follow the same frontmatter shape used by existing posts. Use the same field order when possible.

- `date`: today's date in `YYYY-MM-DD`
- `author`: `"Farox"` unless specified in the input file/s.
- `tags`: meaningful tags for each language; they may be the same when valid in both languages (like `Software`)
- `aliases`:
  - Spanish post: `[{filename_en without .md}]`
  - English post: `[{filename_es without .md}]`
- Keep other standard fields used by existing posts when appropriate, including `tintasur: true` if that is how current posts are structured.

## Cover image

1. Look for the cover image link described in the source content under `Imagen de Portada`.
2. Download that same image for both languages.
3. Save it in the repo at `public/images/blog/`.
4. The saved image filename must match `filename_en` without `.md`, using the original image extension when possible.
   - Example idea: if `filename_en` is `my-post.md` and the image is a `.png`, save it as `public/images/blog/my-post.png`.
5. Set `url_img` in both posts to the public path, for example `/images/blog/my-post.png`.
6. If the image link is missing or download fails, stop and ask the user how to proceed.

## Other images to be downloaded

There could be more link to images to be downloaded:
`[LINK TO AN IMAGE](https://drive.google.com/file/d/........)`.
Try to download all the images and put them into `public/images/blog/` and name each `filename` as `filename_en-{x}` (without `.md`) where `{x}` is an index we given to avoid filename collision.

## Content extraction guidance

- Use the post title from the source content.
- Use an appropriate description from the source content.
  - Prefer an explicit summary/subtitle when present.
  - Otherwise use a short excerpt from the source without changing its meaning.
- Keep each language aligned with its own source file.

## Execution steps

1. Validate all four arguments, the source paths, the article output paths, and both archive paths. Do not overwrite existing article outputs or archive files.
2. Archive exact copies of both sources at `content/blog/sources/{slug_en}/source-es.md` and `source-en.md`, except when an input already is its corresponding archive file. Validate both archive paths before copying either input.
3. Inspect a few existing blog posts in `content/blog/es` and `content/blog/en`.
4. Read the archived source markdown files with `cat -A`.
5. Extract the metadata and body content.
6. Normalize only what is allowed:
   - smart quotes
   - apostrophes
   - obvious typo/accent fixes if truly needed
   - paragraph spacing and line breaks (soft breaks with `  `, paragraph separation with empty lines) to match the archived source
7. Download and save the cover image.
8. Create the new Spanish and English blog post files.
9. Do a quick verification pass to confirm:
   - both archived source files exist
   - both files exist in the correct directories
   - frontmatter is complete
   - aliases point to the other language slug
   - both posts use the same `url_img`
   - paragraph spacing and line breaks match the source files (verify with `cat -A` if needed)

## Final response

- Briefly report which files were created.
- Include the paths of the archived source files.
- If any text was changed beyond the required normalization rules, list those changes in a short summary.
