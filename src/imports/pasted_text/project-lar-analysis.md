Create a professional presentation based on the following Unreal Engine C++ project analysis.

Project Title:
ProjectLAR — Unreal Engine C++ Quarter-View Action RPG Prototype

Presentation Goal:
Create a portfolio-style technical presentation that explains the development process, system architecture, implementation highlights, and results of an Unreal Engine C++ action RPG prototype inspired by Lost Ark-style quarter-view combat and UI.

Design Direction:
Use a modern dark fantasy action RPG presentation style.
Main colors: deep navy blue and rich blue.
Accent color: yellow or gold for important highlights, arrows, numbers, and key terms.
Use a 16:9 widescreen layout.
Keep the slides visually clean and game-portfolio-like.
Use minimal text on normal slides, but allow more detailed diagrams and explanations on important technical slides.
Leave large image/GIF placeholder areas for gameplay captures, UI screenshots, combat demonstrations, inventory UI, enhancement UI, and boss pattern videos.
Avoid long code blocks. Use simplified architecture diagrams, flow diagrams, system cards, and before-after visuals instead.

Overall Project Summary:
ProjectLAR is an Unreal Engine C++ based quarter-view action RPG prototype.
The project includes player movement, click-to-move control, mouse-direction combat, dash/blink movement, skill slots, drag-and-drop skill registration, cooldown UI, inventory, quick item slots, weapon equipment, weapon enhancement, SaveGame persistence, interaction actors, boss AI, boss patterns, telegraph attack indicators, damage interface, floating damage UI, and multiple draggable UI windows.

Recommended Slide Structure:

Slide 1 — Title
Title: ProjectLAR
Subtitle: Unreal Engine C++ Quarter-View Action RPG Prototype
Visual: Large gameplay screenshot or dark fantasy background.
Accent: Yellow line or glowing title highlight.

Slide 2 — Project Overview
Explain that this is a Lost Ark-inspired quarter-view action RPG prototype built in Unreal Engine C++.
Key points:

* Quarter-view action combat
* Mouse-based movement and attack direction
* Skill slot system
* Inventory, equipment, enhancement
* Boss pattern and telegraph system
  Visual: Game system overview image placeholder.

Slide 3 — Core Gameplay Loop
Show the main gameplay loop:
Move → Aim → Attack / Skill → Cooldown → Loot / Inventory → Equip / Enhance → Boss Battle
Use a circular flow diagram with blue nodes and yellow arrows.

Slide 4 — Player Control System
Explain the player control design.
Key systems:

* Right-click movement using mouse world position
* Mouse-direction basic attack
* Dash / blink movement
* Camera zoom input
* Skill inputs for Q, W, E, R, A, S, D, F, V
* Quick item inputs for 1, 2, 3, 4
  Visual: Control layout diagram.

Slide 5 — Player Action State Management
Explain the action state system.
Mention the enum-based action states:
Idle, BasicAttack, Dash, Casting, Skill, HitReaction, Dead.
Explain why this is useful:

* Prevents conflicting actions
* Allows controlled cancellation rules
* Makes combat behavior predictable
* Separates movement, dash, basic attack, casting, and skill execution
  Visual: State transition diagram.

Slide 6 — Skill System Architecture
Explain the skill structure.
Key points:

* Skills are identified by ELPlayerSkillID
* Skill slots are separated from skill IDs
* Skill data is handled through LPlayerSkillDataAsset
* Skills include Meteor, Ice Lance, Thunder, Wind, Frost Field, Meteor Rain
* Some skills use casting, cooldown, mana cost, VFX, SFX, and damage tuning
  Visual: Skill execution pipeline:
  Input → Slot → Skill ID → DataAsset → Cost/Cooldown → Cast or Execute → Spawn Actor/VFX → Apply Damage

Slide 7 — Action Slot and Drag-and-Drop UI
This should be one of the important detailed slides.
Explain the structure objectively.
Key points:

* LActionSlotWidget supports skill slots, ultimate slot, and item slots
* Drag payloads are separated by ELDragPayloadType: Skill, Ultimate, Item
* Slot types are separated by ELActionSlotType
* Slot positions are managed by ELActionSlotKey
* Skills can be dragged from the skill window to action slots
* Items can be assigned to quick slots
* Cooldown radial and cooldown text are handled inside the action slot widget
  Why this structure is good:
* One widget class can support multiple action slot types
* Drag-and-drop behavior is reusable
* UI and gameplay slot data are separated
* Easier to expand with more skills or item slots
  Visual: UI slot diagram with payload arrows.

Slide 8 — Damage Interface Design
This should be a dedicated technical highlight slide.
Explain the LDamageable interface.
Key points:

* Damage is processed through an interface rather than direct class dependency
* ReceiveSkillDamage receives damage value, damage causer, and skill ID
* Player skills can damage any actor that implements the interface
* Boss, test damage boxes, and other future enemies can share the same damage flow
  Why this structure is good:
* Reduces coupling
* Makes the combat system expandable
* Allows new enemies or destructible objects to receive damage without rewriting skill code
  Visual: Interface diagram:
  Skill Actor → ILDamageable → Boss / Enemy / Test Target

Slide 9 — Inventory, Item, and Quick Slot System
Explain the inventory component.
Key systems:

