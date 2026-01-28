---
name: writing-viral-tweets
description: Crafts viral, clickbaity tweets for X.com with strong CTAs. Use when the user mentions tweet writing, X.com content, social media posts, viral content, or Twitter marketing.
---

# Viral Tweet Writer

## When to use this skill
- User asks to write a tweet
- User mentions X.com or Twitter content creation
- User wants viral/engaging social media posts
- User needs help with social media marketing copy

## Workflow

### Step 1: Topic Discovery
Ask the user:
```
🐦 **What topic would you like your tweet about?**

Please share:
1. The main topic/subject
2. Target audience (optional)
3. Any specific angle or hook you want to emphasize (optional)
```

### Step 2: Deep Research
Once the topic is provided, perform comprehensive research:

- [ ] Use `search_web` tool to find latest trends on the topic
- [ ] Research viral tweets in that niche for inspiration
- [ ] Identify trending hashtags related to the topic
- [ ] Find compelling statistics or facts to include
- [ ] Analyze competitor tweets for engagement patterns

### Step 3: Tweet Generation Framework

Apply these **viral tweet principles**:

#### Character Limit
- Maximum 280 characters
- Aim for 200-240 characters (optimal for engagement)
- Leave room for hashtags if needed

#### Clickbait Hooks (Use ONE)
| Hook Type | Example Pattern |
|-----------|-----------------|
| **Curiosity Gap** | "Nobody talks about this, but..." |
| **Controversy** | "Unpopular opinion: [statement]" |
| **Authority** | "After [X] years/projects, here's what I learned..." |
| **Urgency** | "This is why [thing] is changing forever" |
| **Numbers** | "[X] things I wish I knew about..." |
| **Shock** | "Stop doing [common thing]. Here's why 👇" |
| **FOMO** | "Everyone is missing this about [topic]" |

#### CTA (Call-to-Action) Patterns
| CTA Type | Example |
|----------|---------|
| **Engagement** | "Agree? 👇" or "Thoughts?" |
| **Share** | "RT if you relate 🔄" |
| **Follow** | "Follow for more [topic] insights" |
| **Link** | "Link in bio 🔗" |
| **Save** | "Bookmark this 🔖" |
| **Reply** | "Drop a [emoji] if this hits" |

#### Emoji Usage
- Use 1-3 strategic emojis max
- Place at natural breaks or end
- Most effective: 🔥 💡 🚀 👇 ⬇️ 🎯 ✅ ❌ 💰 🧵

### Step 4: Generate Tweet Options

Create **3 tweet variations** with different hooks:

```
📝 **TWEET OPTIONS**

**Option 1 (Curiosity Hook):**
[Tweet text here]

**Option 2 (Authority Hook):**
[Tweet text here]

**Option 3 (Controversy/Bold Hook):**
[Tweet text here]

---
🏷️ **Suggested Hashtags:** #Hashtag1 #Hashtag2 #Hashtag3
📊 **Best posting time:** [Based on topic/audience]
```

### Step 5: Refinement Loop
Ask user:
```
Which option resonates most with you?
- Reply with the number (1, 2, or 3)
- Or request modifications: "Make it more [professional/casual/aggressive/funny]"
```

## Quality Checklist

Before presenting final tweet:
- [ ] Under 280 characters
- [ ] Has a hook in the first line
- [ ] Includes a clear CTA
- [ ] Easy to read (no jargon unless appropriate)
- [ ] Creates curiosity or emotion
- [ ] Actionable or relatable
- [ ] No more than 3 hashtags

## Anti-Patterns to Avoid

❌ Generic statements without hooks  
❌ Overusing hashtags (max 3)  
❌ All caps text (looks spammy)  
❌ Too many emojis (distracting)  
❌ Weak CTAs like "please like"  
❌ Long sentences that are hard to skim  
❌ Passive voice  

## Example Output

**Topic:** AI in testing

**Generated Tweet:**
```
Stop writing test cases manually.

AI writes better tests in 30 seconds than most devs write in 30 minutes.

Here's the proof 👇

#QA #Testing #AI
```

**Analysis:**
- Hook: Controversy ("Stop...")
- Specificity: Time comparison (30 sec vs 30 min)
- CTA: Thread indicator (👇)
- Hashtags: 3 relevant tags

## Resources

- Use `search_web` for latest trends and viral examples
- Reference Twitter/X best practices for character optimization
- Check trending topics for timely hooks
