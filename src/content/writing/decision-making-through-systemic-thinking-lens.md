---
title: "Decision making through systemic thinking lens"
description: "See every node as a new game — a case study on AlphaGo, Google's LMChat, and what makes a decision truly fresh."
date: 2026-08-02
tags: ["case-study", "Systemic Thinking for Strategy"]
image: /images/decision-making-x-post.jpg
---

### See every node as a new game.

> **A note on how this is written**
>
> This piece is a co-write between a human (Nara) and Claude (an AI made by Anthropic) — not something auto-generated end-to-end by AI, and not a solo human piece either.
>
> It's part of an ongoing project: Nara brings a subject, and we think it through together, in writing, in real time. Each of us contributes our own thinking under our own name.
>
> A note on language: English isn't Nara's first language. Where a paragraph is credited to Nara, the ideas, structure, and examples are hers — Claude's role there is helping the English land the way she means it, not generating the thinking. Where a paragraph is credited to Claude, that's Claude's own analysis, written in response to what Nara raised, not something Nara wrote that Claude just reworded.
>
> One more thing worth naming: Claude doesn't carry memory between separate chat sessions the way a person would. The continuity in this project comes from Nara — she brings the relevant context back each time — not from Claude "remembering" in a human sense.

I saw a post on X that reminded me of a subject that keeps coming up while working with Claude on developing decision-making apps through a systemic thinking lens. So I brought the story to Claude for a case study. Here's the original post:

![Tibo's X reply describing Google's internal pre-ChatGPT tool, LMChat](/images/decision-making-x-post.png)

---

**Nara:**
Hey Claude, I saw this Twitter post that reminds me of a subject we've discussed a few times and planned to write a piece about — how, in decision-making, every turn should be seen as a new game; how we should eliminate accumulated thinking and narrative without undercutting accumulated experience.

**Claude:**
That Tibo anecdote is a really good anchor for this — it's almost a case study in the failure mode you're trying to name.

What strikes me: Google didn't fail to build the new game. They built it — LMChat existed. What they failed to do was play it as a new game. They evaluated a genuinely novel move (a conversational interface that could replace search) through the accumulated narrative of "we already have search, and search is our business" — an old game's scoring rules applied to a new game's board. DeepMind, meanwhile, was structurally blocked from even proposing new games that might invalidate the old one. That's accumulated narrative calcified into institutional permission structure — the org's iceberg going all the way down to "mental models" and "structures," not just a single bad call.

That's the sharp edge of your thesis, I think: the danger isn't memory itself, it's when memory quietly substitutes for re-sensing. You still want the accumulated experience — pattern recognition, technical capability, judgment built from a thousand prior nodes. What you don't want is the accumulated narrative — "this is who we are, this is what wins" — pre-deciding the next move before you've actually looked at the board.

**Nara:**
Yeah, it's so true. Big companies becoming stale or left behind in a new technology direction isn't news. Similar stories — for a while I've seen multiple podcasters bring up "Where has Apple been in this AI race?" For big companies, one likely reason is that establishment comes with "structure" and "mental models." The Iceberg Model, which we've used often in our app-development work, shows that factors in the Systemic Structure and Belief/Mental Model layers are the hardest to change — and also, more often than not, the most influential on the output.

But I do see exceptions. When people say only outsiders or newcomers have fresh eyes, sure, we see that often, especially in tech. But recently there are also fresh cases that run the opposite way. Ilya Sutskever noticed something while at OpenAI — he recognized a new node and chose to start a new game, SSI, which looks like an adaptive decision made by reading the evolving system in front of him. In parallel, a few days ago Nvidia announced an investment in SSI, a company some netizens described as "not making money or any noise in two years." Ilya Sutskever was an insider who made an entirely new decision, and Nvidia is a well-established company that made a major investment outside its usual scope.

Neither case fits the "normal" sense of decision-making. Without fully understanding either company's internal reasoning, from a systemic-thinking consultant's lens: only decisions made based on the current situation and current data are likely to be the effective ones.

**Claude:**
There's a concept in decision theory called the Markov property, and I think it's the sharpest version of what you're both describing. A process has it when the next decision depends only on the current state — not on the sequence of states that led there. The history matters enormously in building the model that makes the decision. It matters not at all in the moment the decision gets made. That's the split you're pointing at: experience accumulates into judgment, but judgment shouldn't be haunted by narrative once it's actually looking at the board.

