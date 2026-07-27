# CROSSBORDERS サイト — 引き継ぎメモ / 交接说明 / Handoff

このファイルは、次の会話・別の担当者・別の Claude セッションが
すぐ状況を把握できるようにするための引き継ぎノートです。
(交接说明:下一段对话 / 新成员 / 新的 Claude 会话看这份就能接上。)

## 一目で / 概览

- **正式サイト / 正式网址:** https://crossborders.tokyo/
- **GitHub:** https://github.com/fika-tokyo/crossborders （public）
- **ローカル / 本地:** `C:\Users\kdili\projects\crossborders-site`
  ⚠️ `AppData` 配下では Vite dev サーバーが壊れる（MSIX 仮想化）。必ず `projects` 配下で動かす。
- **技術:** React + Vite + Tailwind CSS v4 + React Router、4言語（ja 日本語 / tw 繁體中文 / zh 简体中文 / en English、初期=ja）。

## 更新の流れ / 如何更新（自动部署）

コードを編集 → `git push`（main）→ GitHub Actions が自動ビルドして
GitHub Pages に公開。手動アップロード不要。約1〜2分で反映。

```bash
cd C:\Users\kdili\projects\crossborders-site
npm install        # 初回のみ
npm run dev        # ローカル確認 http://localhost:5173
git add -A && git commit -m "..." && git push
```

## 文言の編集 / 改文字

**表示テキストは原則 [`src/i18n.jsx`](src/i18n.jsx) に集約**（`ja` / `tw` / `zh` / `en`
の4ブロック、同じ構造）。ページ側（`src/pages/*`）は触らず、ここを直す。

> **例外:** 実績ページの事例データと4言語文言は [`src/pages/Works.jsx`](src/pages/Works.jsx) の
> `CASES` / `REGIONS` / `UI` で管理している（i18n 集約原則の唯一の例外）。

## ブランド / 品牌

- 色: 青 `#385988` / コーラルレッド `#E94F5B` / チャコール `#3E3A39`
- ロゴ: [`src/components/Logo.jsx`](src/components/Logo.jsx) に SVG で再現
- 見出しは **Inter（サンセリフ）**。※編集系セリフ（Fraunces）を一度試したが
  クライアントが不採用 → 元に戻した。再提案しないこと。
- ヒーローのテキストは**右寄せを維持**（左寄せにしないこと）。

## ページ構成 / 页面结构

- **/** ホーム: ヒーロー → 一言ポジショニング（中央）→ バリューチェーンの矢印帯
  → 3枚のポータルカード（About / Value / Partnership へ誘導）
- **/about** 私たちについて: ブランド哲学 + 五つの境界（アイコン）+ FIKA グループ
  + グループの力 + 位置づけ（※UNPLAN ブランド名は全削除済み）
- **/value** 価値創造: 追従する目次（TOC）→ 価値創造の流れ + 差別化マトリクス + 四つの強み + FAQ
- **/works** 実績: 日本地図（地域マーカー、クリックで各地域の詳細へ）。「不動産成約事例」/「ホテル運営実績」の2タブ切替。
- **/works/:region** 地域詳細: 東京は23区の放射図（区ごとに代表地標の写真へ線が発散）+ 事例カード。他地域は事例カード。
- **/partnership** 協働: 哲学 + 3つの協働
- **/contact** お問い合わせ: 入力検証つきフォーム → /thank-you
- フッター: CTA バナー + 連絡先（海の写真背景。/contact・/thank-you では CTA 非表示）

## まだ未対応（要・実データ。捏造禁止）/ 待补充（真实素材，禁止编造）

- 連絡先は実データ: メール `contact@crossborders.tokyo` / 電話 `050-1722-7286` / 住所 `東京都 目黒区`。
  お問い合わせフォームは Web3Forms 接続済み（送信先 = 上記メール）。
- **写真**: About「私たちの礎」に実写真なし。各所に実写真＋トーン方向。
- **数字**: 運用資産規模・物件数・経営年数・顧客数。
- **チーム**: 氏名・肩書き・写真。
- **事例**: before → after。
- **歴史（十年・四都市）**: 4都市名＋開始年（旧データ 神楽坂2016/新宿2019/福岡 と整合）。
- FIKA「事業と蓄積」の実文言（現状は汎用）。

## 次の会話の始め方 / 下次对话怎么接上

新しいチャットで、このリポジトリを開いた状態で
「`HANDOFF.md` を読んで CROSSBORDERS サイトの続きをやって」と言えば再開できます。
（在新对话里打开本仓库，说"读 HANDOFF.md，继续 CROSSBORDERS 网站"即可接上。）
