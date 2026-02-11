Astro Base Template

Astro + FLOCSS をベースにした、静的サイト制作向けのスターターテンプレートです。 Header / Footer / レイアウト / Sass 構成 / JS 分離までを含み、 このリポジトリを複製することで すぐに制作を開始できます。

🚀 Features • Astro v5 • Sass（FLOCSS 設計） • Header / Footer コンポーネント分離 • Layout による共通構造 • JS / CSS の責務分離 • 学習・模写コーディング向け構成

📁 Directory Structure
src/
├ components/
│ ├ layout/
│ │ ├ Header.astro
│ │ └ Footer.astro
│
├ layouts/
│ └ Layout.astro
│
├ pages/
│ └ index.astro
│
├ scripts/
│ └ header-menu.js
│
└ styles/
  ├ foundation/
  │ ├ _index.scss
  │ ├ _reset.scss
  │ └ _element.scss
  │
  ├ layout/
  │ ├ _header.scss
  │ ├ _footer.scss
  │ └ _index.scss
  │
  ├ object/
  │ ├ component/
  │ ├ project/
  │ └ utility/
  │
  └ style.scss

  🧱 CSS Architecture (FLOCSS)
	•	foundation/
リセット・要素レベルのベーススタイル
	•	layout/
ヘッダー・フッターなどページ構造
	•	object/
	•	component: 再利用可能な小パーツ
	•	project: ページ固有のUI
	•	utility: 余白・表示制御など補助クラス

  🧠 Rules
	•	JS用クラス → .js-*
	•	見た目用クラス → .l-, .c-
	•	状態 → .is-*

  🔁 How to Use
	1.	このリポジトリをコピー or clone
	2.	pages / components を追加
	3.	styles を拡張
	4.	新規案件用のベースとして利用