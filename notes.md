# Data Modeling Notes

## Requirements

Build a data model for a Role Playing Game.
-   support unique classes.
-   manage user accounts.
-   an account can have multiple characters.
-   the player picks the class for their character at creation time.
-   characters use weapons.
-   weapons and other items belong to the account (not to the character).
-   a character can pick a "profession" like fisher/farmer/cook/alchemyst.
-   a Tool is associated with a profession (e.g.: fishing rod with fisher).
-   a character CAN go on a quest, not required

Determine the database tables necessary to track this information.
Label any relationships between table.

## A good data model
- capture all information needed
- capture ONLY the needed information for right now (not for future) but you want it to be flexible
- reflects reality currently (not future)

## WORKFLOW
- identify the entities (similar to a resource). Tip: find the `nouns`
    - we found accounts, characters, classes, professions, weapons
    - lets start with accounts and characters. Its a one-to-many relationship
    - since its a One-To-Many, we need to use a foreign key on the many side
- identify relationships between the entities
- identify the attributes for the entities

## Types of Relationships
- One to One (not as common, SS# is an example)
- One to Many
- Many to Many

## Matras
- every table MUST have a primary key
- work on two or three tables at a time only
- on a One-to-Many relationship, use a foreign key
- the foreign key goes on the "many" side of the relationship (characters side). You need to look at the structure of the data to find out, because it depends on how data is set up.
- On a Many-to-Many, add a third table
- the third table sometimes (aka junction table) can have extra information

## Write Queries (we cannot test because we dont have a real database for this one)
```sql
--- list of all quests a character is working on, but haven't completed
select * 
from characters as c
join character_quests as cq on c.id = cq.character_id
join quests as q on q.id = cq.quest_id
where cq.completed_on is null;

-- list of all completed quests for a character
select * 
from characters as c
join character_quests as cq on c.id = cq.character_id
join quests as q on q.id = cq.quest_id
where cq.completed_on is not null;


-- list of all wizards in the game
select * 
from characters as c
join classes as cl on c.class_id = cl.id
where c.class_id = 1

--list of all quests completed by wizards
select *
from characters as c
join character_quests on character.id = character_quests.character_id
join quests on character_quest.quest_id = quest.id
join classes on classes.id...... NEED TO FILL IN 

```
An index is a way to make database searches........