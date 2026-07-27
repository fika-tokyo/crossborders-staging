import { createContext, useContext, useEffect, useState } from 'react'

// ============================================================================
//  i18n — CROSSBORDERS site content in 日本語 / 中文 / English.
//  Default language: ja (Japanese). All visible copy lives here.
//  Edit a language by editing its bundle below; the shape must stay identical.
// ============================================================================

export const LANGS = [
  { code: 'ja', label: '日本語', short: '日' },
  { code: 'tw', label: '繁體中文', short: '繁' },
  { code: 'zh', label: '简体中文', short: '简' },
  { code: 'en', label: 'English', short: 'EN' },
]

// Stable ids so React keys + the CROSSBORDERS column check work across languages.
const CB = 'CROSSBORDERS'

/* --------------------------------- 日本語 --------------------------------- */
const ja = {
  site: {
    brand: CB,
    brandFull: 'CROSSBORDERS CO., LTD.',
    tagline: `境界を越え、価値を創る`,
    taglineEn: `Cross Borders, Create Value.`,
    email: 'contact@crossborders.tokyo',
    phone: '050-1722-7286',
    address: `東京都 目黒区`,
  },
  nav: [
    { label: `ホーム`, to: '/' },
    { label: `私たちについて`, to: '/about' },
    { label: `価値創造`, to: '/value' },
    { label: `実績`, to: '/works' },
    { label: `パートナーシップ`, to: '/partnership' },
    { label: `お問い合わせ`, to: '/contact' },
  ],
  works: {
    eyebrow: 'TRACK RECORD',
    title: `実績・成約事例`,
    intro: `売買仲介・賃貸仲介の主な成約事例をご紹介します。東京を中心に、首都圏から関西まで幅広く対応しています。`,
    mapTitle: `成約拠点マップ`,
    mapSub: `全国の主な成約エリア`,
    tokyoTitle: `東京都内(拡大図)`,
    tokyoSub: `都内の成約が最も多いため拡大表示`,
    notFound: `該当する地域が見つかりません`,
    saleBadge: `売買仲介`,
    rentBadge: `賃貸仲介`,
    countUnit: `件`,
  },
  hero: {
    title: `境界を越え\n価値を創る`,
    titleEn: `Cross Borders, Create Value.`,
    subtitle: `私たちは「ただの不動産会社」ではありません。\nすべての工程において新たな価値創造を求めるお客様のために存在する、パートナーです。`,
    primaryCta: { label: `お問い合わせ`, to: '/contact' },
    secondaryCta: { label: `会社の理念`, to: '/about' },
  },
  purpose: {
    quote: `従来の不動産会社が担うのは「売買仲介」という一つの工程だけ。しかしお客様が本当に求めているのは「家を一軒買うこと」ではなく、境界を越えた全工程での価値創造です。`,
    needs: [
      { who: `地主`, want: `遊休資産を価値向上させ、安定したキャッシュフローを生み出したい` },
      { who: `投資家`, want: `物件選定・改装・運営から出口まで、一貫した投資リターンを得たい` },
      { who: `外国人のお客様`, want: `来日前から入居後まで、言語・生活・不動産をワンストップで支援してほしい` },
    ],
  },
  borders: [
    { key: 'language', title: `言語の境界`, body: `日本語・英語・中国語に対応し、言葉や国境の障害をなくす。` },
    { key: 'nation', title: `国の境界`, body: `海外投資家と日本の不動産市場をシームレスに繋ぐ、確かな架け橋へ。` },
    { key: 'expertise', title: `専門の境界`, body: `物件選定から宿泊運営、資産価値向上、管理、そしてエグジットまでをワンストップで統合。` },
    { key: 'time', title: `時間の境界`, body: `ご来日前から、物件取得、その後の運用、投資フェーズに至るまで、すべてのプロセスに伴走。` },
    { key: 'industry', title: `業界の境界`, body: `圧倒的に透明でクリーンな取引により、日本の不動産業界が抱える旧来の「不透明」なイメージを打破する。` },
  ],
  journey: {
    intro: `CROSSBORDERS は、民泊運営から歩みを始めました。現場で積み上げた運営の実績を礎に、いまは越境不動産の資産価値創造に注力しています。`,
    milestones: [
      { year: '2014', title: `民泊運営事業を開始` },
      { year: '2016', title: `株式会社クロスボーダーズ設立。麻布十番の一棟物件の運営を開始` },
      { year: '2018', title: `貸しスペース（会議・イベント）事業を開始` },
      { year: '2025', title: `宅地建物取引業の登録を取得` },
      { year: '2026', title: `ブランドを刷新し、越境不動産の資産価値創造に注力` },
    ],
    closing: `長年にわたる民泊運営の経験が私たちに教えてくれたのは、\nどれほど条件の異なる物件であっても、その価値を最大限に引き出せるということです。`,
  },
  metrics: {
    note: `※ 2018年時点の実績`,
    items: [
      { value: `4年+`, label: `宿泊運営の実績` },
      { value: `東京15・京都19`, label: `運営中の物件・客室` },
      { value: `数千組`, label: `受け入れたゲスト（累計）` },
      { value: `複数回`, label: `Airbnb スーパーホスト受賞` },
    ],
  },
  valueChain: [
    { n: '01', en: 'DISCOVER', cn: `発掘`, title: `潜在力のある物件を発掘`, body: `提携業者ネットワークで非公開物件情報を入手し、「宿泊運営 × 投資」の二つの視点から、隠れた価値のある物件を見つけ出します。` },
    { n: '02', en: 'ACQUIRE', cn: `取得`, title: `購入の意思決定を支援`, body: `ホテル・ホステル・民泊・シェアハウスなどの運営シーンを含めた「実質利回り」を分析。表面的な賃貸利回りに留まらず、多言語で海外投資家の購入意思決定をサポートします。` },
    { n: '03', en: 'ELEVATE', cn: `価値向上`, title: `資産価値を高める`, body: `これまで培ってきた卓越したデザインとブランド力で、普通の物件を価値ある「体験空間」へと昇華させます。改装企画・内装デザイン・ブランド設計までトータルで手掛けます。` },
    { n: '04', en: 'OPERATE', cn: `運営`, title: `安定した運営で収益化`, body: `自社で運営受託し、Airbnb / Booking.com などOTAで集客。多言語でのカスタマー対応や、収益の継続的なモニタリングを行います。` },
    { n: '05', en: 'EXIT', cn: `出口`, title: `戦略的な出口、または再投資`, body: `運営データと価値向上後の実績により、市場水準を上回る売却価格を実現。あるいは次の資産配分へ。` },
  ],
  matrix: {
    columns: [`従来の不動産会社`, `宿泊運営会社`, `海外投資コンサル`, CB],
    rows: [
      { cap: `売買仲介`, vals: ['○', '×', '△', '◎'] },
      { cap: `実質利回り査定`, vals: ['△', '○', '△', '◎'] },
      { cap: `価値向上・改装`, vals: ['×', '△', '×', '◎'] },
      { cap: `運営受託`, vals: ['×', '◎', '×', '◎'] },
      { cap: `多言語対応`, vals: ['×', '△', '○', '◎'] },
      { cap: `海外投資家ネットワーク`, vals: ['×', '△', '○', '◎'] },
      { cap: `ブランド構築力`, vals: ['×', '△', '×', '◎'] },
    ],
    legend: `◎ = 中核能力　○ = 標準対応　△ = 限定的　× = 非対応`,
  },
  strengths: [
    { n: '01', title: `多言語対応力`, en: 'Multilingual Service', body: `日・英・中の三言語対応。単に「話せる」だけでなく、「三つの文化の視点でお客様を理解できる」ことが強みです。` },
    { n: '02', title: `宿泊運営の実践経験`, en: 'Hospitality Expertise', body: `これまでの豊富な運営経験により、「体験空間としての建物」の価値が見えます。「面積 × 単価」だけでは測れない独自の視点を持っています。` },
    { n: '03', title: `ブランドと空間の構築力`, en: 'Brand & Space Design', body: `これまでの豊富な実績が示すように、普通の建物を物語とファンを持ち、プレミアムを生むブランド空間へと変貌させます。` },
    { n: '04', title: `国際的な顧客ネットワーク`, en: 'Global Network & Expert Alliance', body: `世界中の旅人・学生・投資家にサービスを提供してきました。さらに国内の建築士や司法書士、行政書士、税理士、弁護士等といった各分野の専門家とも強固なネットワークを構築。` },
  ],
  partnership: {
    philosophy: {
      title: `一度きりの取引ではなく、長期的な伴走を`,
      body: `私たちは「一度きりの取引」を求めません。「資産のライフサイクル全体にわたる長期的な伴走」を目指します。\nお客様の資産は10年、20年という周期で価値を生み続ける必要があります。\n私たちは単なる「仲介」ではなく、長期的な「資産パートナー」でありたいのです。`,
    },
    types: [
      { title: `物件提携`, en: 'Property Partnership', target: `パートナー企業・土地建物オーナー`, service: `物件をお持ちのパートナーへ：海外投資家ネットワーク、出口戦略、運営提案、価値向上プランを提供。貴社の物件を世界中の投資家や顧客へ届けます。`, value: `「単なる買い手」ではなく「物件の価値を最大限に引き出せる本当のお客様」を見つけます。` },
      { title: `顧客送客`, en: 'Customer Referral', target: `語学学校・大学・士業・金融機関`, service: `御社のお客様へ：多言語の不動産サービス、外国人の入居支援、海外投資家対応。相互送客の長期的ネットワークを構築。`, value: `お客様の不動産の「悩み」を解決し、「御社へのさらなる信頼」へと変えます。` },
      { title: `運営提携`, en: 'Operation Partnership', target: `宿泊事業者・投資家・地方自治体`, service: `これまでの豊富な実績に基づく運営受託、OTA集客、空間企画、地方創生の協働を提供。`, value: `お持ちの空間を、私たちの運営ブランドで「物語とファンを持つ」資産に変えます。` },
    ],
  },
  faq: {
    eyebrow: 'Q&A',
    title: `よくあるご質問`,
    subtitle: `お客様から実際によくいただくご質問に、私たちの実務そのままにお答えします。`,
    groups: [
      {
        who: `投資家・海外バイヤーの方`,
        items: [
          { q: `海外に住んだまま、購入から運営まで完結できますか？`, a: `可能です。ご来日前のオンライン相談、物件資料の多言語化、内見の代行・オンライン中継から、契約時は司法書士等の専門家と連携し、購入後は当社が運営を代行します。日本に常駐いただく必要はありません。` },
          { q: `「実質利回り」は表面利回りと何が違うのですか？`, a: `表面利回りは「満室想定の賃料 ÷ 物件価格」に過ぎません。当社は同じ立地・同じ想定客層の競合施設を選定し、OTA（Booking.com 等）の実勢価格データと季節変動から収入を推計。清掃費・OTA手数料・改装費などの運営コスト、さらに出口価格までを織り込んだ収支シミュレーションで、投資判断の根拠をご提示します。` },
          { q: `その物件で民泊やホテルは合法的に運営できますか？`, a: `旅館業法と住宅宿泊事業法（民泊新法）のどちらを目指すかで、用途地域・消防設備・保健所の要件は大きく変わります。当社は行政書士・建築士等の専門家ネットワークと連携し、ご購入の決断の前に許認可の実現性を確認します。合法的に運営できない物件をお勧めすることはありません。` },
          { q: `購入後の運営はお任せできますか？`, a: `OTAへの掲載（リスティング作成・写真・多言語の紹介文）、多言語でのゲスト対応、清掃品質の管理、収益のモニタリングまで一貫して代行できます。料金は物件の規模・運営形態により異なるため、収支シミュレーションと合わせてご提案します。` },
        ],
      },
      {
        who: `地主・物件オーナーの方`,
        items: [
          { q: `築年数の経った普通の建物でも、選ばれる宿泊空間になりますか？`, a: `はい。私たちの改装は「見た目」だけではありません。訪日客の構成データ（家族・一人旅・友人グループが大半）から逆算して間取りやベッド構成を設計し、図面の段階で「ゲストとして一度、清掃スタッフとして一度」動線を歩き直す独自のレビューを行います。狭小な物件にも、運営目線の解決策があります。` },
          { q: `改装費用が膨らまないか心配です。`, a: `当社は設計よりも先に収支の演算を行います。改装費は投資シミュレーションに最初から組み込み、回収できる範囲でデザインと仕様を調整するため、「デザイン優先で予算が破綻する」事態を防ぎます。` },
          { q: `遊休資産の活用には、売却以外にどんな選択肢がありますか？`, a: `宿泊施設への転用、賃貸への改装、当社への運営委託など、複数の選択肢があります。まず各案の収支を同じ条件で試算・比較し、キャッシュフローと出口まで見通したうえで、最適な方針をご提案します。` },
        ],
      },
      {
        who: `外国人のお客様`,
        items: [
          { q: `日本語ができなくても、賃貸や購入の手続きはできますか？`, a: `日・英・中の三言語で全工程をサポートします。契約や重要事項説明といった重要な場面は、母語での確認を挟みながら進めますので、ご安心ください。` },
          { q: `来日前に、どこまで進められますか？`, a: `オンライン相談、ご希望条件の整理、物件のご提案と資料の翻訳、内見の代行まで、来日前に完了できます。ご到着後すぐに契約・入居へ進める状態を整えます。` },
          { q: `入居した後のサポートはありますか？`, a: `電気・ガス・水道などライフラインの手続きや生活の立ち上げをご案内するほか、その後の住み替え・購入・投資のご相談まで、長期的な窓口としてお付き合いします。` },
        ],
      },
    ],
  },
  contactTopics: [`物件提携`, `顧客送客`, `運営提携`, `投資のご相談`, `その他`],
  ui: {
    navCta: `お問い合わせ`, menu: `メニュー`, needSuffix: `が求めるもの`,
    bordersTitle: `私たちが越える五つの境界`, bordersSubtitle: `日本の不動産業界は、いまも五つの見えない「境界」に隔てられています。`,
    valueTeaserTitle: `資産ライフサイクル全体の価値マネジメント`, valueTeaserSubtitle: `Discover から Exit まで、お客様の歩む一歩一歩に寄り添う——それが事業における「Cross the Borders」の本当の意味です。`, valueTeaserLink: `バリューチェーン全体を見る →`,
    homeCtaTitle: `ともに、新たな境界へ`, homeCtaSubtitle: `土地オーナー様、投資家様、そしてパートナーシップをご検討中の方まで、まずはお気軽にご相談ください。`, homeCtaButton: `お問い合わせ`,
    aboutEyebrow1: `01 · ブランド哲学`, aboutTitle1: `CROSSBORDERS の意味`, aboutIntro1: `"Cross the Borders" ——境界を越え、新たな価値を。\n私たちの社名は単なる名称ではなく、一つの確固たる思想です。\n現在の日本の不動産業界は、いまなお五つの見えない「境界」によって隔てられていると、私たちは捉えています。`,
    aboutEyebrow2: `02 · 私たちの歩み`, aboutTitle2: `CROSSBORDERS のこれまで`,
    valueEyebrow: `03 · 私たちの価値創造`, valueTitle: `資産ライフサイクル全体の価値マネジメント`, valueIntro: `従来の不動産会社が行うのは「売買仲介」だけ。私たちはすべてのサービスを、バラバラのメニューではなく一本のバリューチェーンに統合します。`,
    matrixTitle: `私たちの差別化`, matrixSubtitle: `不動産会社、運営会社、コンサルティング会社は数あれど、この三つを兼ね備える会社はごくわずかです。`, matrixCapHeader: `能力`,
    strengthsTitle: `四つの中核的な強み`, valueCtaButton: `ご要望を相談する`,
    partnershipEyebrow: `04 · 協働の哲学`, partnershipTitle: `三つの協働のかたち`, partnershipSubtitle: `異なる分野のパートナーと、さまざまな形の価値を生み出せます。`,
    targetLabel: `対象：`, serviceLabel: `サービス内容`, valueLabel: `あなたへの価値`, partnershipCtaButton: `協働について相談する`,
    discussThis: `このパートナーシップを相談する →`,
    homePartnerTitle: `パートナーの皆様へ`, homePartnerSubtitle: `不動産会社・地主、語学学校や大学、宿泊事業者の皆様とも、さまざまな形で価値を共創します。`, homePartnerLink: `提携について →`,
    homePositioning: `従来の仲介が担うのは「売買」「賃貸」という一面だけ。\n私たちは、その境界を越え、資産の発掘から出口戦略に至るすべてのフェーズで、\n価値を最大化します。`,
    portalAbout: `五つの境界を越えるプロフェッショナルな不動産チーム`, portalValue: `発掘から出口まで、資産のあらゆるステージに伴走`, portalPartner: `不動産会社・機関・運営者との長期にわたる価値共創`, learnMore: `詳しく見る →`,
    portalAboutCta: `私たちについて →`, portalValueCta: `価値創造 →`, portalPartnerCta: `協働 →`,
    contactTitle: `お問い合わせ`, contactIntro: `下記のフォームにご記入ください。3営業日以内にご連絡いたします。メールやお電話でのご連絡も歓迎します。`, emailLabel: `メール：`, phoneLabel: `電話：`, addressLabel: `所在地：`,
    formName: `お名前 *`, formNamePh: `お名前`, formEmail: `メール *`, formEmailPh: 'you@company.com', formCompany: `会社名`, formCompanyPh: `会社名（任意）`, formTopic: `ご相談内容`, formMessage: `ご要望 *`, formMessagePh: `直面している課題や目標を簡単にご記入ください…`, formSubmit: `送信する`, formSending: `送信中…`, formError: `送信に失敗しました。時間をおいて再度お試しいただくか、メールでご連絡ください。`,
    errName: `お名前をご記入ください`, errEmail: `有効なメールアドレスをご記入ください`, errMessage: `ご要望を簡単にご記入ください`,
    thankName: `{name} 様、ありがとうございます！`, thankNoName: `ありがとうございます！`, thankBody: `お問い合わせを受け付けました。担当チームが3営業日以内にご連絡いたします。`, backHome: `ホームへ戻る`,
    notFoundTitle: `ページが見つかりません`, notFoundBody: `お探しのページは存在しないか、移動された可能性があります。`,
    footerRights: `無断転載を禁じます。`,
  },
}

