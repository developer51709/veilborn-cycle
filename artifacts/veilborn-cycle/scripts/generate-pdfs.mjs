import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/pdfs");
fs.mkdirSync(outDir, { recursive: true });

const books = [
  {
    id: 1,
    slug: "shadows-remember",
    title: "Shadows Remember",
    subtitle: "The Veilborn Cycle — Book One",
    theme: "Identity",
    chapters: [
      {
        title: "Prologue: The Night of Remembering",
        content: `The night was thick with silence, broken only by the faint rustle of leaves in the cold wind. In a small, unremarkable town far from the hidden realms of magic, a boy named Cael Rowan lay restless in his bed. The ceiling above him was ordinary — water-stained plaster, a cobweb in the corner — but the shadows pooled there behaved strangely, shifting and curling as if breathing.

For years he had felt the weight of something unseen pressing against his soul. A shadow lurking just beyond the edges of his consciousness, patient and cold, like an animal waiting for a door to open.

He didn't know, not yet, that the door had a name.

Centuries ago, a great betrayal had reshaped the magical world. The Council of Lumen — rulers of the Veiled, that hidden civilization existing alongside ordinary humanity — had cast out the Umbra mages. The wielders of shadow, emotion, and memory-born power. Men and women who could see what others wished forgotten. The Council had feared them, then hunted them, then declared them a myth.

They erased their history with memory-lock spells. Buried their legacy beneath layers of lies and fear. Scattered their families. Silenced their bloodlines.

But magic, especially the kind born of shadow and raw human emotion, could not be so easily silenced.

Tonight, as the clock struck midnight — the precise hour of Cael Rowan's birth eighteen years ago — his dormant power stirred. Shadows flickered at the corners of his vision. Whispers of forgotten memories brushed against his mind like turning pages. The Veil, the great invisible barrier that hid the magical world from ordinary eyes, trembled.

Cael Rowan was no ordinary boy. He was the last Umbra. And the world was about to remember.`,
      },
      {
        title: "Chapter One: Awakening",
        content: `Cael Rowan woke on the morning of his eighteenth birthday with a strange heaviness pressing against his chest, as if the night had left something behind when it retreated.

The sunlight filtering through his bedroom window seemed dimmer than usual. Not less bright — dimmer, like someone had laid gauze over the world. Shadows clung to the edges of objects with a persistence that unsettled him. The corner by his desk. The gap beneath his door. The space between his bookshelf and the wall. All of them darker than they should have been, and all of them watching him.

He sat up slowly. The whispers were already there, faint as breath, elusive as dreams. Not voices exactly — more like the echo of voices, caught in walls, trapped in floorboards, pressing outward. He had heard them before, in smaller doses, in the months since he turned seventeen. But today they were louder. More insistent.

Cael stood, and the shadows moved.

Not dramatically. Not the lurching theatrical movement of nightmares. A subtle shift, like sunflowers tracking the sun. The dark pooled at his feet trembled and leaned toward him. He took a step back, and it followed.

He pressed his palms against his eyes. "Stop it," he muttered, to himself, to the shadows, to whatever had decided that his eighteenth birthday was the appropriate occasion for an existential crisis.

That evening, alone in his room with the door locked, it happened. His hands trembled. The darkness seemed to breathe. Then, without intention, dark tendrils of shadow seeped from his fingertips like ink through water. They curled in the air, elegant and terrifying, responding to the chaotic beat of his heart. The Veil shuddered in response, a resonance he felt in his teeth and behind his eyes.

He clenched his fists. The shadows retreated, sulking back to the walls.

Fear gripped him, cold and complete. But beneath it was a fierce and unfamiliar spark. Something that felt like recognition. Like the first time you hear a word in a foreign language and realize you already knew what it meant.

Cael Rowan was no longer just a boy. He was the last Umbra.`,
      },
      {
        title: "Chapter Two: The Hunt Begins",
        content: `The Council of Lumen was swift to react. Deep within the marble halls of the Lumen Citadel, five Elders convened around a table of polished moonstone. Their faces were grave beneath the glow of enchanted chandeliers that never cast shadows.

"The last Umbra has awakened," one Elder whispered, voice heavy with dread. "Cael Rowan."

Agents were dispatched before the meeting concluded — eight of them, cloaked in neutral auras and armed with sigil-forged suppressors. Their orders were precise: locate the boy, contain him, apply a secondary lock.

Three days after his awakening, Cael became aware of a pressure in the air behind him. A wrongness. The shadows on the pavement stretched ahead of him, pulling toward him — not away from the light, as shadows should — like a warning.

He ran.

Past the park, past the strip mall, past the edge of town, where the streetlights thinned and the trees thickened. At the top of a hill he had walked a hundred times without incident, the air changed.

A shimmer in the darkness. Not light, not quite. A distortion — like heat haze, but cold. Like looking at a window from the outside and realizing the world inside was slightly different.

Cael Rowan walked through the shimmer. The Veil opened and swallowed him whole.`,
      },
      {
        title: "Chapter Three: Entering the Veiled",
        content: `The moment Cael stepped through the Veil, the world around him shifted like a painting being turned right-side up.

The air was different. Heavier. Charged with something that was not electricity but felt the way electricity feels before a storm. Towering trees stretched overhead, their bark luminescent with a faint silver-blue light that pulsed slowly, like the heartbeat of something enormous and old. The cobblestones beneath his feet were warm, and they hummed with a frequency that settled somewhere in his sternum.

A city. Hidden. Alive with magic the way an old forest is alive. Veiled markets lined a street to his left, their stalls selling items he had no words for. People passed — some in ordinary clothes, some in robes that shifted color in the lamplight.

He began to walk, because standing still felt dangerous. The shadow tendrils curled at his feet like cats, leading him deeper into the impossible city.

The remnants of Umbra sanctums were everywhere, if you knew what to look for. Doorways sealed with dark stone etched in sigils he couldn't read but felt were meant for him. The persistent smell of old magic, deep and earthy, that lingered at certain corners.

There was no going back. The world he had come from was gone — not destroyed, but unreachable in any meaningful sense. He was in the Veiled now, and the only direction available was forward.`,
      },
      {
        title: "Chapter Four: Allies and Enemies",
        content: `It was on the fourth day that Cael met Liora Vance.

She was perhaps his age, with dark eyes that catalogued everything they landed on and a posture so straight it looked like it had been engineered. She wore the silver-edged tunic of a Council apprentice, but she was alone, and she was reading — frantically, hunched over a slender tome with the speed of someone looking for an answer before the question became too loud.

"I know who you are," she said, when he stopped. "The Umbra. The one the Council is looking for."

"Then you should walk away."

"I should." She did not walk away. "My name is Liora Vance. I've been a Council apprentice for three years. I believe in the Council's mission." She pulled a folded sheaf of documents from her coat. "But I also know that the last six paragraphs of this book have just told me things about the Umbra suppression campaign that the Council's official history never mentioned."

Three days later, Cael found his aunt.

Seren Rowan opened the door before he knocked. She was perhaps forty, with Cael's same dark eyes and the kind of face that had been beautiful and was now weathered and precise. She looked at him for a long moment without speaking. Then she stood aside to let him in.

"I told myself you'd find your own way," she said, her voice low. "I wasn't ready."

"Ready for what?"

"To tell you the truth," she said. "All of it."`,
      },
      {
        title: "Chapter Five: Discovering the Past",
        content: `Through Seren's fragmented memories and Cael's unique ability to resonate with erased memories, they uncovered the truth about the Council's memory-lock spells and the dark history of Umbra magic.

"The Council told a story," Seren began. "Their version of history. The story about the Umbra was that we were dangerous. Unstable. That our magic posed an unacceptable risk to the Veil. That the ban was necessary."

"And the real story?"

"The real story is that we were the most powerful mages in history." She said it without pride. "What was unique about Umbra magic was that it couldn't be controlled by anyone other than the wielder. It couldn't be interrupted, suppressed, or overridden from outside. The Council controls the Veiled through compliance. Do you understand why Umbra magic was a problem?"

"They couldn't control it."

"They couldn't control us. That's all it was, in the end. Not safety. Not protection. Power, and the terror of losing it."

Cael reached into the memory she offered him. It hit like a wave: a stone room, firelit, full of people — his family, dozens of them. A woman at the center, young, fierce, her hands full of shadow and light both, someone trying to hold two worlds together.

He pulled back, gasping. "That was my mother," Seren said quietly. "Your grandmother."`,
      },
      {
        title: "Chapter Six: The Council's Wrath",
        content: `As Cael's power grew, so did the Council's determination to stop him. The Veil trembled under the strain of his magic, threatening to expose the Veiled to the non-magical world.

Seren trained him in small, specific lessons. How to still the shadows when stillness was needed. How to keep his emotions below the threshold that caused involuntary manifestations.

Liora came back. She arrived at Seren's door on a Thursday evening with a bruise on her jaw she didn't explain and a look in her eyes that hadn't been there before. She had stolen classified archive documents. Memory-lock authorization orders — current ones, refreshed every five years without the subjects' knowledge.

"Sixty-seven families," she said. "The classified archives showed seventeen. The real number is sixty-seven."

The Council's agents hit Seren's apartment three days later. They came at two in the morning. Six agents, well-armed, carrying suppressors calibrated to the specific frequency of Cael's Umbra signature.

They ran. It was not elegant. There was no victory in it. But Cael sat in a different abandoned sanctum afterward and understood something new: the Council wasn't just powerful. It was afraid. Afraid enough to send six agents in the dark for one untrained eighteen-year-old.

What frightened powerful people that much?`,
      },
      {
        title: "Chapter Seven: Identity Forged",
        content: `The question of identity is never a single question. It arrives in layers, pressed flat over time, compressed under the weight of everything that came after, but still distinct, still traceable to specific moments of heat and pressure.

The memory-lock was fully broken now. Not just cracked at the edges the way it had cracked on his birthday, but gone. Seren had helped with that — a session that had been, frankly, unpleasant, like pulling a splinter from deep muscle — and the world afterward was louder. Everything more vivid. Everything more real.

And with the lock gone, the grief came. For the family he'd never known. For the grandmother who'd lived her last years without memory of herself. For the version of himself that had gone eighteen years without the name for what he was.

He trained every day, harder. Shadow manipulation. Memory Resonance. The small frightening exercises in Veil Disruption.

And with each session, each small mastery, something settled in him that had never settled before. Not certainty about the future. But certainty about himself. About what he was. About what being an Umbra meant, stripped of the Council's story about it.

It meant feeling too much, and using that. It meant carrying other people's memories with care. It meant being powerful in a way that the powerful found intolerable.

He could work with that.`,
      },
      {
        title: "Epilogue",
        content: `Cael stood at the edge of a new dawn, watching the doubled sunrise over a hidden city where he had arrived as a fugitive and was leaving as something he did not yet have a word for.

The Council knew his name. They would send more agents and would eventually try something worse. He understood this with the clear-eyed practicality of someone whose illusions had been systematically removed.

He understood something else too. He was not alone. There were seventeen families still locked. There were histories buried in the deep Veil archive. There were people like Liora — people inside the Council's system who were discovering that the story they'd been told had holes in it.

Seren came to stand beside him. She didn't say anything. She was, he had learned, a person who believed that silence was frequently more honest than speech.

He thought about his grandmother in her small house, living without memory of herself.

He thought about what it would mean to give that back.

Cael Rowan followed the shadows forward, patient and knowing, leading into the city that had yet to hear his name spoken without fear.

The shadows remembered. He would make certain the world did too.`,
      },
    ],
  },
  {
    id: 2, slug: "the-forbidden-line", title: "The Forbidden Line",
    subtitle: "The Veilborn Cycle — Book Two", theme: "Legacy",
    chapters: [
      { title: "Prologue: The Shape of a Lie", content: "There is a particular architecture to a well-constructed lie. A skeleton, first — the essential claim, the thing that must be believed. Then layers built over it: context, precedent, the careful pruning of contradictory evidence. Three hundred years of erased histories. Three hundred years of refreshed memory-locks. Three hundred years of the word Umbra becoming something one said with a particular expression — the expression of a doctor discussing a disease that had been eradicated. Then one boy in a small town turned eighteen and the shadow moved." },
      { title: "Chapter One: The Survivors", content: "The Umbra training ground was nothing like Cael had imagined. What he found was a basement under a neutral market, accessed through a door that looked like a supply closet, where six people met on alternating Tuesdays. Six people. The surviving fragments of what had once been hundreds of trained mages across twelve family lines. He sat in a folding chair and looked at these six people and tried not to show the particular grief of understanding what really had been lost." },
      { title: "Chapter Two: Aren", content: "He met Aren Vale on a wet Wednesday in the neutral market, when a voice behind him said: 'You're doing it wrong.' A young man, perhaps his age, with sharp features and the particular brightness of expression that comes with being extremely interested in how things work. His clothes were threaded through with sigil circuits stitched directly into the fabric. 'Aren Vale,' he said. 'Sigil engineer. Freelance. You're Umbra.' Cael's entire body went cold. 'Calm down,' Aren said. 'I don't care about the ban. I care about interesting problems, and Umbra magic is the most interesting problem in the Veiled by a significant margin.'" },
      { title: "Chapter Three: The Rival", content: "Riven Kaelus arrived in Cael's life without announcement, standing in the ruins of the old Umbra sanctum with his arms behind his back in the posture of someone who had been waiting and considered patience a skill. 'Council prodigy, class of this year. The Council sent me to find you. I want to be clear — I'm not here under cover. I'm here because I was ordered to locate you, and I located you. And then I'm going to wait for you to ask me why I haven't reported it yet.' He had accessed the classified memory-lock files and found things the Council's history had never mentioned." },
      { title: "Chapter Four: The Memory-Lock Conspiracy", content: "The truth, when they assembled it, was worse than any of them had expected. Aren provided the technical analysis. Liora had the classified documents. Riven had pulled the re-lock protocol from the Elder archives. 'The protocol outlines a secondary emergency procedure,' Riven said carefully. 'If an Umbra bloodline produces an active mage and the primary lock fails, the Council is authorized to perform what is described as a deep lock. Permanent suppression. The mage retains function — memory, language, the mechanics of thought. But the emotional capacity that fuels Umbra magic is severed. Not reduced. Removed.' No one spoke for a long time." },
      { title: "Chapter Five: Deepening Cracks", content: "The romance happened the way significant things often happen: gradually, then suddenly, and then as though it had always been obvious. Aren had been a fixture of Cael's life for three months when Cael realized he looked for Aren first when entering a room. What he had not expected was the other Aren — the one who sat with him at two in the morning when nightmares from other people's memories refused to let him sleep. Who did not try to fix it but simply stayed. 'I am involved because I choose to be,' Aren said. 'Not because I got caught up in it or felt obligated. Because this is the right thing and you are — a person I want to be around.'" },
      { title: "Chapter Six: The Line Revealed", content: "The memory was called 'The First Council's Choice,' and it had been buried in the deepest available archive of the Veil for two hundred and ninety-seven years. Cael found it by accident. He found: a council chamber, old, nine figures in a circle, and at the center, three Umbra mages. Not hostile. Not threatening. Speaking. The first Umbra had not been expelled from the Council. They had been offered a choice. They could bind their power to the Council's oversight structure, or continue as they were — free, uncontrolled, outside the structure. The Umbra had refused. Not from arrogance, but from principle. Umbra magic was emotion-based, memory-based, bound to the individual's inner state. To submit it to Council oversight was to submit themselves. They refused. And the Council began the suppression." },
      { title: "Epilogue", content: "The decision was made in the market basement on a Tuesday, in the small hours of a night that smelled of rain and old stone. They had enough to make the truth public. Not enough to make it stick — not yet. They needed more evidence, more allies, and access to a Veil anchor to begin releasing the locked families. 'Then we get access to an anchor,' Cael said. 'That's considerably harder,' Riven said. 'Yes,' Cael said. 'It is.' The shadows stretched toward the door, the direction of forward. The forbidden line had been drawn across their history like a scar. He was going to erase it." },
    ],
  },
  {
    id: 3, slug: "the-broken-council", title: "The Broken Council",
    subtitle: "The Veilborn Cycle — Book Three", theme: "Rebellion",
    chapters: [
      { title: "Prologue: The Architecture of Control", content: "There are eleven Veil anchors. Each one a structure of enormous complexity. Each one staffed by a rotating cadre of Council-sanctioned maintenance mages. Each one armed. The Council maintained that the anchors were purely defensive — that the Veil was a protection, not a tool. What they had not disclosed was that embedded within the maintenance layer was a secondary network. Sixty-seven channels of sustained magical current, each one carrying the frequency signature of a memory-lock. Not seventeen. Sixty-seven. Cael Rowan stood outside the first anchor building and considered this number." },
      { title: "Chapter One: Into the Lion's Den", content: "They entered Pillar Nine through a maintenance hatch that Liora had identified from stolen building plans. The core chamber was staggering — the anchor itself a column of woven light that reached six stories to the ceiling, moving in slow spirals of blue and silver. Around its base: sixty-seven channels of dark current, carefully hidden against the light's larger presence. Cael reached into the channel network. Cold, mechanical work — the difference between reading a letter and feeling the hand that wrote it. He found the first lock. Began the careful work of unraveling it. At nineteen minutes, the first lock released. In a house far outside the Veiled edge, a woman in her mid-forties sat up suddenly in her sleep, her hands pressed to her temples, with the sense of a door inside her mind swinging open." },
      { title: "Chapter Two: The Veil Destabilizes", content: "They hit three more anchor buildings in the following nine days. The work was not clean. The second building had additional guard rotation. The third had a ward that triggered on Umbra-signature specifically — new, meaning the Council was updating its defenses faster than anticipated. Halfway through the fourth building, the Veil shuddered. Not gently. A genuine shudder — a wave through the magical substrate like an earthquake, felt by every sensitive mage within several blocks. 'That was the Veil responding to the locks being removed,' Seren said, her face gone white. 'It's been maintaining itself in a specific configuration for three hundred years. When you release a lock, the Veil has to rebalance. We hadn't thought through what that would mean at scale.'" },
      { title: "Chapter Three: Fractures in the Council", content: "The public story was beginning to crack. The Unveiled Herald ran a brief item about Veil fluctuations. The Council's official response claimed routine maintenance. Elder Maren sent a warning through indirect channels: a sealed envelope with specific coordinates and a time. Inside: the emergency session minutes. The re-lock vote result — four to one. The protocol authorized. The date: two days away. 'They're going to try to lock him again,' Riven said. 'Yes.' 'We need to warn him.' 'I know,' Liora said." },
      { title: "Chapter Four: Public Opinion Fractures", content: "The Unveiled Herald ran the story on a Thursday. Not everything — just the first layer: primary source documents showing the Umbra suppression was not an emergency safety measure but a premeditated political operation. The reaction was not clean. Some were angry. The protest outside the Citadel grew to several hundred. But there was also the other response. The Council's official statement acknowledged the suppression had been 'more aggressive than modern standards would sanction' while defending ongoing memory-locks as necessary safety measures — citing the very Veil instability Cael's anchor operations had caused. People believed it. Not everyone. But enough. 'This is what change looks like,' Liora said. 'It's not clean. It's never clean.'" },
      { title: "Chapter Five: The Re-Lock Spell", content: "They went in three teams. Cael and Seren to Pillar Three. Aren and Jonah to Pillar Seven. Riven and Liora to the Citadel's communication hub. The synchronization began. Cael felt it — felt it in his bones, in the shadow-fabric of his magic, a specific frequency designed to locate and lock Umbra signatures permanently. He reached into the anchor. The synchronization was partially in progress. He held. He reached. He found the lock's anchor point and pulled — hard, with everything he had, with the full weight of his grief and anger and the memory of his grandmother and sixty-seven families and three hundred years of erasure. The anchor ruptured. The backlash hit him like a wave. He was on the floor. The synchronization collapsed. But the lock attempt had left a mark — a scar in his magical signature. His power, for now, was diminished." },
      { title: "Epilogue", content: "The cost settled over the weeks that followed with the patient consistency of rain. Cael's power remained diminished — not gone, but altered. The fine control he'd built over months of training was uncertain, the emotional channel that fueled his Umbra magic slightly muffled. The public story continued to fracture. More documentation surfaced. The protest outside the Citadel doubled and was now permanent. The Council's response had hardened. 'They've framed it,' Riven said. 'It's not about the suppression anymore. It's about the instability. About you.' 'Then we need the full truth,' Cael said. 'Not just the suppression history. The original choice. What the Umbra were, before they were made into a story about danger.'" },
    ],
  },
  {
    id: 4, slug: "veilfall", title: "Veilfall",
    subtitle: "The Veilborn Cycle — Book Four", theme: "War",
    chapters: [
      { title: "Prologue: The First Fracture", content: "The Veil broke on a Tuesday. Not completely — a section of the barrier thinning and cracking along a fifty-meter span, the magical substrate failing to hold its configuration, the shimmer that should have been invisible becoming visible for seven minutes. Three non-magical residents photographed it and uploaded it to the internet before the Council's emergency repair team sealed it. The Council suppressed the images. But within the Veiled, in the communities that had heard Thera's broadcasts and lived with the tremors for months, the fracture was not forgotten. The war began with a question that could no longer go unanswered." },
      { title: "Chapter One: Open Conflict", content: "The day the Council publicly designated Cael Rowan as a Veil-class threat — authorizing emergency enforcement measures including lethal force — the protest outside the Citadel did not disperse. It grew. Three hundred people, then more. The first battle happened in the Neutral Market when a Council enforcement team attempted to arrest three vendors identified as contacts in Liora's information network. The arrest went wrong in ways that enforcement teams go wrong when some bystanders are trained mages who have been watching authority abuse its power for months. Footage captured. Thera broadcast within the hour. 'This is escalating faster than we planned,' Riven said. 'We were responding,' Aren said. 'Same problem.'" },
      { title: "Chapter Two: The Ancestor's Truth", content: "The Veil's deep archive gave up the original records on a night when the city was quiet and Cael's Resonance reached further than it ever had. He found the First Council's Choice — all of it. And behind it, deeper: the other truth. The one buried so thoroughly it had not surfaced in any archive. The original Umbra had not merely refused the Council's oversight offer. They had warned them. An Umbra elder had looked at the Council's proposal and mapped out the trajectory of a society where all magic was controlled through a single institution. The concentration of power. The slow erosion of individual agency. The way oversight systems calcify over centuries into the things they were meant to prevent. The elder had said: 'If you build this, you will end up here. We will not participate in building it.'" },
      { title: "Chapter Three: A Price Paid", content: "Jonah died on a Wednesday. An enforcement raid — a Council team hitting three safe houses simultaneously at four in the morning with the coordinated precision of people who had been planning it for weeks. Most got out. Jonah had been at a secondary location. He was seventeen. He had a gift for invisibility, and it had protected him every time it needed to. That night, it failed. Cael sat with this for a long time. The grief was enormous. He sat in it. He did not let it stop him. Aren found him that night, sitting in the dark, and sat beside him without speaking. After a while Cael leaned against him and closed his eyes. A small and necessary silence in the middle of something enormous. 'We go to the Citadel,' Cael said. 'We go to the Citadel,' Aren agreed." },
      { title: "Chapter Four: Into the Stronghold", content: "Riven's plan for the Citadel was the most complicated thing any of them had attempted. They entered in three phases. Cael came last — through the main entrance. This was deliberate. The Council was expecting a stealth approach, and the most confusing thing he could do was walk in without one. He walked into the atrium with shadows moving ahead of him and his full Umbra signature unmasked. Two dozen guards raised weapons. He stopped and raised both hands. 'I'm here for the archive,' he said. 'The deep archive. The original Council session records from the First Choice. I'm not here to destroy anything or hurt anyone. I want the records, I want them publicly released, and then I'll leave.' Elder Calla appeared at the far end of the atrium. 'Cael Rowan.' 'Elder Calla. This is a confrontation, not a surrender. Different thing.'" },
      { title: "Epilogue", content: "They got the records. It cost them. Riven took a suppressor hit. Liora spent four hours hiding in a monitoring room. Seren and Aren had to abort their route. But Cael stood in the archive room and reached into the deep archive with every ounce of Memory Resonance he possessed. The original records came clear — the First Council's Choice, the elder's warning, three hundred years of actual history. He carried it in his own memory, outside any document that could be seized. Thera broadcast it within twenty-four hours. The response was still divided. It would always be divided. But the truth was out. Completely, irrevocably, in the world. He could work with that." },
    ],
  },
  {
    id: 5, slug: "the-last-umbra", title: "The Last Umbra",
    subtitle: "The Veilborn Cycle — Book Five", theme: "Power",
    chapters: [
      { title: "Prologue: What Power Costs", content: "The question of power is never really about power. It is about what you do when you have it — what you allow, what you refuse, what you protect, and what you are willing to destroy in order to protect it. Elder Voss had held power for forty years. He had done things that were wrong. The memory-locks were wrong. The suppression was disproportionate. Three hundred years of erasure were the result of a single bad decision compounding across generations with the terrible momentum of institutional policy. He had not reversed these things when he had the power to do so. He was beginning to understand that the understanding had come forty years too late." },
      { title: "Chapter One: The Final Reckoning", content: "The month after the archive broadcast was the worst and most necessary period of Cael's life. The truth being out did not immediately resolve anything. What it did was clarify the conflict. The locked families that had been freed began finding each other. Not one of them, when they understood what had been done, was not angry. Maren defected publicly — naming the re-lock attempt, the deep-lock protocol, the original suppression decision, and himself as someone who had known and been complicit. His defection cost the Council their quorum. The emergency measures that Elder Voss had been relying on lapsed. This did not end the conflict. It ended the Council's claim to legal legitimacy." },
      { title: "Chapter Two: The Veil's True Purpose", content: "Elder Voss waited for him in the atrium. Not an enforcement team. Just Voss, sitting in a chair in the center of the room. 'Sit down,' he said. 'There is something I need to tell you about the Veil. Something that isn't in any archive.' The Veil had not been built by the first Council. It was old — older than the Council, older than the Lumen lineage, older than any current institution. It had been built by the Umbra. Not as a barrier, but as a stabilizer — a structure designed to regulate the interaction between magical and non-magical reality. The Veil's deepest mechanisms were Umbra mechanisms — emotion-based, memory-structured. The Council had destroyed the mages who built their most essential infrastructure and spent three centuries wondering why the Veil was difficult to maintain. 'The Veil is failing,' Voss said. 'Within fifteen years, the barrier will fail completely.'" },
      { title: "Chapter Three: The Choice", content: "Cael could repair the Veil. He had the ability — the Memory Resonance to access its original architecture, the Shadow Manipulation to work in the emotional substrate. But first: 'The Council, as it exists, dissolves. Not the functions it performs — the Veil still needs maintenance, the Veiled still needs governance. But the unilateral authority structure. The Elder system, the unilateral enforcement powers, the classification of information that belongs to every person it affects. A new structure. Built with input from all communities — Umbra, Lumen, Aether mages, the freed families. Transparent. Accountable. With a specific mandate to begin the managed disclosure process within ten years. The non-magical world deserves to know we exist.' Voss was quiet for a long time. Then: 'I accept your condition.'" },
      { title: "Chapter Four: The Last Confrontation", content: "Elder Gorden was the purist — the one who had believed, genuinely, that Umbra magic was a corrupting force. He was also the one who had designed the deep-lock protocol. They met in his private council chamber. Cael alone. 'I'm going to tell you the choice,' Cael said. 'The same choice your predecessor gave my ancestor, three hundred years ago. Participation in a new structure. Oversight. Transparency. Or you retire. Fully, with no further role in governance. No prison. No erasure. No lock of any kind. Just the end of your authority.' Gorden stared at him. 'You have the power to do more than that.' 'I know,' Cael said. 'That's the point.' The silence stretched. Then, slowly, with the careful movement of someone putting down something carried for a long time, Gorden folded his hands. 'I'll retire,' he said." },
      { title: "Chapter Five: Reshaping the World", content: "The repair of the Veil took three months. The most exhausting work of Cael's life, and also the most clarifying. He heard the Veil. He communicated back. Not without cost — the extended contact amplified everything. Every grief, every loss, every moment of unprocessed feeling became louder. He learned to feel things without being consumed by them. To carry loss and anger and hope and love simultaneously, as instruments of perception rather than conditions to be managed. He became, in those three months, fully himself. The managed disclosure process began two years after the Veil's repair. It took twenty years. It was not finished in Cael's lifetime, but it was started, and the structure to carry it forward was in place." },
      { title: "Epilogue: The Shadows Remember", content: "On the night of Cael Rowan's thirty-sixth birthday, he stood in the garden of the first recovered Umbra sanctum and watched the doubled moons rise over a city that knew his name without fear. Aren was beside him, which was the default condition of Cael's life and had been for eighteen years. Riven and Liora were in a governance meeting. Seren had retired and lived quietly at the Veiled's edge. The young Umbra students were Cael's particular joy — fourteen of them now, children and teenagers from the freed families, their abilities manifesting in the safe conditions of a world that knew what they were. He watched the moons rise and thought about his grandmother, who had lived without memory of herself. He remembered everything. He would make certain the world did too.\n\nThe Veilborn Cycle concludes.\nWritten by Nyxen\nFive books. One bloodline. The truth the shadows kept." },
    ],
  },
];

