export interface CaseStudy {
  id: string;
  client: string;
  description: string;
  year: string;
  sections: {
    context: string;
    strategicQuestion: string;
    constraintsAndTradeoffs: string;
    theSystem: string;
    outcome: string;
    reflection: string;
  };
  relatedInsights: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "meridian",
    client: "Meridian Ventures",
    description: "Repositioning a legacy investment firm for a new generation of founders.",
    year: "2025",
    sections: {
      context: `Meridian Ventures had operated for fifteen years as a respected middle-market investment firm. Their reputation was built on quiet competence and long-term relationships with a specific generation of entrepreneurs.

By 2024, they faced an existential challenge: the founders they historically served were aging out, and a new generation of entrepreneurs didn't know they existed. Their digital presence—unchanged since 2018—communicated stability, but to younger founders, it read as irrelevance.

Their competitors had modernized. Meridian's partners recognized they needed to change, but feared losing the trust signals that had served them well.`,
      strategicQuestion: `How do you modernize a 15-year-old brand without abandoning the qualities that made it trustworthy in the first place?

The obvious answer—a complete rebrand with contemporary aesthetics—carried real risks. Meridian's existing portfolio companies expected consistency. Referral partners knew them as the "steady hand" in a volatile market.

The less obvious question emerged: Could we reposition without rebranding? Could we change perception through language, structure, and digital experience rather than visual identity?`,
      constraintsAndTradeoffs: `Several constraints shaped our approach:

The existing visual identity would remain. The partners were not prepared for the internal disruption of a full rebrand, nor did they believe it was necessary. We agreed—the problem was not the logo.

Speed mattered more than perfection. Meridian was losing deals to competitors who simply appeared more relevant. We needed visible change within 90 days, not 12 months.

Content would be the carrier of change. The partners had decades of accumulated insight but no structured way to share it. This became the lever.

The trade-off we accepted: some existing relationships might feel the firm was "changing." We decided this was acceptable if the alternative was invisibility to the next generation.`,
      theSystem: `We built a content-first digital presence designed to demonstrate thinking rather than claim expertise.

The website was restructured around three principles: show intellectual depth immediately, make the team's perspective accessible, and reduce friction for qualified founders while increasing it for misaligned ones.

The homepage led with a position—a clear articulation of how Meridian thinks about investment differently. This replaced the generic value propositions that had previously occupied the space.

A founder resources section offered substantive guidance on fundraising, valuation, and growth decisions. This was not gated content; it was public, generous, and designed to build trust before any conversation occurred.

The portfolio section was reorganized to emphasize the strategic decisions behind each investment, not just the logos of companies funded.

Finally, we implemented a structured outreach system—not marketing automation, but a considered approach to engaging with founders in relevant communities with genuine value.`,
      outcome: `In the first quarter after launch, qualified inbound leads increased by three times the previous quarterly average. More significantly, the quality of those leads improved—founders arrived with context about Meridian's perspective, often referencing specific content.

The sales cycle shortened by approximately 60%. Founders who reached out had already decided they aligned with Meridian's approach; initial conversations focused on fit rather than pitch.

Perhaps most telling: two portfolio founders mentioned that the new site made them "proud to be associated with Meridian"—a signal that the repositioning resonated beyond new prospects.`,
      reflection: `This engagement reinforced a principle we return to often: perception problems are rarely solved by visual changes alone.

Meridian's challenge was not that they looked outdated—it was that they had no presence in the conversations where new founders made decisions. The solution was not a new brand; it was a new way of showing up.

The constraint of keeping the existing identity forced more creative thinking. It required us to focus on substance over surface, which ultimately produced a more defensible market position.

What we might do differently: begin content production earlier. The website launch created demand for insight that took months to fulfill. A parallel content development track would have capitalized on initial momentum more effectively.`
    },
    relatedInsights: ["clarity-compounds", "restraint-as-strategy"]
  },
  {
    id: "atelier-noire",
    client: "Atelier Noire",
    description: "Building editorial authority for a luxury interior studio.",
    year: "2025",
    sections: {
      context: `Atelier Noire had spent a decade building a reputation among a small circle of architects and high-net-worth clients through word of mouth and occasional press features. Their work was exceptional—the kind of projects that appeared in design publications and established long careers.

But they had no digital presence to speak of. Their website was a minimal portfolio with no text beyond project locations. They had never written about their work, never articulated their philosophy, never given potential clients language to understand what made them different.

This mattered because their competitive landscape had shifted. Larger firms with significant marketing budgets were capturing search traffic and social attention. Atelier Noire was winning referrals but invisible to clients searching for luxury interior design in their market.`,
      strategicQuestion: `How do you build digital presence for a studio that has operated on reputation alone, without compromising the exclusivity that reputation conveys?

The obvious answer—content marketing, social media presence, SEO optimization—felt wrong for the brand. Atelier Noire's value was partly in their restraint, their selectivity, their resistance to self-promotion.

The question became: Could we build visibility through editorial quality rather than marketing volume? Could we rank for competitive terms while maintaining the tone of a design publication rather than a marketing site?`,
      constraintsAndTradeoffs: `The studio principals were uncomfortable with promotional language of any kind. This was non-negotiable—any content that felt like marketing would be rejected.

Resources were limited. Unlike their well-funded competitors, Atelier Noire could not produce content at volume. We would need to compete on quality and specificity rather than quantity.

The existing portfolio imagery was exceptional but context-free. Each project had a story, but those stories had never been told. The trade-off we accepted: this approach would take longer to show results. SEO built on editorial quality compounds slowly but durably. We needed to set expectations accordingly.`,
      theSystem: `We developed an editorial strategy that treated the website as a design publication rather than a marketing property.

Each portfolio project was reconstructed as a narrative. We conducted extensive interviews with the principals to extract the decisions, constraints, and thinking behind each space. These became long-form project studies—three to four thousand words each—that could rank for specific, high-intent search terms.

We identified twelve primary keywords where Atelier Noire could credibly compete. Rather than creating thin content for each, we developed comprehensive resources that would become the definitive reference for each topic.

The site architecture was rebuilt around these content pillars, with clear internal linking structures that would compound authority over time.

Finally, we established a sustainable publishing rhythm—one substantial piece per month—that the studio could maintain without dedicated marketing staff.`,
      outcome: `Within six months, organic search traffic had increased by 85%. More importantly, the quality of that traffic was exceptional—visitors averaged over four minutes on site and viewed multiple project studies.

By month eight, Atelier Noire ranked on the first page of search results for all twelve primary keywords we had targeted. Three of those positions were in the top three results.

Inquiry quality improved dramatically. Potential clients arrived with sophisticated understanding of the studio's approach, often referencing specific project decisions from the case studies. Initial consultations became substantive conversations about vision rather than introductory explanations of process.`,
      reflection: `This project demonstrated that editorial quality can compete with marketing volume—but it requires patience and consistency.

The temptation in SEO is always to produce more. We deliberately chose the opposite: fewer pieces, higher quality, deeper substance. This worked because it aligned with the brand's values and created content that genuinely served readers rather than algorithms.

What surprised us: the project studies became internal tools as well. The studio began using them in client presentations to articulate their thinking. The content served multiple purposes we hadn't initially anticipated.

The risk we managed: six months is a long time to wait for results. We were fortunate to work with principals who understood that building genuine authority takes time. Not every client would have that patience.`
    },
    relatedInsights: ["design-systems-scale", "clarity-compounds"]
  },
  {
    id: "commonwealth",
    client: "Commonwealth Capital",
    description: "Establishing trust through restraint for a boutique advisory.",
    year: "2024",
    sections: {
      context: `Commonwealth Capital was a boutique M&A advisory serving founder-led businesses in the $10-50 million revenue range. They had deep expertise, a strong track record, and a clear value proposition: hands-on attention that larger firms couldn't provide.

Their problem was attraction, not delivery. Their website spoke to everyone, which meant it connected with no one. They received a steady stream of inquiries, but perhaps 60% were from businesses outside their sweet spot—too small, wrong industry, or seeking services they didn't offer.

Each unqualified inquiry consumed partner time. Initial calls with misaligned prospects were draining resources that should have focused on existing clients and genuine opportunities.`,
      strategicQuestion: `How do you design a digital presence that actively discourages the wrong prospects while strongly attracting the right ones?

Most advisory websites try to cast a wide net. The conventional wisdom is that more inquiries mean more opportunities. Commonwealth's experience proved otherwise—more inquiries often meant more wasted time.

The strategic question was counterintuitive: Could we reduce total inquiries while improving business outcomes? Could deliberate friction serve the firm's interests better than broad accessibility?`,
      constraintsAndTradeoffs: `The partners wanted to maintain approachability. They had built their reputation on being accessible and responsive. Any changes needed to preserve that quality for the right prospects.

We could not pre-qualify with forms alone. The sophistication of their ideal clients meant that heavy-handed qualification questions would feel insulting. Filtering had to happen through content and positioning, not interrogation.

The trade-off was explicit: we would likely reduce total inquiries. Some qualified prospects might also be deterred by more specific positioning. This was the cost of clarity, and the partners accepted it.`,
      theSystem: `We rebuilt Commonwealth's digital presence around a single principle: clarity about who they serve and how they think.

The homepage immediately established specificity. Rather than generic advisory language, we stated explicitly: "M&A advisory for founder-led businesses between $10-50 million in revenue preparing for meaningful transitions." Anyone outside that description would know immediately.

The approach section articulated their philosophy in detail—not what they do, but how they think about transactions. This attracted prospects who valued depth and deterred those seeking transactional relationships.

Case studies were structured around strategic decisions rather than outcomes. We showed how Commonwealth thinks through complexity, which resonated with sophisticated founders and felt dense to those seeking simple solutions.

The contact section set clear expectations: response times, initial conversation structure, and the kind of engagement that made sense. This was not a contact form—it was a mutual qualification process.`,
      outcome: `Total inquiries decreased by approximately 35% in the first quarter after launch. However, the composition of those inquiries changed dramatically.

Unqualified inquiries—those from businesses outside Commonwealth's target profile—dropped by roughly 70%. The partners estimated they were saving 10-15 hours per week previously spent on initial calls with misaligned prospects.

More significantly, the quality of qualified inquiries improved. Prospects arrived better prepared, with clearer understanding of what a Commonwealth engagement would involve. Average deal size for new clients increased by 25%.

The partners reported that initial conversations became more substantive. They spent less time explaining and more time exploring whether there was genuine fit.`,
      reflection: `This engagement crystallized something we've observed repeatedly: clarity is a filter, and filters create value.

The conventional instinct is to be broadly appealing. Commonwealth's experience shows this often backfires—attracting volume that cannot convert while failing to differentiate for the prospects who matter.

What we learned: sophisticated clients value specificity. Commonwealth's ideal prospects are founders who have built successful businesses. They recognize and respect precision. Vague positioning signals that a firm doesn't know who it serves—and sophisticated clients notice.

The approach requires confidence. Not every firm is willing to explicitly narrow their audience. Commonwealth's willingness to be specific created the clarity that made the strategy work.`
    },
    relatedInsights: ["restraint-as-strategy", "clarity-compounds"]
  }
];

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find(study => study.id === id);
}

export function getRelatedCaseStudies(currentId: string, limit: number = 2): CaseStudy[] {
  return caseStudies.filter(study => study.id !== currentId).slice(0, limit);
}