/* ---------------------------------- 中文 ---------------------------------- */
const tw = {
  site: {
    brand: CB,
    brandFull: 'CROSSBORDERS CO., LTD.',
    tagline: `跨越邊界，創造價值`,
    taglineEn: `Cross Borders, Create Value.`,
    email: 'contact@crossborders.tokyo',
    phone: '050-1722-7286',
    address: '東京都 目黑區',
  },
  nav: [
    { label: `首頁`, to: '/' },
    { label: `關於我們`, to: '/about' },
    { label: `價值創造`, to: '/value' },
    { label: `實績`, to: '/works' },
    { label: `合作`, to: '/partnership' },
    { label: `聯絡諮詢`, to: '/contact' },
  ],
  works: {
    eyebrow: 'TRACK RECORD',
    title: `實績·成交案例`,
    intro: `介紹買賣中介與租賃中介的主要成交案例。以東京為中心,覆蓋首都圈至關西地區。`,
    mapTitle: `成交據點地圖`,
    mapSub: `全國主要成交區域`,
    tokyoTitle: `東京都內(放大圖)`,
    tokyoSub: `都內成交最為集中,故放大展示`,
    notFound: `找不到對應的地區`,
    saleBadge: `買賣中介`,
    rentBadge: `租賃中介`,
    countUnit: `件`,
  },
  hero: {
    title: `跨越邊界\n創造價值`,
    titleEn: `Cross Borders, Create Value.`,
    subtitle: `我們不是「一家普通的不動產公司」，\n而是為在每一個環節都追求價值創造的客戶而存在的夥伴。`,
    primaryCta: { label: `開始諮詢`, to: '/contact' },
    secondaryCta: { label: `公司理念`, to: '/about' },
  },
  purpose: {
    quote: `傳統不動產公司只承擔「買賣中介」一個環節。但客戶的真正需求，從來不是「買一棟房子」——而是跨越邊界的全流程價值創造。`,
    needs: [
      { who: `業主`, want: `讓閒置資產升值，並帶來穩定的現金流` },
      { who: `投資人`, want: `從選房、改造、運營到退出，拿到完整的投資回報` },
      { who: `外籍客戶`, want: `從來日前到入住後，語言、生活、置業一站式支援` },
    ],
  },
  borders: [
    { key: 'language', title: `語言的邊界`, body: `對應日語・英語・中文，消除語言與國境的障礙。` },
    { key: 'nation', title: `國家的邊界`, body: `無縫連線海外投資人與日本不動產市場，成為可靠的橋樑。` },
    { key: 'expertise', title: `專業的邊界`, body: `從選房、住宿運營、資產增值、管理到退出，一站式整合。` },
    { key: 'time', title: `時間的邊界`, body: `從來日前到房產取得、之後的運營與投資階段，全程陪伴每一步。` },
    { key: 'industry', title: `行業的邊界`, body: `以徹底透明、乾淨的交易，打破日本不動產行業舊有的「不透明」印象。` },
  ],
  journey: {
    intro: `CROSSBORDERS 從民泊運營起步。以現場積累的運營實績為根基，如今專注於跨境不動產的資產價值創造。`,
    milestones: [
      { year: '2014', title: `民泊（住宿）運營事業起步` },
      { year: '2016', title: `株式會社 CROSSBORDERS 成立；麻布十番一棟物件運營開始` },
      { year: '2018', title: `拓展貸し空間（會議·活動空間）事業` },
      { year: '2025', title: `取得日本「宅地建物取引業」登入（不動產交易牌照）` },
      { year: '2026', title: `品牌煥新，聚焦跨境不動產資產價值創造` },
    ],
    closing: `多年的民宿運營經驗讓我們懂得：無論是多麼不同的物件，我們都能把它的價值最大化。`,
  },
  metrics: {
    note: `※ 資料為 2018 年時點`,
    items: [
      { value: `4年+`, label: `住宿運營經驗` },
      { value: `東京15·京都19`, label: `運營中的物件·客房` },
      { value: `數千組`, label: `累計接待旅客` },
      { value: `多次`, label: `Airbnb 超讚房東獲獎` },
    ],
  },
  valueChain: [
    { n: '01', en: 'DISCOVER', cn: `發掘`, title: `發掘有潛力的房源`, body: `透過合作機構的網路獲取非公開房源資訊，以「住宿運營 × 投資」雙重視角，找出被低估的房源。` },
    { n: '02', en: 'ACQUIRE', cn: `取得`, title: `協助購入決策`, body: `分析包含酒店、青旅、民宿、合租等運營場景的「真實收益率」，而不只是表面的租金收益率，並以多語言支援海外投資人的購入決策。` },
    { n: '03', en: 'ELEVATE', cn: `價值提升`, title: `提升資產價值`, body: `以我們積累的卓越設計與品牌實力，將普通房產昇華為有價值的「體驗空間」，從改造策劃、室內設計到品牌設計一手包辦。` },
    { n: '04', en: 'OPERATE', cn: `運營`, title: `穩定運營、實現收益`, body: `由我們自營代管，透過 Airbnb、Booking.com 等平臺獲客，提供多語言客服，並持續跟蹤收益表現。` },
    { n: '05', en: 'EXIT', cn: `退出`, title: `策略性退出或再投資`, body: `憑藉運營資料和提升後的實際業績，實現高於市場水平的售出價格；或轉入下一輪資產配置。` },
  ],
  matrix: {
    columns: [`傳統不動產公司`, `住宿運營公司`, `海外投資諮詢`, CB],
    rows: [
      { cap: `買賣中介`, vals: ['○', '×', '△', '◎'] },
      { cap: `真實收益率評估`, vals: ['△', '○', '△', '◎'] },
      { cap: `價值提升 / 改造`, vals: ['×', '△', '×', '◎'] },
      { cap: `運營代管`, vals: ['×', '◎', '×', '◎'] },
      { cap: `多語言服務`, vals: ['×', '△', '○', '◎'] },
      { cap: `海外投資人網路`, vals: ['×', '△', '○', '◎'] },
      { cap: `品牌打造力`, vals: ['×', '△', '×', '◎'] },
    ],
    legend: `◎ = 核心能力　○ = 標準能力　△ = 有限能力　× = 不具備`,
  },
  strengths: [
    { n: '01', title: `多語言服務能力`, en: 'Multilingual Service', body: `日英中三語服務。不僅「能說」，更「能用三種文化的視角理解客戶」。` },
    { n: '02', title: `住宿運營的實戰經驗`, en: 'Hospitality Expertise', body: `憑藉豐富的運營經驗，我們能看到「作為體驗空間的建築」的價值，擁有「面積 × 單價」無法衡量的獨到視角。` },
    { n: '03', title: `品牌與空間的打造力`, en: 'Brand & Space Design', body: `豐富的實績證明，我們能把普通建築變成有故事、有粉絲、能帶來溢價的品牌空間。` },
    { n: '04', title: `國際化的客戶網路`, en: 'Global Network & Expert Alliance', body: `我們服務過來自世界各地的旅行者、學生與投資人；並與國內的建築師、司法書士、行政書士、稅理士、律師等各領域專家建立了穩固的網路。` },
  ],
  partnership: {
    philosophy: {
      title: `長期同行，而非一次交易`,
      body: `我們不追求「一次性的交易」，而追求「跨越資產生命週期的長期同行」。\n客戶的資產，需要在 10 年、20 年的週期中持續創造價值。\n我們要成為客戶長期的「資產夥伴」，而不僅僅是「中介」。`,
    },
    types: [
      { title: `房源合作`, en: 'Property Partnership', target: `合作企業、土地建物業主`, service: `為持有房產的夥伴提供：海外投資人網路、退出戰略、運營建議與價值提升方案，將貴司的房產送達全球的投資人與客戶。`, value: `為您的房產找到「不只是買家，而是真正能讓它發揮最大價值的客戶」。` },
      { title: `客戶引薦`, en: 'Customer Referral', target: `語言學校、大學、專業服務機構、金融機構`, service: `為您的客戶提供：多語言不動產服務、外籍人士入住支援、海外投資人接待，並建立長期的相互引薦網路。`, value: `解決客戶在不動產上的「煩惱」，轉化為「客戶對貴司更深的信任」。` },
      { title: `運營合作`, en: 'Operation Partnership', target: `住宿運營商、投資人、地方政府`, service: `提供基於豐富實績的運營代管、OTA 獲客、空間策劃與地方振興協作。`, value: `把您持有的空間，透過我們的運營品牌，變成「有故事、有粉絲」的資產。` },
    ],
  },
  faq: {
    eyebrow: 'Q&A',
    title: `常見問題`,
    subtitle: `這些是客戶最常問我們的問題——答案裡就是我們實際的工作方式。`,
    groups: [
      {
        who: `投資人・海外買家`,
        items: [
          { q: `人在海外，可以完成從購買到運營的全部流程嗎？`, a: `可以。來日前的線上諮詢、物件資料多語言整理、代為看房與線上連線，到簽約階段與司法書士等專家協作，購入後再由我們代管運營——全程無需常駐日本。` },
          { q: `你們說的「實質收益率」和表面收益率差在哪裡？`, a: `表面收益率只是「滿房假設租金 ÷ 物件價格」。我們會選定同地段、同客層的競品設施，用 OTA（Booking.com 等）的實際成交價格與季節波動來推算收入；再納入清掃費、OTA 手續費、改造費等運營成本，甚至倒推出口價格，用一份完整的收支模擬作為投資判斷的依據。` },
          { q: `這個物件能合法經營民宿或酒店嗎？`, a: `走旅館業法還是民泊新法，用途地域、消防設備、保健所的要求完全不同。我們與行政書士、建築士等專家網路協作，在您做出購買決定之前確認許可的可行性——無法合法運營的物件，我們不會建議購買。` },
          { q: `買了之後，運營可以交給你們嗎？`, a: `可以。從 OTA 上架（Listing 製作、照片、多語言文案）、多語言客服、清掃品質管理到收益追蹤，可一站式代管。費用依物件規模與運營形態而異，會與收支模擬一併提案。` },
        ],
      },
      {
        who: `業主・物件持有者`,
        items: [
          { q: `屋齡較高的普通建築，也能變成有人想住的空間嗎？`, a: `可以。我們的改造不只看「好不好看」：先用訪日客群構成資料（家庭、獨旅、朋友出行佔大多數）反推房型與床位配置，再在圖紙階段做獨家的雙視角走查——以客人身份走一遍動線、再以清掃人員身份走一遍。再小的物件，也有運營視角的解法。` },
          { q: `擔心改造預算會失控。`, a: `我們先算帳、後設計。改造費從一開始就納入投資模擬，在可回收的範圍內調整設計與規格，避免「設計優先、預算崩盤」。` },
          { q: `閒置資產除了賣掉，還有什麼選擇？`, a: `轉為住宿設施、改造後出租、委託我們代管運營等多種方案。我們會先在同一條件下試算、比較各方案的現金流與出口，再提出最合適的方向。` },
        ],
      },
      {
        who: `外籍客戶`,
        items: [
          { q: `不會日語，也能完成租房或買房手續嗎？`, a: `我們以日・英・中三語支援全流程。簽約、重要事項說明等關鍵環節，都會以您的母語逐項確認後再推進，請放心。` },
          { q: `來日本之前，可以先進行到哪一步？`, a: `線上諮詢、需求整理、物件推薦與資料翻譯、代為看房——都能在來日前完成，讓您落地後即可簽約入住。` },
          { q: `入住之後還有支援嗎？`, a: `我們會協助水電瓦斯等生活手續與安頓事宜；之後的換屋、購房、投資諮詢，我們也是您長期的窗口。` },
        ],
      },
    ],
  },
  contactTopics: [`房源合作`, `客戶引薦`, `運營合作`, `投資諮詢`, `其他`],
  ui: {
    navCta: `開始諮詢`, menu: `選單`, needSuffix: `想要`,
    bordersTitle: `我們要跨越的五道邊界`, bordersSubtitle: `日本的不動產行業，仍被五道無形的「邊界」所阻隔。`,
    valueTeaserTitle: `資產生命週期的全程價值管理`, valueTeaserSubtitle: `從 Discover 到 Exit，我們陪伴客戶走完每一步——這就是「Cross the Borders」在業務層面的真正含義。`, valueTeaserLink: `檢視完整價值鏈 →`,
    homeCtaTitle: `跟我們一起，跨越邊界，邁向未來`, homeCtaSubtitle: `無論您是土地業主、投資人，還是正在考慮合作的夥伴，歡迎隨時與我們聯絡。`, homeCtaButton: `聯絡我們`,
    aboutEyebrow1: `01 · 品牌哲學`, aboutTitle1: `CROSSBORDERS 的含義`, aboutIntro1: `"Cross the Borders" ——跨越邊界，創造新的價值。\n我們的公司名不僅是名稱，更是一種堅定的理念。我們認為，如今的日本不動產行業，依然被五道無形的「邊界」所阻隔。`,
    aboutEyebrow2: `02 · 我們的歷程`, aboutTitle2: `CROSSBORDERS 一路走來`,
    valueEyebrow: `03 · 我們如何創造價值`, valueTitle: `資產生命週期的全程價值管理`, valueIntro: `傳統不動產公司只做「買賣中介」。我們把所有服務整合成一條完整的價值鏈，而不是零散的服務專案。`,
    matrixTitle: `我們的差別化`, matrixSubtitle: `市場上不乏各類公司，但能把不動產、運營、諮詢三者結合的，極少。`, matrixCapHeader: `能力`,
    strengthsTitle: `四大核心強項`, valueCtaButton: `洽談合作`,
    partnershipEyebrow: `04 · 合作哲學`, partnershipTitle: `三種合作可能`, partnershipSubtitle: `我們與不同領域的夥伴，可以創造不同形式的價值。`,
    targetLabel: `物件：`, serviceLabel: `服務內容`, valueLabel: `對您的價值`, partnershipCtaButton: `探討合作`,
    discussThis: `諮詢此合作 →`,
    homePartnerTitle: `致合作伙伴`, homePartnerSubtitle: `無論您是地產公司、業主、語言學校 / 大學，還是住宿運營商，我們都能以多種形式共創價值。`, homePartnerLink: `瞭解合作 →`,
    homePositioning: `傳統中介只負責「買賣」「租賃」這一面。\n我們跨越這道邊界，在從資產發掘到退出戰略的每一個階段，\n將價值最大化。`,
    portalAbout: `跨越五個邊界的專業不動產團隊`, portalValue: `從發掘到退出，陪伴資產的每一個階段`, portalPartner: `與不動產公司、機構、運營方長期共創價值`, learnMore: `瞭解更多 →`,
    portalAboutCta: `關於我們 →`, portalValueCta: `價值創造 →`, portalPartnerCta: `合作 →`,
    contactTitle: `聯絡諮詢`, contactIntro: `填寫下面的表單，我們會在三個工作日內與您取得聯絡。也歡迎直接透過郵件或電話聯絡我們。`, emailLabel: `郵箱：`, phoneLabel: `電話：`, addressLabel: `地址：`,
    formName: `稱呼 *`, formNamePh: `您的姓名`, formEmail: `郵箱 *`, formEmailPh: 'you@company.com', formCompany: `公司`, formCompanyPh: `公司名稱（選填）`, formTopic: `諮詢主題`, formMessage: `需求描述 *`, formMessagePh: `簡單介紹您面臨的挑戰或目標…`, formSubmit: `提交諮詢`, formSending: `提交中…`, formError: `提交失敗,請稍後再試,或直接郵件聯絡我們。`,
    errName: `請填寫您的稱呼`, errEmail: `請填寫有效的郵箱`, errMessage: `請簡單描述您的需求`,
    thankName: `謝謝您，{name}！`, thankNoName: `謝謝您！`, thankBody: `我們已收到您的諮詢，團隊會在三個工作日內與您聯絡。`, backHome: `返回首頁`,
    notFoundTitle: `頁面未找到`, notFoundBody: `您訪問的頁面不存在或已被移動。`,
    footerRights: `保留所有權利。`,
  },
}

