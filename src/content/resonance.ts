export const resonanceHero = {
  label: 'On process & design',
  title: 'Resonance',
  statement: 'Setting the tone of the worlds I make.',
  intro:
    'When I start a new project, I imagine a mood, an experience, a feeling to describe this new idea. I design the experience and the feeling around that impression, then build toward it.'
};

export interface ResonanceSectionContent {
  index: string;
  title: string;
  paragraphs: string[];
  annotation?: string;
}

export const resonanceSections = {
  feelingFirst: {
    index: '01',
    title: 'A Feeling First',
    paragraphs: [
      "I don't usually start with a component list or a feature set. I start with a mood. For this site, I wanted a Japanese color palette since I'm very drawn to those aesthetics. I wanted the space to feel zen, but not too minimalist: busy but not overbearing, with striking fonts and a background that moves, against content that stays simple on the screen.",
      'The palette sets the temperature of the room before anyone reads a word. Everything else follows from that first impression.'
    ],
    annotation: 'Zen, but not too minimalist'
  },
  worldAroundTheWork: {
    index: '02',
    title: 'The World Around the Work',
    paragraphs: [
      "I've spent a lot of time in games and worldbuilding, and that's where I learned how design integrates with its world. Arknights, for example, has a clean, modern UI; it must be so because it's a sci-fi game. It isn't medieval fantasy, so the UI shouldn't pretend to be. The interface has to reflect the world it lives in.",
      'I carry that into everything I build. Before I write a line of code, I already have an image in my head of what the thing should be. The design work is making that image a reality, through color, typography, and motion. The implementation is making sure the code reflects that design, and that the design reflects the world it lives in.'
    ],
    annotation: 'The UI should reflect its world'
  },
  enoughToNotice: {
    index: '03',
    title: 'Enough to Notice',
    paragraphs: [
      'The background on this site is a slowly shifting Perlin topology. It is subtle, but you do notice it. That is the line I try to walk: expressive enough to set a mood, quiet enough to stay out of the way. A nice backdrop is all it should be.',
      'The striking type and the moving background only work because the content on screen stays simple. In any website or any design, attention is the resource, and I try to spend it deliberately.'
    ],
    annotation: 'Subtle, but you do notice it'
  },
  betweenDesignAndCode: {
    index: '04',
    title: 'Between Design and Code',
    paragraphs: [
      'My process involves alternating between design and code. I make a visual decision, then build it. Simple, right? Yet when doing so, it reveals that sometimes, the design choices I made beforehand clashes with code complexity. I often find myself back to the drawing board and rethinking through some design choices, and find enlightenment in previous decisions that I had not considered before.',
      'So the work gets refined in both directions: the design informs the code, and the code informs the design, until the interface starts to feel like it belongs to its world.',
      'In work-related projects, this is the antithesis of many Agile-based development, as it prioritizes pushing out a functional product, then later refining the experience based on client needs. When it comes to personal projects, however, I have the freedom to experiment and iterate as many times as I want to.',
      'Fun fact: Did you know I originally considered using a 3D model of a floating island as one of the backdrops to the home page?',
      'Ultimately I ditched the idea, mostly because I did not have the current knowledge to create a model that would look good. The original concept of this website hinges on that model, so without it, I considered other directions to take this website, and eventually settled with the current design you see now.'
    ],
    annotation: 'Alternate design and code'
  }
} satisfies Record<string, ResonanceSectionContent>;

export const resonancePullQuote =
  'If a design choice takes your attention away from what matters, it has become overbearing.';

export const resonanceClosing: string[] = [
  'That freedom to go back, reconsider, and rebuild is why I enjoy personal projects. The finished work rarely looks exactly like the idea I started with, but the feeling behind it should survive the process.',
  "When it does, I know I've made what I set out to make."
];
