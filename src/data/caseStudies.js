import coralAppImg from '../assets/coral-app.jpg'
import coralCampaignImg from '../assets/coral-campaign.jpg'
import portfcOnboardingImg from '../assets/portfc-onboarding.jpg'
import portfcStadiumImg from '../assets/portfc-stadium.jpg'
import linewiseContentImg from '../assets/linewise-content.jpg'
import linewiseDiagramImg from '../assets/linewise-diagram.jpg'
import tarangInsightImg from '../assets/tarang-insight.jpg'
import tarangWeeklyImg from '../assets/tarang-weekly.jpg'
import tarangTodayImg from '../assets/tarang-today.jpg'

export const CASE_STUDIES = {
  coral: {
    id: 'coral', company: 'Coral', year: '2022-2024', color: '#7AAEC8',
    industry: 'Web3 · B2B2C', role: 'New product category GTM',
    tags: ['Web3', '0→1 GTM', 'Wallet Launch'],
    title: 'GTM for a new product category without financial incentives',
    subheading: 'B2B2C · Web3 · Consumer Product',
    metric: '$3.5M', metricLabel: 'first-year revenue',
    image: coralCampaignImg, imageAlt: 'Coral Pick a Card campaign',
    secondImage: coralAppImg, secondImageAlt: 'Coral app onboarding flow',
    secondImageCaption: 'Coral app — onboarding flow showing the 4-step collect experience',
    product: "Coral was built inside the innovation team of a leading bank in Southeast Asia, startup instincts inside institutional constraints. The product was an NFT wallet designed for everyday users. Heavy digital asset regulations meant no trading, no financial rewards, and a multi-step onboarding we couldn't simplify away. The challenge wasn't technical. It was making a new kind of ownership feel worth having when we couldn't promise financial upside.",
    myRole: 'Owned positioning, brand voice, and GTM across the full product lifecycle, working across product, engineering, design, legal, and BD.',
    whatIDid: [
      'Repositioned NFTs as collectible moments, not financial instruments',
      "Developed accessible brand voice for users who'd never touched a crypto product",
      'Designed and executed campaigns across sports, F&B, and events verticals',
      'Represented Coral at Web3 and tech events through demos and live activations',
    ],
    campaigns: [
      { label: 'Sports: Port FC', desc: '0 to 6,000 users in half a season. Weekly match day drops with attendance-based rarity, making collecting a natural extension of fan ritual.', link: '/work/portfc' },
      { label: 'F&B: Fish & Chips Loyalty', desc: 'Replaced the punch card with an NFT of the fish you ordered, paired with a fact about its origins. Tiered rewards unlocked as collections grew, driving repeat visits through curiosity, not discounts.' },
      { label: 'Events: UX Career Fortune Cards', desc: 'A limited fortune card collection for a UX career event. Mint digitally, redeem physically. Something people actually wanted to keep.' },
    ],
    outcome: "$3.5M in first-year revenue. The clearest finding: utility and meaning drive retention. Users collected things that marked a moment, not things that might appreciate in value.",
    learned: "Every campaign was a test of the same hypothesis: can belonging be enough? The answer was yes, if the thing you're collecting actually means something. Loyalty-driven framing outperformed financial framing consistently. That insight scales well beyond collectibles.",
  },

  portfc: {
    id: 'portfc', company: 'Port FC', year: '2024', color: '#8AA88A',
    industry: 'Web3 · Sports', role: 'Consumer campaign launch',
    tags: ['Campaign', 'Digital Collectibles', 'Community'],
    title: 'Building fan community engagement from scratch',
    subheading: 'B2C · Sports · Campaign Marketing',
    metric: '6,000', metricLabel: 'users acquired',
    image: portfcOnboardingImg, imageAlt: 'Port FC onboarding flow',
    secondImage: portfcStadiumImg, secondImageAlt: 'Port FC stadium activation',
    secondImageCaption: 'Stadium activation — fans collecting at PAT Stadium',
    product: "Port FC is a Bangkok-based football club competing in the Thai Premier League. The campaign brief: launch Thailand's first official match-based digital collectible, in an environment where trading was restricted, financial rewards weren't allowed, and most fans had never heard of an NFT. The product had to earn its own reason to exist.",
    myRole: "Built GTM strategy, secured the partner, and owned campaign execution end-to-end, working across Coral's product team and Port FC's marketing team.",
    whatIDid: [
      'Chose sports as the entry vertical, built-in emotional engagement and recurring live touchpoints meant we could test the core mechanic fast',
      'Secured the Port FC partnership by leading with loyalty positioning, not NFT technology',
      'Designed a two-tier weekly drop model: Open Cards for all fans, Match Cards unlocked via ticket number or on-site QR',
      'Structured drops around match days as repeating tentpole moments, each week was an iteration, not a one-time launch',
      'Moved messaging away from Web3 language toward fan ritual and reward based on participation signals',
      'Monitored conversion and retention funnel in GA4, iteratively streamlined onboarding',
    ],
    outcome: '0 to 6,000 users within half a season. Participation grew week on week, accelerating after we introduced reward tiers. The fans who came for the match stayed for the collection. Loyalty framing outperformed NFT framing every time.',
    learned: "People collect things that mark a moment, not only things that might appreciate in value. Getting the framing right mattered more than the mechanics. Once we stopped talking about NFTs and started talking about fan identity, everything got easier.",
  },

  linewise: {
    id: 'linewise', company: 'LineWise', year: '2025', color: '#9B8EC4',
    industry: 'AI / SaaS · Manufacturing', role: 'First PMM, B2B SaaS',
    tags: ['Positioning', 'AI / SaaS', 'Messaging'],
    title: 'Messaging an AI product to skeptical, non-technical buyers',
    subheading: 'B2B SaaS · AI · Manufacturing',
    metric: '+30%', metricLabel: 'inbound conversion',
    image: linewiseContentImg, imageAlt: 'LineWise content asset',
    secondImage: linewiseDiagramImg, secondImageAlt: 'LineWise manual vs LineWise workflow',
    secondImageCaption: 'Messaging asset — manual troubleshooting vs LineWise',
    product: "LineWise is an AI platform helping manufacturers diagnose why machines go down. It connects to equipment data, identifies patterns, and surfaces root causes so factory floor teams can fix the right problem instead of repeating the same one. When I joined, the product was still in development and the ICP hadn't fully settled. The challenge was figuring out what to say, to whom, before there was a clear answer to either question.",
    myRole: "First PMM hire, embedded from ideation through pre-seed. The product and ICP were both moving targets. The job was less about launching and more about listening, then translating what we heard into something the team could build toward.",
    whatIDid: [
      'Shaped core positioning to reframe LineWise as a practical ops tool, not experimental AI',
      'Conducted customer discovery to understand how plant managers and engineers actually talk about downtime',
      'Rewrote homepage, product pages, and key CTAs around outcome-led positioning',
      'Built sales enablement materials translating technical features into language that resonated with ops teams',
      'Developed content and comms strategy for a skeptical, non-technical audience',
      'Iterated GTM approach alongside product as PMF direction shifted',
    ],
    outcome: "Rewrote the website messaging around outcomes ops teams already cared about: uptime, fewer repeat failures, getting the right fix faster. That reframe lifted inbound conversion 30% within six weeks. The number mattered less than what it confirmed: skeptical buyers respond to specificity, not capability claims.",
    learned: "The most valuable work was the discovery calls. Not because they generated quotes for a deck, but because they changed what we stopped saying. Early-stage PMM for technical products is mostly editing: cutting the parts that are true but unhelpful, until what's left lands.",
  },

  tarang: {
    id: 'tarang', company: 'Tarang', year: '2025', color: '#7A2535',
    industry: 'Productivity · Consumer', role: 'AI-assisted build',
    tags: ['Vibe Coding', 'AI Build', 'Productivity'],
    title: 'Building a values-alignment tool with AI',
    subheading: 'Consumer · Productivity · AI Build',
    metric: 'Live', metricLabel: 'product',
    image: tarangInsightImg, imageAlt: 'Tarang activity distribution and weekly insight',
    secondImage: tarangWeeklyImg, secondImageAlt: 'Tarang weekly review',
    secondImageCaption: 'Weekly review — time logged, top category, consistency score',
    thirdImage: tarangTodayImg, thirdImageAlt: 'Tarang today view',
    thirdImageCaption: 'Today view — time blocks, task list, and live tracking',
    product: "Tarang is built around one question: am I living the way I actually want to? Not a task manager, not a productivity tracker. The idea came from a real frustration, wanting to spend more time on learning and meaningful work, but having no honest picture of where the time went. In conversations with knowledge workers, the recurring pain point wasn't lack of motivation, it was invisibility. More was getting done, but people felt less in control of their own days.",
    myRole: 'Solo builder, concept, positioning, design, and development.',
    whatIDid: [
      "Identified the positioning gap: Tarang isn't a productivity tool, it's a values alignment tool, that distinction reframed every design decision and line of copy",
      'Conducted informal customer discovery at industry events, surfacing AI fragmentation as a timely GTM angle',
      "Prototyped the visual aesthetic in Google Stitch before writing a line of code",
      'Refined layouts and component design in Figma',
      'Built the full application using Claude Code, with React and Supabase',
      'Deployed on Vercel as a live, usable product',
    ],
    outcome: 'Live product. Demonstrates end-to-end ability to concept, prototype, design, and ship, and the judgment to use the right tool at the right stage rather than forcing a single workflow.',
    learned: "Positioning clarity has to come before product clarity. The insight that Tarang isn't a productivity tool, it's a values alignment tool, reframed every design decision. The build process reinforced the same lesson: using the right tool at the right stage produced a better product than forcing a single workflow.",
    liveUrl: 'https://tarang-time.vercel.app/login',
  },
}