const zh = {
  site: {
    brand: CB,
    brandFull: 'CROSSBORDERS CO., LTD.',
    tagline: `跨越边界，创造价值`,
    taglineEn: `Cross Borders, Create Value.`,
    email: 'contact@crossborders.tokyo',
    phone: '050-1722-7286',
    address: '东京都 目黑区',
  },
  nav: [
    { label: `首页`, to: '/' },
    { label: `关于我们`, to: '/about' },
    { label: `价值创造`, to: '/value' },
    { label: `实绩`, to: '/works' },
    { label: `合作`, to: '/partnership' },
    { label: `联系咨询`, to: '/contact' },
  ],
  works: {
    eyebrow: 'TRACK RECORD',
    title: `实绩·成交案例`,
    intro: `介绍买卖中介与租赁中介的主要成交案例。以东京为中心,覆盖首都圈至关西地区。`,
    mapTitle: `成交据点地图`,
    mapSub: `全国主要成交区域`,
    tokyoTitle: `东京都内(放大图)`,
    tokyoSub: `都内成交最为集中,故放大展示`,
    notFound: `找不到对应的地区`,
    saleBadge: `买卖中介`,
    rentBadge: `租赁中介`,
    countUnit: `件`,
  },
  hero: {
    title: `跨越边界\n创造价值`,
    titleEn: `Cross Borders, Create Value.`,
    subtitle: `我们不是「一家普通的不动产公司」，\n而是为在每一个环节都追求价值创造的客户而存在的伙伴。`,
    primaryCta: { label: `开始咨询`, to: '/contact' },
    secondaryCta: { label: `公司理念`, to: '/about' },
  },
  purpose: {
    quote: `传统不动产公司只承担「买卖中介」一个环节。但客户的真正需求，从来不是「买一栋房子」——而是跨越边界的全流程价值创造。`,
    needs: [
      { who: `业主`, want: `让闲置资产升值，并带来稳定的现金流` },
      { who: `投资人`, want: `从选房、改造、运营到退出，拿到完整的投资回报` },
      { who: `外籍客户`, want: `从来日前到入住后，语言、生活、置业一站式支持` },
    ],
  },
  borders: [
    { key: 'language', title: `语言的边界`, body: `对应日语・英语・中文，消除语言与国境的障碍。` },
    { key: 'nation', title: `国家的边界`, body: `无缝连接海外投资人与日本不动产市场，成为可靠的桥梁。` },
    { key: 'expertise', title: `专业的边界`, body: `从选房、住宿运营、资产增值、管理到退出，一站式整合。` },
    { key: 'time', title: `时间的边界`, body: `从来日前到房产取得、之后的运营与投资阶段，全程陪伴每一步。` },
    { key: 'industry', title: `行业的边界`, body: `以彻底透明、干净的交易，打破日本不动产行业旧有的「不透明」印象。` },
  ],
  journey: {
    intro: `CROSSBORDERS 从民泊运营起步。以现场积累的运营实绩为根基，如今专注于跨境不动产的资产价值创造。`,
    milestones: [
      { year: '2014', title: `民泊（住宿）运营事业起步` },
      { year: '2016', title: `株式会社 CROSSBORDERS 成立；麻布十番一栋物件运营开始` },
      { year: '2018', title: `拓展贷し空间（会议·活动空间）事业` },
      { year: '2025', title: `取得日本「宅地建物取引业」登录（不动产交易牌照）` },
      { year: '2026', title: `品牌焕新，聚焦跨境不动产资产价值创造` },
    ],
    closing: `多年的民宿运营经验让我们懂得：无论是多么不同的物件，我们都能把它的价值最大化。`,
  },
  metrics: {
    note: `※ 数据为 2018 年时点`,
    items: [
      { value: `4年+`, label: `住宿运营经验` },
      { value: `东京15·京都19`, label: `运营中的物件·客房` },
      { value: `数千组`, label: `累计接待旅客` },
      { value: `多次`, label: `Airbnb 超赞房东获奖` },
    ],
  },
  valueChain: [
    { n: '01', en: 'DISCOVER', cn: `发掘`, title: `发掘有潜力的房源`, body: `通过合作机构的网络获取非公开房源信息，以「住宿运营 × 投资」双重视角，找出被低估的房源。` },
    { n: '02', en: 'ACQUIRE', cn: `取得`, title: `协助购入决策`, body: `分析包含酒店、青旅、民宿、合租等运营场景的「真实收益率」，而不只是表面的租金收益率，并以多语言支持海外投资人的购入决策。` },
    { n: '03', en: 'ELEVATE', cn: `价值提升`, title: `提升资产价值`, body: `以我们积累的卓越设计与品牌实力，将普通房产升华为有价值的「体验空间」，从改造策划、室内设计到品牌设计一手包办。` },
    { n: '04', en: 'OPERATE', cn: `运营`, title: `稳定运营、实现收益`, body: `由我们自营代管，通过 Airbnb、Booking.com 等平台获客，提供多语言客服，并持续跟踪收益表现。` },
    { n: '05', en: 'EXIT', cn: `退出`, title: `策略性退出或再投资`, body: `凭借运营数据和提升后的实际业绩，实现高于市场水平的售出价格；或转入下一轮资产配置。` },
  ],
  matrix: {
    columns: [`传统不动产公司`, `住宿运营公司`, `海外投资咨询`, CB],
    rows: [
      { cap: `买卖中介`, vals: ['○', '×', '△', '◎'] },
      { cap: `真实收益率评估`, vals: ['△', '○', '△', '◎'] },
      { cap: `价值提升 / 改造`, vals: ['×', '△', '×', '◎'] },
      { cap: `运营代管`, vals: ['×', '◎', '×', '◎'] },
      { cap: `多语言服务`, vals: ['×', '△', '○', '◎'] },
      { cap: `海外投资人网络`, vals: ['×', '△', '○', '◎'] },
      { cap: `品牌打造力`, vals: ['×', '△', '×', '◎'] },
    ],
    legend: `◎ = 核心能力　○ = 标准能力　△ = 有限能力　× = 不具备`,
  },
  strengths: [
    { n: '01', title: `多语言服务能力`, en: 'Multilingual Service', body: `日英中三语服务。不仅「能说」，更「能用三种文化的视角理解客户」。` },
    { n: '02', title: `住宿运营的实战经验`, en: 'Hospitality Expertise', body: `凭借丰富的运营经验，我们能看到「作为体验空间的建筑」的价值，拥有「面积 × 单价」无法衡量的独到视角。` },
    { n: '03', title: `品牌与空间的打造力`, en: 'Brand & Space Design', body: `丰富的实绩证明，我们能把普通建筑变成有故事、有粉丝、能带来溢价的品牌空间。` },
    { n: '04', title: `国际化的客户网络`, en: 'Global Network & Expert Alliance', body: `我们服务过来自世界各地的旅行者、学生与投资人；并与国内的建筑师、司法书士、行政书士、税理士、律师等各领域专家建立了稳固的网络。` },
  ],
  partnership: {
    philosophy: {
      title: `长期同行，而非一次交易`,
      body: `我们不追求「一次性的交易」，而追求「跨越资产生命周期的长期同行」。\n客户的资产，需要在 10 年、20 年的周期中持续创造价值。\n我们要成为客户长期的「资产伙伴」，而不仅仅是「中介」。`,
    },
    types: [
      { title: `房源合作`, en: 'Property Partnership', target: `合作企业、土地建物业主`, service: `为持有房产的伙伴提供：海外投资人网络、退出战略、运营建议与价值提升方案，将贵司的房产送达全球的投资人与客户。`, value: `为您的房产找到「不只是买家，而是真正能让它发挥最大价值的客户」。` },
      { title: `客户引荐`, en: 'Customer Referral', target: `语言学校、大学、专业服务机构、金融机构`, service: `为您的客户提供：多语言不动产服务、外籍人士入住支持、海外投资人接待，并建立长期的相互引荐网络。`, value: `解决客户在不动产上的「烦恼」，转化为「客户对贵司更深的信任」。` },
      { title: `运营合作`, en: 'Operation Partnership', target: `住宿运营商、投资人、地方政府`, service: `提供基于丰富实绩的运营代管、OTA 获客、空间策划与地方振兴协作。`, value: `把您持有的空间，通过我们的运营品牌，变成「有故事、有粉丝」的资产。` },
    ],
  },
  faq: {
    eyebrow: 'Q&A',
    title: `常见问题`,
    subtitle: `这些是客户最常问我们的问题——答案里就是我们实际的工作方式。`,
    groups: [
      {
        who: `投资人・海外买家`,
        items: [
          { q: `人在海外，可以完成从购买到运营的全部流程吗？`, a: `可以。来日前的线上咨询、物件资料多语言整理、代为看房与线上连线，到签约阶段与司法书士等专家协作，购入后再由我们代管运营——全程无需常驻日本。` },
          { q: `你们说的「实质收益率」和表面收益率差在哪里？`, a: `表面收益率只是「满房假设租金 ÷ 物件价格」。我们会选定同地段、同客层的竞品设施，用 OTA（Booking.com 等）的实际成交价格与季节波动来推算收入；再纳入清扫费、OTA 手续费、改造费等运营成本，甚至倒推出口价格，用一份完整的收支模拟作为投资判断的依据。` },
          { q: `这个物件能合法经营民宿或酒店吗？`, a: `走旅馆业法还是民泊新法，用途地域、消防设备、保健所的要求完全不同。我们与行政书士、建筑士等专家网络协作，在您做出购买决定之前确认许可的可行性——无法合法运营的物件，我们不会建议购买。` },
          { q: `买了之后，运营可以交给你们吗？`, a: `可以。从 OTA 上架（Listing 制作、照片、多语言文案）、多语言客服、清扫品质管理到收益追踪，可一站式代管。费用依物件规模与运营形态而异，会与收支模拟一并提案。` },
        ],
      },
      {
        who: `业主・物件持有者`,
        items: [
          { q: `房龄较高的普通建筑，也能变成有人想住的空间吗？`, a: `可以。我们的改造不只看「好不好看」：先用访日客群构成数据（家庭、独旅、朋友出行占大多数）反推房型与床位配置，再在图纸阶段做独家的双视角走查——以客人身份走一遍动线、再以清扫人员身份走一遍。再小的物件，也有运营视角的解法。` },
          { q: `担心改造预算会失控。`, a: `我们先算账、后设计。改造费从一开始就纳入投资模拟，在可回收的范围内调整设计与规格，避免「设计优先、预算崩盘」。` },
          { q: `闲置资产除了卖掉，还有什么选择？`, a: `转为住宿设施、改造后出租、委托我们代管运营等多种方案。我们会先在同一条件下试算、比较各方案的现金流与出口，再提出最合适的方向。` },
        ],
      },
      {
        who: `外籍客户`,
        items: [
          { q: `不会日语，也能完成租房或买房手续吗？`, a: `我们以日・英・中三语支持全流程。签约、重要事项说明等关键环节，都会以您的母语逐项确认后再推进，请放心。` },
          { q: `来日本之前，可以先进行到哪一步？`, a: `线上咨询、需求整理、物件推荐与资料翻译、代为看房——都能在来日前完成，让您落地后即可签约入住。` },
          { q: `入住之后还有支持吗？`, a: `我们会协助水电燃气等生活手续与安顿事宜；之后的换房、购房、投资咨询，我们也是您长期的窗口。` },
        ],
      },
    ],
  },
  contactTopics: [`房源合作`, `客户引荐`, `运营合作`, `投资咨询`, `其他`],
  ui: {
    navCta: `开始咨询`, menu: `菜单`, needSuffix: `想要`,
    bordersTitle: `我们要跨越的五道边界`, bordersSubtitle: `日本的不动产行业，仍被五道无形的「边界」所阻隔。`,
    valueTeaserTitle: `资产生命周期的全程价值管理`, valueTeaserSubtitle: `从 Discover 到 Exit，我们陪伴客户走完每一步——这就是「Cross the Borders」在业务层面的真正含义。`, valueTeaserLink: `查看完整价值链 →`,
    homeCtaTitle: `跟我们一起，跨越边界，迈向未来`, homeCtaSubtitle: `无论您是土地业主、投资人，还是正在考虑合作的伙伴，欢迎随时与我们联系。`, homeCtaButton: `联系我们`,
    aboutEyebrow1: `01 · 品牌哲学`, aboutTitle1: `CROSSBORDERS 的含义`, aboutIntro1: `"Cross the Borders" ——跨越边界，创造新的价值。\n我们的公司名不仅是名称，更是一种坚定的理念。我们认为，如今的日本不动产行业，依然被五道无形的「边界」所阻隔。`,
    aboutEyebrow2: `02 · 我们的历程`, aboutTitle2: `CROSSBORDERS 一路走来`,
    valueEyebrow: `03 · 我们如何创造价值`, valueTitle: `资产生命周期的全程价值管理`, valueIntro: `传统不动产公司只做「买卖中介」。我们把所有服务整合成一条完整的价值链，而不是零散的服务项目。`,
    matrixTitle: `我们的差别化`, matrixSubtitle: `市场上不乏各类公司，但能把不动产、运营、咨询三者结合的，极少。`, matrixCapHeader: `能力`,
    strengthsTitle: `四大核心强项`, valueCtaButton: `洽谈合作`,
    partnershipEyebrow: `04 · 合作哲学`, partnershipTitle: `三种合作可能`, partnershipSubtitle: `我们与不同领域的伙伴，可以创造不同形式的价值。`,
    targetLabel: `对象：`, serviceLabel: `服务内容`, valueLabel: `对您的价值`, partnershipCtaButton: `探讨合作`,
    discussThis: `咨询此合作 →`,
    homePartnerTitle: `致合作伙伴`, homePartnerSubtitle: `无论您是地产公司、业主、语言学校 / 大学，还是住宿运营商，我们都能以多种形式共创价值。`, homePartnerLink: `了解合作 →`,
    homePositioning: `传统中介只负责「买卖」「租赁」这一面。\n我们跨越这道边界，在从资产发掘到退出战略的每一个阶段，\n将价值最大化。`,
    portalAbout: `跨越五个边界的专业不动产团队`, portalValue: `从发掘到退出，陪伴资产的每一个阶段`, portalPartner: `与不动产公司、机构、运营方长期共创价值`, learnMore: `了解更多 →`,
    portalAboutCta: `关于我们 →`, portalValueCta: `价值创造 →`, portalPartnerCta: `合作 →`,
    contactTitle: `联系咨询`, contactIntro: `填写下面的表单，我们会在三个工作日内与您取得联系。也欢迎直接通过邮件或电话联系我们。`, emailLabel: `邮箱：`, phoneLabel: `电话：`, addressLabel: `地址：`,
    formName: `称呼 *`, formNamePh: `您的姓名`, formEmail: `邮箱 *`, formEmailPh: 'you@company.com', formCompany: `公司`, formCompanyPh: `公司名称（选填）`, formTopic: `咨询主题`, formMessage: `需求描述 *`, formMessagePh: `简单介绍您面临的挑战或目标…`, formSubmit: `提交咨询`, formSending: `提交中…`, formError: `提交失败,请稍后再试,或直接邮件联系我们。`,
    errName: `请填写您的称呼`, errEmail: `请填写有效的邮箱`, errMessage: `请简单描述您的需求`,
    thankName: `谢谢您，{name}！`, thankNoName: `谢谢您！`, thankBody: `我们已收到您的咨询，团队会在三个工作日内与您联系。`, backHome: `返回首页`,
    notFoundTitle: `页面未找到`, notFoundBody: `您访问的页面不存在或已被移动。`,
    footerRights: `保留所有权利。`,
  },
}