* LInventoryComponent manages inventory slots
* Item data is defined through LItemDataAsset
* Item types include Weapon, Material, Consumable, Currency
* Consumables restore HP or Mana
* Quick item slots allow potion-style usage from number keys
* Inventory supports add, remove, move, use, quick slot assignment, and SaveGame loading
  Visual: Inventory UI screenshot placeholder.

Slide 10 — Weapon Equipment and Enhancement System
This should be another important detailed slide.
Explain the weapon system.
Key points:

* Equipment is focused on weapons
* Weapon data includes weapon type, base attack power, enhancement level, and attack power growth
* Enhancement uses gold cost, material cost, success chance, max level, and result data
* LWeaponEnhanceWindowWidget handles enhancement UI
* LWeaponEnhanceNpcActor opens the enhancement window through interaction
  Why this is meaningful:
* It connects inventory, equipment, currency, material items, UI, and character stats
* It creates an RPG-style growth loop similar to action RPG progression systems
  Visual: Enhancement flow:
  Select Weapon → Check Gold/Material → Attempt Enhance → Success/Fail → Update Weapon Stat

Slide 11 — SaveGame Persistence
Explain the save system.
Key points:

* LPlayerSaveGame stores skill slot data
* Inventory slot data is saved
* Gold is saved
* Equipped weapon slot index is saved
* Quick item slot item IDs are saved
* This allows data to persist after level travel or restart
  Visual: Save/load diagram:
  Player State → SaveGame Object → Load on BeginPlay

Slide 12 — Interaction System
Explain interactable actors.
Key points:

* LInteractableActor uses overlap detection
* Interaction widgets can open when the player interacts
* Outline can be enabled for nearby interactable objects
* Specialized actors inherit or extend this structure, such as boss entrance and weapon enhancement NPC
  Visual: Player near NPC → Outline → Press Interaction Key → Open Widget

Slide 13 — Boss System Architecture
Explain the boss system.
Key components:

* OB_BossAIController handles perception, target finding, movement, and teleport positioning
* OB_BossFSMComponent manages boss battle state
* OB_CombatComponent handles HP, attacks, cooldown, and death
* OB_PatternComponent selects and executes attack patterns
* OB_TelegraphModule creates attack warning indicators
  Visual: Boss architecture diagram.

Slide 14 — Boss Pattern and Telegraph System
This should be a detailed technical slide.
Explain the boss attack flow:
Detect Target → Select Pattern → Spawn Telegraph → Delay / Warning → Execute Attack → Cooldown → Select Next Pattern
Mention available pattern examples:

* Axe
* Rush
* Slam
* Card
  Why this is good:
* Telegraphs improve player readability
* Pattern component separates attack logic from AI movement
* The boss can be expanded with more patterns later
  Visual: Telegraph warning area screenshot or GIF placeholder.

Slide 15 — UI System Overview
Explain the UI layer.
Key UI classes:

* Player UI widget
* Skill window widget
* Inventory window widget
* Equipment window widget
* Weapon enhancement window widget
* Action slot widget
* Floating damage widget
* Draggable window widget
  Key point:
  The UI is not only visual; it is connected to gameplay systems such as skill assignment, item usage, enhancement, and equipment preview.
  Visual: UI map with connected gameplay systems.

Slide 16 — Objectively Strong Technical Points
Create a clean analysis slide titled “Strong Technical Structures”.
Include these points:

1. Interface-based damage system using ILDamageable
2. Data-driven skill and item configuration using DataAssets
3. Component-based inventory and boss combat logic
4. Reusable drag-and-drop payload system for skills and items
5. SaveGame integration for slots, inventory, equipment, and quick items
6. Separated boss AI, FSM, combat, pattern, and telegraph responsibilities
7. UI widgets connected to gameplay systems but separated by clear class responsibilities

Design this slide with cards. Use yellow icons or labels for each strength.

Slide 17 — Development Result
Summarize what the prototype currently demonstrates:

* Quarter-view action RPG movement
* Skill-based combat
* Cooldown and casting
* Drag-and-drop skill slots
* Inventory and quick item system
* Weapon equipment and enhancement
* Boss pattern prototype
* Save/load persistence
  Visual: Large montage layout with 4 to 6 screenshot placeholders.

Slide 18 — Future Improvements
Mention possible next steps:

* Add more animation notifies for precise hit timing
* Improve boss pattern balancing
* Add more skills and ultimate skill polish
* Add item acquisition and loot drop flow
* Improve UI art polish
* Add sound feedback and camera shake
* Refactor large player character logic into smaller components if the project grows
  Visual: Roadmap timeline.

Slide 19 — Closing
Title: From Prototype to Playable ARPG System
Closing message:
This project demonstrates how Unreal Engine C++ can be used to build a scalable action RPG prototype by combining combat, UI, inventory, equipment, enhancement, SaveGame, interaction, and boss pattern systems.
Visual: Hero gameplay screenshot placeholder.

Important Presentation Notes:

* Do not make the slides look like a code lecture.
* Use architecture diagrams instead of long source code.
* Emphasize “problem → implementation → result” on technical slides.
* Keep normal slides minimal, but make slides 7, 8, 10, 13, 14, and 16 more detailed.
* Use navy and blue as the base colors, with yellow/gold highlights for important keywords and arrows.
* Add large placeholders for gameplay GIFs, combat screenshots, inventory UI, enhancement UI, boss telegraph GIF, and skill slot drag-and-drop GIF.
* The presentation content must be written in Korean.
