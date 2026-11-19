// Structured technical case studies for featured portfolio projects (PinPic & CtrlLink).

export const PROJECT_DETAILS = {
  pinpic: {
    id: "pinpic",
    title: "PinPic",
    tagline: "Location-Based Photo Journaling Platform Across Android & Web",
    timeframe: "June 2026 – Present",
    tone: "indigo",
    icon: "layers",
    liveUrl: "https://pinpic.sujalagrawal.in",
    sourceUrl: "https://github.com/Agrawal-Sujal/PinPic",
    summary:
      "PinPic transforms everyday camera rolls into an interactive, privacy-aware geographic journal. Built end-to-end across a native Android app, a responsive React web client, and a Spring Boot backend, it extracts EXIF GPS coordinates, groups thousands of photo pins smoothly across map zoom levels using a custom 2D KD-Tree clustering engine, and keeps edits flowing offline via an ordered write-ahead sync queue.",
    metrics: [
      { value: "5,000+", label: "Map Pins @ Zero UI Lag" },
      { value: "0–21", label: "Precomputed Zoom Pyramid" },
      { value: "O(log N + K)", label: "Viewport Range Queries" },
      { value: "3 Tiers", label: "Private · Friends · Public" },
    ],
    features: [
      {
        title: "Interactive Map & Multi-Zoom Clustering",
        description:
          "Projects photos onto Google Maps (Android) and Leaflet (Web), dynamically merging nearby pins into weighted centroid clusters with cover thumbnails across zoom levels 0 to 21.",
      },
      {
        title: "Automated EXIF & Location Capture",
        description:
          "Captures geotagged photos in-app via CameraX or imports gallery shots, parsing embedded GPS coordinates from JPEG and RIFF/WebP metadata directly on the client.",
      },
      {
        title: "Offline-First Sync Engine",
        description:
          "Queues offline photo uploads, cluster edits, and deletions locally in Room DB (Android) and Dexie IndexedDB (Web), then reconciles sequentially when connectivity returns.",
      },
      {
        title: "Direct Pre-Signed S3 Media Pipeline",
        description:
          "Streams photo binaries directly from mobile and web clients to dual AWS S3 media and profile buckets using short-lived pre-signed URLs without overloading the API server.",
      },
      {
        title: "Granular Privacy & Social Discovery",
        description:
          "Applies per-photo PRIVATE, FRIENDS, and PUBLIC visibility rules backed by cluster-level rollups, user search, follower relationships, and friend map exploration.",
      },
      {
        title: "Cross-Platform Auth & Self-Healing Storage",
        description:
          "Combines Google Sign-In, Firebase Auth / Google ID tokens, stateless JWT sessions, local thumbnail generation, and automated Web unclustered-photo reconciliation.",
      },
    ],
    architecture: [
      {
        layer: "Android Native Client",
        stack: "Kotlin 2.2 · Jetpack Compose (Material 3) · Dagger Hilt · Room · WorkManager",
        details:
          "Built with single-activity Compose Navigation 3, CameraX capture, Play Services Location + Google Maps Compose, Coil image loading, and DataStore preferences. Background WorkManager workers drain the Room DB sync queue reliably even across process restarts.",
      },
      {
        layer: "Web Progressive Client",
        stack: "React 18 · Vite 6 · Tailwind CSS 3.4 · Leaflet 1.9 · Dexie (IndexedDB)",
        details:
          "Delivers full map exploration, gallery inspection, drag-and-drop uploads, and profile/follower browsing. Parses EXIF GPS tags (including a custom RIFF/WebP binary chunk parser alongside exifr), clusters pins off-main-flow, and persists local state in Dexie IndexedDB.",
      },
      {
        layer: "Core API & Sync Backend",
        stack: "Spring Boot 4.1 (Java 17) · Spring Security JWT · Hibernate JPA · PostgreSQL 16",
        details:
          "Stateless REST API managing authentication, cursor-based delta synchronization, cluster and photo ownership graphs, friend/follower permissions, and pre-signed S3 URL issuance.",
      },
      {
        layer: "Media Storage & Gateway",
        stack: "AWS S3 (Dual Buckets) · Docker Compose · Nginx Reverse Proxy · Certbot SSL",
        details:
          "Dual S3 buckets separate photo/thumbnail assets from profile avatars (15-min PUT / 60-min GET pre-signed URLs). Deployed via Docker Compose behind Nginx configured with gzip compression, 100 MB upload support, 120s upload timeouts, and X-Request-ID correlation.",
      },
    ],
    engineering: [
      {
        title: "Custom 2D KD-Tree & Multi-Zoom Clustering Pyramid",
        points: [
          "Projects (lat, lon) coordinates into normalized Spherical Mercator [0, 1) space so distance thresholds remain consistent across latitudes.",
          "Constructs a balanced 2D KD-Tree in O(N log N) time using recursive median splits alternating across X and Y axes.",
          "Builds a 22-layer zoom pyramid (zooms 0–21) using zoom-scaled Euclidean clustering thresholds radiusPixels / (extent × 2^z) (radiusPixels = 40.0, extent = 512) and weighted centroid aggregation.",
          "Indexes every zoom level inside its own (lon, lat) KD-Tree so map pan/zoom executes O(log N + K) bounding-box viewport queries off the UI thread, sustaining 5,000+ pins with zero frame drops.",
          "Supports O(depth) dynamic KDTree.insert leaf grafting so newly captured photos appear across zoom layers immediately without rebuilding the entire pyramid.",
        ],
      },
      {
        title: "Ordered Write-Ahead Offline Sync & Delta Pull",
        points: [
          "Records every offline mutation (ADD, UPDATE, DELETE for CLUSTER and PHOTOS entities) in a durable local sync_operations queue in Room DB and Dexie.",
          "Pushes operations sequentially with batchSize = 1 so newly created parent CLUSTER rows receive a canonical globalClusterId from PostgreSQL before child PHOTOS sync.",
          "Uploads full-resolution media and locally generated thumbnails directly to AWS S3 via 15-minute pre-signed PUT URLs before committing photo metadata to the sync controller.",
          "Pulls remote updates incrementally via GET /api/sync/pull filtered by a monotonic lastOperationId cursor and caller deviceId, preventing duplicate echo loops across devices.",
          "Executes soft-delete confirmation so local records are purged only after cloud deletion succeeds, paired with self-healing reconcileUnclusteredPhotos passes on Web.",
        ],
      },
      {
        title: "Visibility-Aware Clusters & Social Graph",
        points: [
          "Enforces server-side visibility authorization across PRIVATE, FRIENDS, and PUBLIC scopes on every photo fetch, gallery query, and shared profile map.",
          "Maintains per-cluster rollup counts (publicPhotoCount, friendPhotoCount, privatePhotoCount) so shared maps never leak hidden pins or empty private clusters.",
          "Verifies Google Sign-In credentials via Firebase Auth and Google API Client before issuing stateless HS-signed JWTs via Spring Security.",
        ],
      },
    ],
    apis: [
      {
        group: "Delta Sync & Media Upload",
        endpoints: [
          "POST /api/sync/push — Ordered batch operation applier for cluster & photo mutations",
          "GET /api/sync/pull — Cursor-based incremental delta feed scoped by lastOperationId & deviceId",
          "POST /api/photos/presigned-upload — Issues 15-min AWS S3 PUT URLs for photos & thumbnails",
          "GET /api/photos/{id}/url — Issues 60-min scoped S3 GET URLs after visibility checks",
        ],
      },
      {
        group: "Auth, Social & Map Discovery",
        endpoints: [
          "Google OAuth / Firebase token exchange -> stateless JWT authentication filter",
          "User directory search, follower/following graph, and friend visibility resolution",
          "Shared user map & gallery endpoints filtered dynamically by caller relationship",
          "Real-time chat module currently under active development (marked in-progress on Web)",
        ],
      },
    ],
    techGroups: [
      {
        category: "Android",
        items: [
          "Kotlin 2.2",
          "Jetpack Compose",
          "Material 3",
          "Dagger Hilt + KSP",
          "Navigation 3",
          "CameraX 1.6",
          "Google Maps SDK",
          "Room DB 2.8",
          "WorkManager",
          "DataStore",
          "Retrofit + OkHttp",
          "Coil",
          "ExifInterface",
          "Firebase Auth",
        ],
      },
      {
        category: "Web Client",
        items: [
          "React 18.3",
          "Vite 6",
          "Tailwind CSS 3.4",
          "React Router v6",
          "Leaflet 1.9",
          "React-Leaflet",
          "Dexie (IndexedDB)",
          "exifr + RIFF/WebP EXIF",
          "Axios",
        ],
      },
      {
        category: "Backend & Cloud",
        items: [
          "Spring Boot 4.1",
          "Java 17",
          "Spring Security + JJWT",
          "Spring Data JPA",
          "PostgreSQL 16",
          "AWS SDK S3",
          "Docker Compose",
          "Nginx + Certbot",
        ],
      },
    ],
  },

  ctrllink: {
    id: "ctrllink",
    title: "CtrlLink",
    tagline: "High-Throughput URL Shortener, Hierarchical Path Router & Real-Time Analytics Engine",
    timeframe: "September 2026 – Present",
    tone: "sky",
    icon: "server",
    liveUrl: "https://ctrllink.sujalagrawal.in",
    sourceUrl: "https://github.com/Agrawal-Sujal/CtrlLink",
    summary:
      "CtrlLink is a production-oriented link management platform engineered for sub-5ms redirect performance under load. It pairs Base62 short code generation and multi-level folder aliases with Redis Hash entity caching, asynchronous write-behind click analytics, atomic Lua rate limiting, AES-256 link passwords, and a 3-node Nginx-balanced Spring Boot cluster.",
    metrics: [
      { value: "1,440+ req/s", label: "Sustained Cluster Throughput" },
      { value: "3.16 ms", label: "Average Redirect Latency (p95 < 8 ms)" },
      { value: "173K+", label: "k6 Requests @ 0% Error Rate" },
      { value: "-37%", label: "Redirect Latency via Redis Cache" },
    ],
    features: [
      {
        title: "Nested Folder Path Routing",
        description:
          "Organizes links inside custom hierarchies up to 5 segments deep (such as youtube/tutorials or work/q3-deck) with trailing-slash auto-slug generation and root aliases.",
      },
      {
        title: "AES-256 Link Checkpoint & Expiration",
        description:
          "Secures sensitive destinations behind optional AES-encrypted passwords routed through a dedicated /p/{path} verification flow, owner password reveal, and HTTP 410 expiration handling.",
      },
      {
        title: "Real-Time Click & Geo Analytics",
        description:
          "Tracks 24-hour, 7-day, and 30-day rolling click trends alongside country breakdowns, referrers, and device distributions rendered interactively with Recharts.",
      },
      {
        title: "Instant QR Codes & Auto Metadata",
        description:
          "Automatically scrapes destination page titles and meta descriptions via Jsoup upon shortening, and exports crisp downloadable QR codes (ctrllink-{shortId}-qr.png).",
      },
      {
        title: "Rich Social Bot Previews",
        description:
          "Detects crawler User-Agents from WhatsApp, Slack, Discord, Telegram, Twitter, LinkedIn, and Facebook to serve server-side OpenGraph/Twitter meta HTML.",
      },
      {
        title: "Accounts, OAuth & API Docs",
        description:
          "Supports Google OAuth 2.0, BCrypt email signup with SMTP verification and reset tokens, Redis JWT revocation, Light/Dark themes, and live Swagger/OpenAPI docs.",
      },
    ],
    architecture: [
      {
        layer: "TypeScript Web Dashboard",
        stack: "React 18.3 · TypeScript 5.6 · Vite 5.4 · Tailwind CSS 4.3 · Recharts 3.10",
        details:
          "Single-page app built with React Router v7, Recharts area/bar/pie visualizations, qrcode.react PNG downloads, Google OAuth, canvas-confetti feedback, and persistent dark/light theming.",
      },
      {
        layer: "3-Node Stateless Backend Cluster",
        stack: "Spring Boot 4.1.2 (Java 21) · PostgreSQL 16 · Flyway (V1–V4) · HikariCP",
        details:
          "Three stateless Spring Boot nodes share PostgreSQL (versioned via Flyway migrations) and Redis, handling URL creation, Base62 ID allocation, password verification, folder dictionaries, and Swagger OpenAPI specs.",
      },
      {
        layer: "Redis Acceleration & Write-Behind Tier",
        stack: "Redis 7 · Hash Entity Cache · Sorted Set Time-Series · Lua Scripting",
        details:
          "Serves cached redirect lookups with 24h TTL, stores rolling 30-day analytics Sorted Sets and Geo-IP caches, executes single-RTT atomic rate limiting, and coordinates distributed batch sync locks.",
      },
      {
        layer: "Edge Routing & Load Balancing",
        stack: "Nginx Reverse Proxy · Round-Robin Upstream · Docker Compose · Certbot",
        details:
          "Distributes traffic evenly across the 3 backend containers, terminates SSL for ctrllink.sujalagrawal.in and api.sujalagrawal.in, and propagates X-Request-Id tracing headers.",
      },
    ],
    engineering: [
      {
        title: "Zero-DB Redirect Hot Path & Startup Cache Warmup",
        points: [
          "@PostConstruct CacheWarmup preloads the top 1,000 most-clicked links (findTop1000ByOrderByClickCountDesc) into Redis before serving live traffic.",
          "RedirectController (GET /{path} and /redirect/{*path}) resolves links directly from Redis Hash url:entity:path:{canonicalPath} (with root and lowercase fallbacks) holding longUrl, hasPassword, title, customPath, and expiryTime (24h TTL).",
          "Eliminates relational database reads on cache hits, reducing average redirect latency by 37% while returning HTTP 410 Gone immediately for expired links.",
        ],
      },
      {
        title: "Lock-Free Hi/Lo Batch ID Allocator & Base62 Encoding",
        points: [
          "Executes an atomic PostgreSQL UPDATE id_range_allocator SET next_id = next_id + ? ... RETURNING next_id - ? inside Propagation.REQUIRES_NEW to reserve blocks of 100 IDs per trip.",
          "Hands out sequential IDs in memory under a lightweight ReentrantLock, eliminating database sequence contention and round-trip latency during concurrent URL creation.",
          "Encodes 64-bit numeric IDs into compact, URL-safe 62-character Base62 (a-zA-Z0-9) short identifiers.",
        ],
      },
      {
        title: "Normalized Folder Dictionary & Dual-Layer Caching",
        points: [
          "Supports nested custom folders up to 5 levels deep with regex-validated segments (<= 50 chars) and trailing-slash auto-slug suffixes (e.g., folder/sub/ -> folder/sub/<autoBase62>).",
          "Maps folder segments through a normalized folder_words dictionary (Flyway V4) cached in L1 ConcurrentHashMap and L2 Redis (folder:word:*) to construct composite folder_path_key + short_id unique indexes.",
        ],
      },
      {
        title: "Async Write-Behind Analytics & Distributed Lock Flush",
        points: [
          "Offloads redirect telemetry to @Async(\"analyticsExecutor\") so logging clicks never blocks HTTP 302 responses.",
          "Writes click events into 30-day rolling Redis Sorted Sets (analytics:clicks:*, analytics:geo:ts:*, analytics:referrer:ts:*, analytics:device:ts:*) plus 24h hourly / 7d daily Hashes, resolving Geo-IP via ipapi.co with 7-day Redis caching (geo:cache:*).",
          "A 30-second @Scheduled AnalyticsScheduler acquires distributed Redis lock analytics:sync:lock (unique token + 25s TTL), atomically renames analytics:click_counts -> click_counts_processing:{token}, and batch-persists deltas to PostgreSQL.",
        ],
      },
      {
        title: "Atomic Lua Rate Limiting & k6 Cluster Benchmark",
        points: [
          "Executes a single-RTT Lua script (INCR + conditional EXPIRE) in Redis to enforce per-IP quotas (shorten: 10/min, login: 10/min, register: 5/min) with fail-open resilience if Redis is unreachable.",
          "Load-tested across 3,000 URLs behind the 3-node Nginx round-robin cluster using k6 under 100 concurrent virtual users: sustained 1,440+ req/sec, 3.16 ms average latency (p95 < 8 ms), and 0% errors across 173,000+ requests.",
        ],
      },
    ],
    apis: [
      {
        group: "URL Shortening, Folders & Redirects",
        endpoints: [
          "GET /{path} & GET /redirect/{*path} — Redis-cached 302 redirect, /p/{path} checkpoint, 410 Gone, & bot OG tags",
          "POST /api/urls — Base62 shortener supporting custom aliases, 5-level folders, auto-slugs, AES passwords & TTL",
          "GET /api/urls & /{shortId}/reveal-password — Dashboard listing, metadata management & owner password retrieval",
        ],
      },
      {
        group: "Analytics, Auth & Observability",
        endpoints: [
          "GET /api/analytics/{path} — 24h, 7d, 30d & all-time time-series clicks, geo, referrer & device breakdowns",
          "Auth suite — Google OAuth 2.0, BCrypt signup, SMTP verification/reset & Redis JWT blacklist",
          "OpenAPI / Swagger UI (/swagger-ui/index.html) & CorrelationLoggingFilter (X-Request-Id)",
        ],
      },
    ],
    techGroups: [
      {
        category: "Frontend",
        items: [
          "React 18.3",
          "TypeScript 5.6",
          "Vite 5.4",
          "Tailwind CSS 4.3",
          "React Router v7",
          "Recharts 3.10",
          "qrcode.react",
          "Google OAuth",
          "Axios",
        ],
      },
      {
        category: "Backend & Data",
        items: [
          "Spring Boot 4.1.2",
          "Java 21",
          "Spring Security + JJWT",
          "PostgreSQL 16 + HikariCP",
          "Flyway (V1–V4)",
          "Redis 7 + Lua",
          "Jsoup",
          "ZXing",
          "SpringDoc OpenAPI",
        ],
      },
      {
        category: "Infrastructure & Testing",
        items: [
          "Nginx Load Balancer",
          "3-Node Cluster",
          "Docker Compose",
          "Certbot SSL",
          "k6 Load Testing",
          "JavaMail SMTP",
        ],
      },
    ],
  },
};