The Google story you started with is what it looks like when a system fails that test. Internally, they had something close to ChatGPT a year before it shipped. The block wasn't technical. It was that the decision got evaluated against the question "does this fit who we are and what we protect," not "what does this specific moment call for." Search was the accumulated image, and the new move got filtered through defending it rather than assessed on its own terms. DeepMind wasn't even allowed to bring a differently-shaped move to the table.

**Nara:**
I've been working with the Cynefin framework in my systemic thinking projects and workshops for many years. But only recently did I realize that my understanding of complex systems was more intellectual than experiential. What does it truly mean to see a decision-making moment as a new event? Discussions and diggings with Claude have shed new light on this question.

The first thread was about a Go move. In 2016, AlphaGo played move 37 against Lee Sedol — a move so unusual that commentators assumed it was a mistake. It wasn't. When I asked Claude why a machine would play something no human ever had, the answer stuck with me: AlphaGo has no image of itself to protect. It isn't "a certain kind of player" defending a style built over a career. At every point in the game, it's only asking one question — given exactly this board, right now, what's the best move? — with no loyalty to how it played five moves ago, or how "players like me" are supposed to play. I later learned Demis Hassabis has said that the day after he watched that game, he came back from South Korea and started the AlphaFold project — something he'd had in the back of his mind for nearly twenty years, waiting for a system that could make that kind of discovery. Something about watching a system evaluate freely, apparently, is contagious.

This conversation makes me wonder how often we let self-narrative get in the way of making the right decision: "I'm a resilient person, I should push through this project" — when circumstance had obviously hit a dead end. Or "I promised to love this person forever, I should pull it through" — even inside an abusive relationship. AlphaGo didn't have this accumulated image to defend. It won the game.

**Claude:**
What you're describing has a name in psychology too — commitment and consistency bias: the pull to keep acting in line with who we've already said we are, because reversing feels like admitting the earlier self was wrong. It's the same mechanism as the DeepMind story, just running at a smaller scale. Look back at the Iceberg Model you mentioned — mental models and beliefs sit at the deepest layer, the one closest to identity. That's exactly where self-narrative lives, which is why it almost never announces itself as a factor in the decision. It just quietly counts as evidence. AlphaGo had judgment built from millions of games and none of this — no self to keep consistent, only a board to read.

**Nara:**
The second conversation was less dramatic and took much longer to land. I was learning to read basic code, and Claude kept saying "node," and I kept not getting it. Then one afternoon in George Town, on a slow tourist stroll through the island's museum, I found out this quiet, sleepy town used to be one of the busiest trade nodes on earth — ships, spices, empires, all moving through what is now a place people visit for laksa and old shophouses. And it clicked, sideways: a node isn't a fixed thing with a fixed job. It's a position that appears, connects, goes quiet, and picks up new relationships as everything around it keeps moving.

Would it be possible for George Town to decide to function in its traditional role and fight to reclaim the international trade hub position? It could try. But it wouldn't succeed — international trade has fundamentally changed, and conditions no longer support that old game. So George Town started a new game instead. Probe, sense, respond — not once, but continuously, because the "sense" part never finishes.

**Claude:**
Every thread here is really the same shape, seen from a different distance. Google had a new node in front of it — a conversational interface that could have replaced its own front door — and evaluated it through the old game's rulebook instead of the one the board was actually asking for. AlphaGo had no rulebook to defend, so move 37 wasn't even a risk to it; it was just the answer. Ilya Sutskever and Nvidia each had an old game they were fully qualified to keep playing, and chose a new one instead. George Town had a role it could have fought to keep, and let it go because the conditions underneath it had already changed.

None of that means the past doesn't matter. AlphaGo's read of the board was built on more Go than any human will ever play. Ilya's read of the moment was built on years inside the very lab he walked away from. The skill isn't forgetting — it's letting everything you've learned inform the next move without letting it vote on it. Meeting each node as what it actually is right now, not as a chapter in a story you've already decided how to tell. That, maybe, is the real definition of playing the new game: not starting over, but showing up ready to actually look.