/* --------------------------------- English -------------------------------- */
const en = {
  site: {
    brand: CB,
    brandFull: 'CROSSBORDERS CO., LTD.',
    tagline: `Cross Borders,\nCreate Value.`,
    taglineEn: ``,
    email: 'contact@crossborders.tokyo',
    phone: '050-1722-7286',
    address: 'Meguro-ku, Tokyo, Japan',
  },
  nav: [
    { label: `Home`, to: '/' },
    { label: `About`, to: '/about' },
    { label: `Value`, to: '/value' },
    { label: `Track Record`, to: '/works' },
    { label: `Partnership`, to: '/partnership' },
    { label: `Contact`, to: '/contact' },
  ],
  works: {
    eyebrow: 'TRACK RECORD',
    title: `Track Record`,
    intro: `Selected sales and leasing transactions. Centered on Tokyo, our coverage spans the Greater Tokyo Area through Kansai.`,
    mapTitle: `Transaction Map`,
    mapSub: `Key transaction areas across Japan`,
    tokyoTitle: `Tokyo (Detail)`,
    tokyoSub: `Tokyo has the largest cluster of deals`,
    notFound: `Region not found`,
    saleBadge: `Sales`,
    rentBadge: `Leasing`,
    countUnit: ``,
  },
  hero: {
    title: `Cross Borders\nCreate Value`,
    titleEn: ``,
    subtitle: `We are not "just another real estate company."\nWe are the partner for clients determined to create value at every stage.`,
    primaryCta: { label: `Get in touch`, to: '/contact' },
    secondaryCta: { label: `Company philosophy`, to: '/about' },
  },
  purpose: {
    quote: `A traditional real estate company handles only one link — brokerage. But what clients truly need is never "to buy a building"; it is value creation across every border of the journey.`,
    needs: [
      { who: `Property owners`, want: `To turn idle assets into higher value and stable cash flow` },
      { who: `Investors`, want: `A complete return — from sourcing and renovation to operation and exit` },
      { who: `Overseas clients`, want: `One-stop support for language, life and property, from before arrival to after move-in` },
    ],
  },
  borders: [
    { key: 'language', title: `The language border`, body: `We work in Japanese, English and Chinese — removing language and national barriers.` },
    { key: 'nation', title: `The national border`, body: `A reliable bridge connecting overseas investors to Japan's property market.` },
    { key: 'expertise', title: `The expertise border`, body: `From sourcing through hospitality operations, value enhancement, management and exit — integrated end to end.` },
    { key: 'time', title: `The time border`, body: `From pre-arrival to acquisition, operation and investment — we're with you at every step.` },
    { key: 'industry', title: `The industry border`, body: `Through radically transparent, straightforward dealing, we break the industry's old "opaque" reputation.` },
  ],
  journey: {
    intro: `CROSSBORDERS started out running vacation rentals. Built on that hands-on operating experience, we now focus on cross-border real-estate value creation.`,
    milestones: [
      { year: '2014', title: `Vacation-rental operations begin` },
      { year: '2016', title: `CROSSBORDERS CO., LTD. founded; begins operating an entire building in Azabu-Juban` },
      { year: '2018', title: `Expands into rental meeting & event spaces` },
      { year: '2025', title: `Obtains a Japanese real-estate brokerage license` },
      { year: '2026', title: `Rebrands to focus on cross-border real-estate value creation` },
    ],
    closing: `Years of vacation-rental operations taught us one thing:\nhowever different a property may be, we can maximize its value.`,
  },
  metrics: {
    note: `* Figures as of 2018`,
    items: [
      { value: `4+ yrs`, label: `Years in operation` },
      { value: `Tokyo 15 ·\nKyoto 19`, label: `Properties & rooms operated` },
      { value: `Thousands`, label: `Guests hosted` },
      { value: `Multiple`, label: `Airbnb Superhost recognition` },
    ],
  },
  valueChain: [
    { n: '01', en: 'DISCOVER', cn: ``, title: `Discover high-potential properties`, body: `Through our partner network we access off-market listings, and with a dual "operation × investment" lens we uncover properties with hidden value.` },
    { n: '02', en: 'ACQUIRE', cn: ``, title: `Support the purchase decision`, body: `We assess the effective (net) yield — factoring in operating models like hotels, hostels, vacation rentals and shared housing, not just the headline gross yield — and guide overseas investors through the decision in their own language.` },
    { n: '03', en: 'ELEVATE', cn: ``, title: `Elevate asset value`, body: `Drawing on our proven design and branding, we turn ordinary properties into compelling "experiential spaces" — from renovation planning and interior design to brand development, end to end.` },
    { n: '04', en: 'OPERATE', cn: ``, title: `Operate for stable returns`, body: `We run operations in-house, drive bookings through OTAs such as Airbnb and Booking.com, deliver multilingual guest service, and monitor performance continuously.` },
    { n: '05', en: 'EXIT', cn: ``, title: `Strategic exit or reinvestment`, body: `Backed by operating data and a proven record of value creation, we secure above-market sale prices — or roll the proceeds into the next opportunity.` },
  ],
  matrix: {
    columns: [`Traditional agency`, `Hospitality operator`, `Overseas-investment advisory`, CB],
    rows: [
      { cap: `Brokerage`, vals: ['○', '×', '△', '◎'] },
      { cap: `Effective-yield assessment`, vals: ['△', '○', '△', '◎'] },
      { cap: `Value enhancement / renovation`, vals: ['×', '△', '×', '◎'] },
      { cap: `Operations outsourcing`, vals: ['×', '◎', '×', '◎'] },
      { cap: `Multilingual support`, vals: ['×', '△', '○', '◎'] },
      { cap: `Overseas-investor network`, vals: ['×', '△', '○', '◎'] },
      { cap: `Brand building`, vals: ['×', '△', '×', '◎'] },
    ],
    legend: `◎ core strength · ○ standard · △ limited · × not offered`,
  },
  strengths: [
    { n: '01', title: `Multilingual capability`, en: 'Multilingual Service', body: `Fluent in Japanese, English and Chinese — and, just as important, able to read clients through three cultural lenses, not merely speak their language.` },
    { n: '02', title: `Hands-on hospitality experience`, en: 'Hospitality Expertise', body: `Years of hands-on operations let us read a building's value as a guest experience — something "floor area × unit price" alone can never capture.` },
    { n: '03', title: `Brand & space creation`, en: 'Brand & Space Design', body: `As our track record shows, we turn ordinary buildings into branded spaces with a story, a following and a premium.` },
    { n: '04', title: `Global customer network`, en: 'Global Network & Expert Alliance', body: `We've hosted travelers, students and investors from around the world, and built a strong network of domestic professionals — architects, judicial and administrative scriveners, tax accountants and lawyers.` },
  ],
  partnership: {
    philosophy: {
      title: `A long-term partnership, not a one-off deal`,
      body: `We're not after one-off transactions. We partner with clients across the entire asset lifecycle — because an asset has to keep creating value over 10- and 20-year horizons. Our aim is to be your long-term "asset partner," not just a "broker."`,
    },
    types: [
      { title: `Property Partnership`, en: ``, target: `Partner companies & property owners`, service: `For partners who own property: access to our overseas-investor network, exit strategy, operating proposals and value-enhancement plans — bringing your asset to investors and clients worldwide.`, value: `We don't just find a buyer — we find the client who can unlock your property's full value.` },
      { title: `Customer Referral`, en: ``, target: `Language schools, universities, professional & financial firms`, service: `For your clients: multilingual real-estate service, move-in support for foreign residents, and hosting for overseas investors — plus a long-term, two-way referral relationship.`, value: `We turn your clients' real-estate headaches into deeper trust in your organization.` },
      { title: `Operation Partnership`, en: ``, target: `Hospitality operators, investors, local governments`, service: `Drawing on our track record, we offer operations outsourcing, OTA marketing, space planning and regional-revitalization partnerships.`, value: `Through our operating brand, we turn the space you hold into an asset with a story and a loyal following.` },
    ],
  },
  faq: {
    eyebrow: 'Q&A',
    title: `Frequently asked questions`,
    subtitle: `The questions clients actually ask us — answered the way we actually work.`,
    groups: [
      {
        who: `Investors & overseas buyers`,
        items: [
          { q: `Can I complete the whole process — purchase to operation — without living in Japan?`, a: `Yes. Before you arrive: online consultations, multilingual property materials, and viewings on your behalf (with live video). At contract: we coordinate with judicial scriveners and other specialists. After purchase: we operate the property for you. You never need to be based in Japan.` },
          { q: `How is your "effective yield" different from the gross yield agents quote?`, a: `Gross yield is just full-occupancy rent divided by price. We select comparable properties in the same location and segment, estimate revenue from actual OTA price data (Booking.com and others) and seasonality, then factor in cleaning, OTA fees, renovation costs — and even work backwards from a target exit price. The result is a full P&L simulation you can base a decision on.` },
          { q: `Can this property legally operate as a hotel or vacation rental?`, a: `The requirements — zoning, fire equipment, health-office approval — differ sharply between the Hotel Business Act and the Private Lodging (minpaku) Act. Working with our network of administrative scriveners and architects, we confirm licensing feasibility before you commit. We never recommend a property that can't be operated legally.` },
          { q: `Will you run the property after I buy it?`, a: `Yes — end to end: OTA listings (copy, photos, multilingual descriptions), multilingual guest service, cleaning quality control, and ongoing revenue monitoring. Fees depend on the property's size and operating model, so we quote them together with the P&L simulation.` },
        ],
      },
      {
        who: `Landowners & property holders`,
        items: [
          { q: `My building is old and ordinary. Can it really become a place people choose to stay?`, a: `Yes. Our renovations go beyond looks: we design layouts and bed configurations backwards from real inbound-guest data (families, solo travelers and friend groups make up the majority), and at the drawing stage we walk every floor plan twice — once as a guest, once as cleaning staff. Even very small properties have operations-driven solutions.` },
          { q: `I'm worried the renovation budget will spiral.`, a: `We run the numbers before the design. Renovation costs are built into the investment simulation from day one, and design and specifications are adjusted within what the returns can recover — so "design first, budget blown" doesn't happen.` },
          { q: `Besides selling, what can I do with an idle asset?`, a: `Convert it to accommodation, renovate for leasing, or entrust operations to us — among other options. We simulate each scenario on the same assumptions, compare cash flow through to exit, and recommend the path that fits best.` },
        ],
      },
      {
        who: `International clients`,
        items: [
          { q: `I don't speak Japanese. Can I still rent or buy?`, a: `We support the entire process in Japanese, English and Chinese. Critical steps — the contract, the statutory disclosure — are confirmed point by point in your own language before we proceed.` },
          { q: `How much can we do before I arrive in Japan?`, a: `Online consultation, requirements, property shortlists with translated materials, and viewings on your behalf can all be completed in advance — so you can sign and move in right after landing.` },
          { q: `Is there support after I move in?`, a: `We help you set up utilities and settle in — and stay on as your long-term contact for future moves, purchases and investment questions.` },
        ],
      },
    ],
  },
  contactTopics: [`Property Partnership`, `Customer Referral`, `Operation Partnership`, `Investment inquiry`, `Other`],
  ui: {
    navCta: `Get in touch`, menu: `Menu`, needSuffix: ` want`,
    bordersTitle: `The five borders we cross`, bordersSubtitle: `Japan's real-estate industry is still divided by five invisible "borders."`,
    valueTeaserTitle: `Value management across the asset lifecycle`, valueTeaserSubtitle: `From Discover to Exit, we accompany clients every step — this is what "Cross the Borders" truly means in business.`, valueTeaserLink: `See the full value chain →`,
    homeCtaTitle: `Together, toward new borders`, homeCtaSubtitle: `Whether you're a landowner, an investor, or considering a partnership, feel free to reach out anytime.`, homeCtaButton: `Get in touch`,
    aboutEyebrow1: `01 · Brand philosophy`, aboutTitle1: `What CROSSBORDERS means`, aboutIntro1: `"Cross the Borders" — go beyond boundaries, create new value.\nMore than a name, it is the philosophy we work by.\nWe believe Japan's real-estate industry is, even today, divided by five invisible "borders."`,
    aboutEyebrow2: `02 · Our journey`, aboutTitle2: `The CROSSBORDERS story`,
    valueEyebrow: `03 · How we create value`, valueTitle: `Value management across the asset lifecycle`, valueIntro: `A traditional agency only handles brokerage. We bring every service together into one continuous value chain — not a set of disconnected offerings.`,
    matrixTitle: `How we differ`, matrixSubtitle: `There are plenty of agencies, operators and consultancies — but very few combine all three.`, matrixCapHeader: `Capability`,
    strengthsTitle: `Four core strengths`, valueCtaButton: `Discuss your needs`,
    partnershipEyebrow: `04 · Partnership philosophy`, partnershipTitle: `Three ways to partner`, partnershipSubtitle: `We create value in different ways, depending on the partner.`,
    targetLabel: `For: `, serviceLabel: `What we offer`, valueLabel: `Value to you`, partnershipCtaButton: `Discuss a partnership`,
    discussThis: `Discuss this partnership →`,
    homePartnerTitle: `For our partners`, homePartnerSubtitle: `Real-estate firms & owners, language schools & universities, hospitality operators — we co-create value in many forms.`, homePartnerLink: `About partnership →`,
    homePositioning: `A traditional brokerage handles only one part of the picture — sales and leasing.\nWe cross that border to maximize value at every phase, from sourcing to exit.`,
    portalAbout: `A real-estate team built to cross five borders`, portalValue: `From discovery to exit — alongside every stage of the asset`, portalPartner: `Long-term value creation with firms, institutions and operators`, learnMore: `Learn more →`,
    portalAboutCta: `About us →`, portalValueCta: `Value creation →`, portalPartnerCta: `Partnership →`,
    contactTitle: `Contact us`, contactIntro: `Fill in the form below and we'll get back to you within three business days. You're also welcome to reach us by email or phone.`, emailLabel: `Email: `, phoneLabel: `Phone: `, addressLabel: `Location: `,
    formName: `Name *`, formNamePh: `Your name`, formEmail: `Email *`, formEmailPh: 'you@company.com', formCompany: `Company`, formCompanyPh: `Company name (optional)`, formTopic: `Topic`, formMessage: `Message *`, formMessagePh: `Briefly describe your challenge or goal…`, formSubmit: `Send`, formSending: `Sending…`, formError: `Something went wrong. Please try again, or email us directly.`,
    errName: `Please enter your name`, errEmail: `Please enter a valid email`, errMessage: `Please describe your needs briefly`,
    thankName: `Thank you, {name}!`, thankNoName: `Thank you!`, thankBody: `We've received your message. Our team will contact you within three business days.`, backHome: `Back to home`,
    notFoundTitle: `Page not found`, notFoundBody: `The page you're looking for doesn't exist or has moved.`,
    footerRights: `All rights reserved.`,
  },
}

const dict = { ja, tw, zh, en }

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      // Remember a visitor's explicit choice, but always default to Japanese on
      // a first visit (no auto-detect by browser language).
      const saved = localStorage.getItem('cb-lang')
      if (saved && dict[saved]) return saved
    } catch (e) { /* ignore */ }
    return 'ja'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('cb-lang', lang) } catch (e) { /* ignore */ }
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang], langs: LANGS }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within <LangProvider>')
  return ctx
}
