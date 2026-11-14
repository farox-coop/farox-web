---
name: create-blog-post
description: Create a new bilingual Spanish and English blog post pair for this repository from two Markdown source files. Use when asked to publish or prepare a bilingual blog post.
---

# Create a blog post pair

Generate both the Spanish and English articles from the source texts the person provides. Preserve each language's content and follow the repository's blog format.

## Arguments

The invocation receives four positional arguments, in this order:

1. `input_es`: full path to the Spanish source Markdown.
2. `input_en`: full path to the English source Markdown.
3. `filename_es`: output filename for the Spanish article, for example `mi-articulo.md`.
4. `filename_en`: output filename for the English article, for example `my-article.md`.

Example:

```text
$create-blog-post /path/to/article-es.md /path/to/article-en.md mi-articulo.md my-article.md
```

If any argument is missing or empty, do not read or modify files yet. Ask for the missing values in a single message and wait for the response. Source paths are full paths and may be outside the repository. Output names must be filenames, not paths.

If a source path does not exist, report it and ask for the correct path. If either output file already exists, do not overwrite it: ask for instructions before continuing.

## Destinations and format

- Spanish article: `content/blog/es/{filename_es}`.
- English article: `content/blog/en/{filename_en}`.
- Images: `public/images/blog/`.
- Inspect several current articles in both languages to follow the current structure, frontmatter order, date formats, and Markdown style.
- Write only these articles and their images. Do not create source copies, backups, or archive directories.

## Content fidelity

- Read each source exactly from the provided path. Before writing, inspect it with `cat -vet` to distinguish trailing spaces, blank lines, and line breaks (`cat -A` on GNU/Linux also works).
- Preserve the text of each language. Do not translate, rewrite, summarize, or paraphrase the body.
- Preserve the source's line breaks and paragraph separation. Two trailing spaces indicate a soft break and must be preserved; a blank line separates paragraphs. Also respect whatever syntax the source actually uses, such as `\` or `<br>`.
- Normalize typographic double quotes (`“` and `”`) to ASCII double quotes, and single quotes (`‘` and `’`) to ASCII single quotes. Fix only obvious spelling errors, such as a missing accent.
- If you fix anything beyond those quotes or an obvious spelling error, briefly list the changes at the end.

## Frontmatter

Use the order and fields of existing articles. For the standard fields:

- `title`: the corresponding title from the source.
- `description`: an explicit summary or subtitle from that source; if none exists, use a short excerpt without changing its meaning.
- `url_img`: public path of the local cover image, the same in both languages.
- `date`: current date in `YYYY-MM-DD` format.
- `author`: the author stated in the source; if none, `Farox`.
- `tags`: relevant tags for that language; they may match if valid in both.
- `aliases`: in the Spanish article, a list containing `filename_en` without `.md`; in the English article, a list containing `filename_es` without `.md`.
- Include other standard fields used by current articles when applicable, such as `tintasur: true`.

## Images

1. Look for the image marked as `Imagen de Portada` in the source content and download that same resource for both languages.
2. Save the cover in `public/images/blog/` using the slug of `filename_en` (without `.md`) and the original extension when possible. For example, `my-article.png` if `filename_en` is `my-article.md` and the image is PNG.
3. Use the resulting public path in `url_img` for both articles.
4. If the cover link is missing or cannot be downloaded, stop and ask how to proceed. Do not create the articles yet.
5. Also download the other images explicitly linked as images, including references of the form `[LINK TO AN IMAGE](https://...)`. Name them `{slug_en}-{n}.{ext}`, where `{slug_en}` is `filename_en` without `.md` and `{n}` is an index starting at 1 that avoids collisions. Preserve the alt text and update the image references to use the local public paths.
6. If a secondary image cannot be downloaded, leave its original reference and mention that limitation at the end.

## Procedure

1. Validate the four arguments and source paths; check that neither article output exists.
2. Review several existing articles in `content/blog/es` and `content/blog/en`.
3. Read the source files with `cat -vet`; extract titles, descriptions, authors, tags, text, and images.
4. Download the cover and the other images per the rules above. If the cover fails, stop before creating the articles.
5. Create both articles with complete frontmatter, cross-referenced aliases, and content faithful to each source.
6. Verify that both articles exist, that the frontmatter is complete, that the aliases point to the other language's slug, that `url_img` matches, and that line breaks reflect the sources.

## Final response

Briefly report the paths of the created articles. List any text changes beyond the allowed normalization and any secondary images that could not be downloaded.
