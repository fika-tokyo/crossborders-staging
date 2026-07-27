# CROSSBORDERS コーポレートサイト【STAGING / プレビュー用】

> ⚠️ これは**本番ではありません**。修正内容を公開前に確認するためのプレビュー環境です。
> 確認 OK 後、本番リポジトリ `fika-tokyo/crossborders` に同期して公開します。

**プレビューURL:** https://fika-tokyo.github.io/crossborders-staging/
**本番サイト:** https://crossborders.tokyo/

本番との差分は3点のみ(同期時にこの3ファイルは上書きしない):
`.github/workflows/deploy.yml`(ベースパス+STAGINGフラグ)/ `public/robots.txt`(検索エンジン拒否)/ `public/CNAME`・`sitemap.xml`(なし)

---

## 対応言語

日本語 / 中文 / English の3言語に対応（**初期表示は日本語**）。
ヘッダー右上の **日 / 中 / EN** で切り替えでき、選択は次回以降も保持されます。

## ローカルでの実行

```bash
npm install
npm run dev      # 開発サーバー（既定 http://localhost:5173）
npm run build    # 本番ビルド（出力先 dist/）
npm run preview  # 本番ビルドのローカル確認
```

## 編集方法

- **すべての文言**は [`src/i18n.jsx`](src/i18n.jsx) に集約。言語ごとに同じ構造のデータがあり、ここを編集すれば各言語に反映されます。
- **配色・フォント**は [`src/index.css`](src/index.css) 冒頭の `@theme` ブロック（ブランドカラー: 青 `#385988` / コーラルレッド `#E94F5B` / チャコール `#3E3A39`）。
- **ロゴ**は [`src/components/Logo.jsx`](src/components/Logo.jsx) に SVG で実装（エンブレム + ワードマーク）。
- **ページ**は `src/pages/`、**ヘッダー / フッター**は `src/components/`。

## ページ構成

| パス | ページ | 内容 |
| --- | --- | --- |
| `/` | ホーム | ヒーロー・存在意義・五つの境界・バリューチェーン概要・CTA |
| `/about` | 私たちについて | ブランド哲学・五つの境界・FIKA / UNPLAN の礎・グループ内の位置づけ |
| `/value` | 価値創造 | 5段階のバリューチェーン・差別化マトリクス・四つの強み |
| `/partnership` | パートナーシップ | 協働の哲学・三つの協働のかたち |
| `/contact` | お問い合わせ | 入力検証つきフォーム |
| `/thank-you` | 送信完了 | フォーム送信後に自動遷移 |

## 公開・自動デプロイ

`main` ブランチに push すると、GitHub Actions（[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)）が自動でビルドし、GitHub Pages に公開します。手動アップロードは不要です。

- ビルド時に `VITE_BASE=/crossborders/` を設定し、`index.html` を `404.html` に複製（SPA ルーティングのフォールバック）。
- `vite.config.js` は `base: process.env.VITE_BASE || '/'`、`main.jsx` は `import.meta.env.BASE_URL` から Router の `basename` を設定。

## TODO（要差し替え）

- [`src/i18n.jsx`](src/i18n.jsx) の連絡先（`contact@crossborders.jp` / `+81 3-0000-0000`）はプレースホルダーです。実際のメール・電話に差し替えてください。
- UNPLAN の実写真・チーム写真・施工前後の写真などを用意すると、より説得力が増します。