async function generatePDF(book) {
  const filename = `book${book.id}-${book.slug}.pdf`;
  const filepath = path.join(outDir, filename);

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A5",
      margins: { top: 60, bottom: 60, left: 60, right: 60 },
      info: {
        Title: book.title,
        Author: "Nyxen",
        Subject: book.subtitle,
      },
    });

    const stream = fs.createWriteStream(filepath);
    doc.pipe(stream);

    // Cover page
    doc.rect(0, 0, doc.page.width, doc.page.height).fill("#0d0a1a");

    const grad = doc.linearGradient(
      doc.page.width / 2 - 100, 0, doc.page.width / 2 + 100, doc.page.height
    );
    grad.stop(0, "#4a1d96").stop(1, "#0d0a1a");
    doc.rect(0, 0, doc.page.width, doc.page.height).fill(grad);

    doc
      .fillColor("#c4b5fd")
      .fontSize(9)
      .font("Helvetica")
      .text("A FANTASY SERIES BY NYXEN", 0, 80, {
        align: "center",
        characterSpacing: 3,
      });

    doc
      .fillColor("#ffffff")
      .fontSize(28)
      .font("Helvetica-Bold")
      .text(book.title.toUpperCase(), 0, 115, { align: "center" });

    doc
      .fillColor("#a78bfa")
      .fontSize(11)
      .font("Helvetica")
      .text(book.subtitle, 0, 160, { align: "center" });

    doc.moveTo(80, 190).lineTo(doc.page.width - 80, 190).stroke("#a78bfa");

    doc
      .fillColor("#e2e8f0")
      .fontSize(10)
      .font("Helvetica-Oblique")
      .text(`Theme: ${book.theme}`, 0, 200, { align: "center" });

    doc
      .fillColor("#c4b5fd")
      .fontSize(9)
      .font("Helvetica")
      .text("THE VEILBORN CYCLE", 0, doc.page.height - 70, {
        align: "center",
        characterSpacing: 2,
      });

    doc
      .fillColor("#7c3aed")
      .fontSize(9)
      .text(`© Nyxen — All Rights Reserved`, 0, doc.page.height - 50, {
        align: "center",
      });

    // Table of contents
    doc.addPage();
    doc.rect(0, 0, doc.page.width, doc.page.height).fill("#0d0a1a");
    doc
      .fillColor("#a78bfa")
      .fontSize(14)
      .font("Helvetica-Bold")
      .text("CONTENTS", 60, 60, { characterSpacing: 2 });
    doc.moveTo(60, 82).lineTo(doc.page.width - 60, 82).stroke("#4a1d96");

    let tocY = 100;
    book.chapters.forEach((ch, i) => {
      doc
        .fillColor("#e2e8f0")
        .fontSize(9)
        .font("Helvetica")
        .text(`${i + 1}.  ${ch.title}`, 60, tocY, {
          width: doc.page.width - 120,
        });
      tocY += 22;
    });

    // Chapters
    book.chapters.forEach((chapter) => {
      doc.addPage();
      doc.rect(0, 0, doc.page.width, doc.page.height).fill("#0d0a1a");

      // Chapter title
      doc
        .fillColor("#a78bfa")
        .fontSize(8)
        .font("Helvetica")
        .text(book.title.toUpperCase(), 60, 50, {
          characterSpacing: 2,
          align: "center",
          width: doc.page.width - 120,
        });

      doc
        .fillColor("#ffffff")
        .fontSize(15)
        .font("Helvetica-Bold")
        .text(chapter.title, 60, 70, {
          align: "center",
          width: doc.page.width - 120,
        });

      doc
        .moveTo(doc.page.width / 2 - 30, 105)
        .lineTo(doc.page.width / 2 + 30, 105)
        .stroke("#4a1d96");

      // Content
      const paragraphs = chapter.content.split("\n\n").filter((p) => p.trim());
      let y = 120;
      paragraphs.forEach((para) => {
        if (y > doc.page.height - 80) {
          doc.addPage();
          doc.rect(0, 0, doc.page.width, doc.page.height).fill("#0d0a1a");
          y = 60;
        }
        doc
          .fillColor("#d1d5db")
          .fontSize(10)
          .font("Helvetica")
          .text(para.trim(), 60, y, {
            width: doc.page.width - 120,
            align: "justify",
            lineGap: 3,
          });
        y = doc.y + 14;
      });
    });

    doc.end();
    stream.on("finish", () => {
      console.log(`Generated: ${filename}`);
      resolve(filepath);
    });
    stream.on("error", reject);
  });
}

console.log("Generating PDFs for The Veilborn Cycle...");
for (const book of books) {
  await generatePDF(book);
}
console.log("All PDFs generated in public/pdfs/");
