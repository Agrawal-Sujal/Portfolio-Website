# Portfolio

React + Vite portfolio. All content comes from Firebase Firestore, so adding a project, job or
achievement means adding a document in the Firebase console — no code change, no redeploy.

If Firebase isn't configured (or can't be reached), the site falls back to the content in
`src/data/defaults.js`, so it always renders.

## Run it

```bash
npm install
cp .env.example .env     # then fill in your Firebase web-app keys
npm run dev
```

## Set up Firebase (once)

1. Firebase console → create a project → **Build → Firestore Database** → create (production mode).
2. **Project settings → Your apps → Web app** → copy the config values into `.env`
   (`VITE_FIREBASE_*`). The same variables must be set on your host (Vercel etc.).
3. **Firestore → Rules** → paste `firestore.rules` (public read, no public write) → Publish.
4. Upload the starting content:
   - **Project settings → Service accounts → Generate new private key**
   - save the file as `serviceAccountKey.json` in this folder (it is git-ignored)
   - run `npm run seed`

After that, edit content in the console. Don't re-run `seed` unless you want to reset the
seeded documents to what's in `defaults.js`.

## Where things live in Firestore

| Collection / doc  | Shows up on                      | Fields |
| ----------------- | -------------------------------- | ------ |
| `profile/main`    | name, hero text, intro, links, toast, page titles | `name`, `role`, `location`, `avatar`, `hero{struck,line,accent}`, `greeting`, `intro`, `affiliation`, `affiliationUrl`, `statusLine`, `welcome{title,text}`, `notice{title,text}`, `links{email,github,linkedin,twitter,resume}`, `pages{resume{experience},projects{title,subtitle,note},games{title,subtitle}}` |
| `skills/main`     | right panel + resume skill cards | `languages[]`, `technologies[]`, `tools[]` |
| `highlights`      | home stat cards                  | `value`, `label`, `title`, `text`, `icon`, `order` |
| `proficiency`     | home "Technical proficiency"     | `title`, `icon`, `tone`, `order`, and by `type`: `"tags"` → `items[]`; `"stats"` → `stats[{value,label}]`; `"list"` → `list[{label,icon}]` |
| `experience`      | resume (heading = `pages.resume.experience`) | `role`, `company`, `location` (optional), `start`, `end`, `bullets[]`, `order` |
| `education`       | resume                           | `school`, `degree`, `grade`, `location`, `start`, `end`, `order` |
| `achievements`    | resume                           | `title`, `text`, `order` |
| `profiles`        | resume "Coding Profiles"         | `platform`, `username`, `rating`, `url`, `icon`, `order` |
| `certifications`  | resume (hidden when empty)       | `title`, `issuer`, `order` |
| `projects`        | projects page                    | `title`, `badge`, `bullets[]`, `tech[]`, `icon`, `tone`, `links[{label,url,kind}]`, `timeline[{date,title,text}]`, `order` |
| `games`           | games page                       | `title`, `description`, `tags[]`, `url`, `order` |

- **Adding something:** add a document to the collection with an `order` number (lowest first).
  The document id can be anything.
- **Hiding something:** delete the document.
- `icon` values: `terminal`, `zap`, `server`, `database`, `trophy`, `code`, `git`, `cloud`, `video`,
  `layers`, `award`, `briefcase`, `graduation`, `file`, `user`, `download`, `github`, `linkedin`, `twitter`, `mail`.
- `tone` values: `indigo`, `green`, `amber`, `sky`, `purple`.
- `links[].kind` is `"demo"`, `"github"` or `"download"` (controls the icon).
- Right-panel rows (email, GitHub, LinkedIn, Twitter/X) only appear when their URL is set.
- Once Firebase is reachable it is the source of truth: an empty collection shows nothing.

## Still to fill in

- `projects → * → timeline`: the cards expand to show it (shows "Timeline coming soon." until added)
- `profile/main → affiliationUrl`: link for "IIIT Jabalpur" on the home page (plain text until set)
- `profile/main → links.twitter`: add it and the Twitter / X row appears
- Profile photo: drop `avatar.jpg` into `public/` (or set `profile.avatar` to any image URL). Initials show until then.

## Terminal

The home page terminal reads from the same data. Commands: `help`, `about`, `skills`, `experience`,
`projects`, `education`, `achievements`, `profiles`, `certs`, `contact`, `open <page>`, `whoami`, `clear`.
Up/down arrows walk history; Ctrl+L clears.

## Deploy

`npm run build` → `dist/`. The included `vercel.json` rewrites all paths to `index.html` so
`/resume` and `/projects` work on refresh. On another host, add the same SPA fallback.

## Resume → PDF

The resume page has a print stylesheet (light theme, no navigation). "Print / Save as PDF" uses the browser's print dialog.
