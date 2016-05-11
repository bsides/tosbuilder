var maxrank = 7; var baseclass = ""; var classlist = { "char1_1": { "name": "SWORDSMAN", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_swordsman.png", "skills": [ "swordsman_thrust", "swordsman_bash", "swordsman_gungho", "swordsman_concentrate", "swordsman_pain-barrier", "swordsman_restrain", "swordsman_pommelbeat", "swordsman_doubleslash", ] }, "char1_2": { "name": "HIGHLANDER", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_highlander.png", "skills": [ "highlander_wagon-wheel", "highlander_cartar-stroke", "highlander_crown", "highlander_cross-guard", "highlander_moulinet", "highlander_sky-liner", "highlander_cross-cut", "highlander_skull-swing", "highlander_vertical-slash", ] }, "char1_3": { "name": "PELTASTA", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_peltasta.png", "skills": [ "peltasta_umbo-blow", "peltasta_rim-blow", "peltasta_swash-buckling", "peltasta_guardian", "peltasta_shield-lob", "peltasta_high-guard", "peltasta_butterfly", "peltasta_umbro-thrust", "peltasta_langort", ] }, "char1_4": { "name": "HOPLITE", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_hoplite.png", "skills": [ "hoplite_stabbing", "hoplite_pierce", "hoplite_finestra", "hoplite_synchro-thrusting", "hoplite_long-stride", "hoplite_spear-lunge", "hoplite_spear-throw", ] }, "char1_5": { "name": "BARBARIAN", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_barbarian.png", "skills": [ "barbarian_embowel", "barbarian_helm-chopper", "barbarian_cleave", "barbarian_stomping-kick", "barbarian_frenzy", "barbarian_warcry", "barbarian_seism", "barbarian_giantswing", "barbarian_pouncing", ] }, "char1_6": { "name": "RODELERO", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_rodelero.png", "skills": [ "rodelero_shield-charge", "rodelero_montano", "rodelero_targe-smash", "rodelero_shield-push", "rodelero_shield-shoving", "rodelero_slithering", "rodelero_shield-bash", "rodelero_shootingstar", "rodelero_high-kick", ] }, "char1_7": { "name": "CATAPHRACT", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_cataphract.png", "skills": [ "cataphract_impaler", "cataphract_earthwave", "cataphract_trot", "cataphract_steedcharge", "cataphract_doomspike", "cataphract_rush", ] }, "char1_8": { "name": "SQUIRE", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_squire.png", "skills": [ "squire_weaponmaintenance", "squire_armormaintenance", "squire_repair", "squire_arrest", "squire_base-camp", "squire_refreshment-table", "squire_penalty-reduction", ] }, "char1_9": { "name": "CORSAIR", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_corsair.png", "skills": [ "corsair_jolly-roger", "corsair_iron-hook", "corsair_keel-hauling", "corsair_unlock-chest", "corsair_dust-devil", "corsair_hexen-dropper", "corsair_double-weapon-assault", "corsair_pistol-shot", ] }, "char1_11": { "name": "DOPPELSOELDNER", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_doppelsoeldner.png", "skills": [ "doppelsoeldner_deeds-of-valor", "doppelsoeldner_mordschlag", "doppelsoeldner_double-pay-earn", "doppelsoeldner_punish", "doppelsoeldner_cyclone", "doppelsoeldner_zornhau", "doppelsoeldner_zucken", "doppelsoeldner_redel", ] }, "char1_12": { "name": "FENCER", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_fencer.png", "skills": [ "fencer_attaque-coquille", "fencer_esquive-toucher", "fencer_flanconnade", "fencer_lunge", "fencer_sept-etoiles", "fencer_attaque-composee", "fencer_preparation", ] }, "char1_13": { "name": "DRAGOON", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_dragoon.png", "skills": [ "dragoon_dragon-soar", "dragoon_dragontooth", "dragoon_serpentine", "dragoon_gae-bulg", ] }, "char1_14": { "name": "TEMPLAR", "base": "swordsman", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_templar.png", "skills": [ "templar_summom-guild-member", "templar_warp-to-guild-member", "templar_build-guild-tower", "templar_reduce-craft-time", "templar_battle-orders", ] }, "char1_15": { "name": "SHINOBI", "base": "swordsman", "max_circle": 1, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/swordsman/c_swordsman_shinobi.png", "skills": [ "shinobi_mijin-no-jutsu", "shinobi_bunshin-no-jutsu", "shinobi_mokuton-no-jutsu", "shinobi_katon-no-jutsu", "shinobi_kunai", ] }, "char2_1": { "name": "ARCHER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_archer.png", "skills": [ "archer_multi-shot", "archer_full-draw", "archer_swift-step", "archer_oblique-shot", "archer_kneeling-shot", "archer_heavy-shot", "archer_twinarrows", ] }, "char2_2": { "name": "RANGER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_ranger.png", "skills": [ "ranger_barrage", "ranger_high-anchoring", "ranger_critical-shot", "ranger_steady-aim", "ranger_time-bomb-arrow", "ranger_bounce-shot", "ranger_spiral-arrow", ] }, "char2_3": { "name": "QUARRELSHOOTER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_quarrelshooter.png", "skills": [ "quarrelshooter_deploy-pavise", "quarrelshooter_scatter-caltrop", "quarrelshooter_stone-picking", "quarrelshooter_stone-shot", "quarrelshooter_rapid-fire", "quarrelshooter_teardown", "quarrelshooter_runningshot", ] }, "char2_4": { "name": "SAPPER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_sapper.png", "skills": [ "sapper_stake-stockades", "sapper_conceal", "sapper_claymore", "sapper_punji-stake", "sapper_detonate-traps", "sapper_broom-trap", "sapper_collar-bomb", "sapper_spike-shooter", ] }, "char2_5": { "name": "HUNTER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_hunter.png", "skills": [ "hunter_coursing", "hunter_snatching", "hunter_rush-dog", "hunter_praise", "hunter_pointing", "hunter_retrieve", "hunter_hounding", "hunter_growling", ] }, "char2_6": { "name": "WUGUSHI", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_wugushi.png", "skills": [ "wugushi_zhendu", "wugushi_detoxifiy", "wugushi_needle-bow", "wugushi_bewitch", "wugushi_wugong-gu", "wugushi_throw-gu-pot", "wugushi_jincan-gu", ] }, "char2_7": { "name": "SCOUT", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_scout.png", "skills": [ "scout_camoubandeirae", "scout_flu-flu", "scout_flare-shot", "scout_cloaking", "scout_perspective-distortion", "scout_split-arrow", "scout_scan", ] }, "char2_8": { "name": "ROGUE", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_rogue.png", "skills": [ "rogue_sneak-hit", "rogue_feint", "rogue_vendetta", "rogue_capture", "rogue_evasion", "rogue_lachrymator", "rogue_backstab", "rogue_burrow", ] }, "char2_9": { "name": "FLETCHER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_fletcher.png", "skills": [ "fletcher_broadhead", "fletcher_bodkin-point", "fletcher_barbed-arrow", "fletcher_crossfire", "fletcher_magic-arrow", "fletcher_divine-machine-arrow", ] }, "char2_10": { "name": "FALCONER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_falconer.png", "skills": [ "falconer_call", "falconer_roost", "falconer_circling", "falconer_hovering", "falconer_pheasant", "falconer_hanging-shot", "falconer_sonic-strike", ] }, "char2_11": { "name": "SCHWARZEREITER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_schwarzereiter.png", "skills": [ "schwarzereiter_concentrated-fire", "schwarzereiter_caracole", "schwarzereiter_limacon", "schwarzereiter_retreat-shot", "schwarzereiter_wild-shot", ] }, "char2_12": { "name": "CANNONEER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_cannoneer.png", "skills": [ "cannoneer_cannon-shot", "cannoneer_shootdown", "cannoneer_siege-burst", "cannoneer_cannon-blast", ] }, "char2_13": { "name": "MUSKETEER", "base": "archer", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/archer/c_archer_musketeer.png", "skills": [ "musketeer_butt-stroke", "musketeer_snipe", "musketeer_covering-fire", "musketeer_bayonet-thrust", "musketeer_penetration-shot", "musketeer_headshot", ] }, "char3_1": { "name": "WIZARD", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_wizard.png", "skills": [ "wizard_energy-bolt", "wizard_lethargy", "wizard_sleep", "wizard_reflect-shield", "wizard_earthquake", "wizard_surespell", "wizard_magic-missile", "wizard_quick-cast", ] }, "char3_2": { "name": "PYROMANCER", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_pyromancer.png", "skills": [ "pyromancer_flame-ground", "pyromancer_fireball", "pyromancer_fire-wall", "pyromancer_enchant-fire", "pyromancer_flare", "pyromancer_fire-pillar", "pyromancer_hell-breath", ] }, "char3_3": { "name": "CRYOMANCER", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_cryomancer.png", "skills": [ "cryomancer_ice-bolt", "cryomancer_ice-pike", "cryomancer_ice-wall", "cryomancer_ice-blast", "cryomancer_subzero-shield", "cryomancer_gust", "cryomancer_frost-pillar", "cryomancer_snow-rolling", ] }, "char3_4": { "name": "PSYCHOKINO", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_psychokino.png", "skills": [ "psychokino_psychic-pressure", "psychokino_telekinesis", "psychokino_swap", "psychokino_teleportation", "psychokino_magnetic-force", "psychokino_raise", "psychokino_gravity-pole", ] }, "char3_5": { "name": "LINKER", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_linker.png", "skills": [ "linker_unbind", "linker_physical-link", "linker_joint-penalty", "linker_hangmans-knot", "linker_spiritual-chain", "linker_lifeline", ] }, "char3_6": { "name": "THAUMATURGE", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_thaumaturge.png", "skills": [ "thaumaturge_swell-left-arm", "thaumaturge_shrink-body", "thaumaturge_swell-body", "thaumaturge_transpose", "thaumaturge_reversi", "thaumaturge_swell-right-arm", "thaumaturge_swell-brain", ] }, "char3_7": { "name": "ELEMENTALIST", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_elementalist.png", "skills": [ "elementalist_electrocute", "elementalist_stone-curse", "elementalist_hail", "elementalist_prominence", "elementalist_freezing-sphere", "elementalist_meteor", "elementalist_frost-cloud", "elementalist_rain", ] }, "char3_8": { "name": "SORCERER", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_sorcerer.png", "skills": [ "sorcerer_summoning", "sorcerer_summon-familiar", "sorcerer_summon-salamion", "sorcerer_summon-servant", "sorcerer_attack-ground", "sorcerer_riding", "sorcerer_morph", "sorcerer_hold", "sorcerer_evocation", "sorcerer_desmodus", ] }, "char3_9": { "name": "CHRONOMANCER", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_chronomancer.png", "skills": [ "chronomancer_quicken", "chronomancer_reincarnate", "chronomancer_stop", "chronomancer_slow", "chronomancer_haste", "chronomancer_pass", "chronomancer_back-masking", ] }, "char3_10": { "name": "NECROMANCER", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_necromancer.png", "skills": [ "necromancer_gather-copse", "necromancer_create-shoggoth", "necromancer_flesh-cannon", "necromancer_flesh-hoop", "necromancer_dirty-pole", "necromancer_corpse-tower", "necromancer_raise-dead", "necromancer_disinter", ] }, "char3_11": { "name": "ALCHEMIST", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_alchemist.png", "skills": [ "alchemist_combustion", "alchemist_dig", "alchemist_briquetting", "alchemist_tincturing", "alchemist_item-awakening", "alchemist_gem-roasting", "alchemist_magnum-opus", ] }, "char3_12": { "name": "WARLOCK", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_warlock.png", "skills": [ "warlock_pole-of-agony", "warlock_invocation", "warlock_evil-sacrifice", "warlock_dark-theurge", "warlock_mastema", ] }, "char3_13": { "name": "FEATHERFOOT", "base": "wizard", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_featherfoot.png", "skills": [ "featherfoot_blood-bath", "featherfoot_blood-sucking", "featherfoot_bone-pointing", "featherfoot_ngadhundi", "featherfoot_kurdaitcha", ] }, "char3_14": { "name": "RUNECASTER", "base": "wizard", "max_circle": 1, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/wizard/c_wizard_runecaster.png", "skills": [ "runecaster_hagalaz", "runecaster_isa", "runecaster_thurisaz", "runecaster_tiwaz", "runecaster_algiz", ] }, "char4_1": { "name": "CLERIC", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_cleric.png", "skills": [ "cleric_heal", "cleric_cure", "cleric_safety-zone", "cleric_deprotected-zone", "cleric_divine-might", "cleric_fade", "cleric_guardian-saint", ] }, "char4_2": { "name": "KRIVIS", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_krivis.png", "skills": [ "krivis_aukuras", "krivis_zalciai", "krivis_daino", "krivis_zaibas", "krivis_divine-stigma", "krivis_melstis", ] }, "char4_3": { "name": "PRIEST", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_priest.png", "skills": [ "priest_aspersion", "priest_monstrance", "priest_blessing", "priest_resurrection", "priest_mass-heal", "priest_sacrament", "priest_revive", "priest_stone-skin", "priest_exorcise", ] }, "char4_4": { "name": "BOKOR", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_bokor.png", "skills": [ "bokor_hexing", "bokor_effigy", "bokor_tet-mamak-la", "bokor_zombify", "bokor_mackangdal", "bokor_bwa-kayiman", "bokor_samediveve", "bokor_ogounveve", "bokor_damballa", ] }, "char4_5": { "name": "DIEVDIRBYS", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_dievdirbys.png", "skills": [ "dievdirbys_carve-vakarine", "dievdirbys_statue-of-goddess-zemyna", "dievdirbys_statue-of-goddess-laima", "dievdirbys_carve-attack", "dievdirbys_carve-owl", "dievdirbys_carve-world-tree", "dievdirbys_statue-of-goddess-ausrine", ] }, "char4_6": { "name": "SADHU", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_sadhu.png", "skills": [ "sadhu_out-of-body", "sadhu_prakriti", "sadhu_vashita-siddhi", "sadhu_astral-body-explosion", "sadhu_possession", "sadhu_transmitprana", ] }, "char4_7": { "name": "PALADIN", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_paladin.png", "skills": [ "paladin_smite", "paladin_restoration", "paladin_resist-elements", "paladin_turn-undead", "paladin_conversion", "paladin_barrier", "paladin_conviction", ] }, "char4_8": { "name": "MONK", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_monk.png", "skills": [ "monk_iron-skin", "monk_double-punch", "monk_palm-strike", "monk_hand-knife", "monk_one-inch-punch", "monk_energy-blast", "monk_god-finger-flicking", "monk_golden-bell-shield", ] }, "char4_9": { "name": "PARDONER", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_pardoner.png", "skills": [ "pardoner_simony", "pardoner_indulgentia", "pardoner_discern-evil", "pardoner_increase-magic-defense", "pardoner_spell-shop", "pardoner_oblation", "pardoner_decatose", ] }, "char4_10": { "name": "DRUID", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_druid.png", "skills": [ "druid_telepath", "druid_carnivory", "druid_shape-shifiting", "druid_chortasmata", "druid_transform", "druid_sterea-troph", ] }, "char4_11": { "name": "ORACLE", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_oracle.png", "skills": [ "oracle_prophecy", "oracle_arcane-energy", "oracle_change", "oracle_clairvoyance", "oracle_counter-spell", "oracle_forecast", "oracle_resetting", "oracle_death-sentence", ] }, "char4_12": { "name": "PLAGUE DOCTOR", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_plague_doctor.png", "skills": [ "plague_doctor_healing-factor", "plague_doctor_incineration", "plague_doctor_bloodletting", "plague_doctor_fumigate", "plague_doctor_pandemic", "plague_doctor_beakmask", ] }, "char4_13": { "name": "KABBALIST", "base": "cleric", "max_circle": 3, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_kabbalist.png", "skills": [ "kabbalist_revenged-sevenfold", "kabbalist_ein-sof", "kabbalist_merkabah", "kabbalist_gematria", "kabbalist_reduce-level", "kabbalist_notarikon", ] }, "char4_14": { "name": "CHAPLAIN", "base": "cleric", "max_circle": 1, "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/class_icon/cleric/c_cleric_chaplain.png", "skills": [ "chaplain_last-rites", "chaplain_deploy-capella", "chaplain_magnus-exorcismus", "chaplain_aspergillum", ] }, }; var classcirclelist = { "char1_1": 0, "char1_2": 0, "char1_3": 0, "char1_4": 0, "char1_5": 0, "char1_6": 0, "char1_7": 0, "char1_8": 0, "char1_9": 0, "char1_10": 0, "char1_11": 0, "char1_12": 0, "char1_13": 0, "char1_14": 0, "char1_15": 0, "char2_1": 0, "char2_2": 0, "char2_3": 0, "char2_4": 0, "char2_5": 0, "char2_6": 0, "char2_7": 0, "char2_8": 0, "char2_9": 0, "char2_10": 0, "char2_11": 0, "char2_12": 0, "char2_13": 0, "char3_1": 0, "char3_2": 0, "char3_3": 0, "char3_4": 0, "char3_5": 0, "char3_6": 0, "char3_7": 0, "char3_8": 0, "char3_9": 0, "char3_10": 0, "char3_11": 0, "char3_12": 0, "char3_13": 0, "char3_14": 0, "char4_1": 0, "char4_2": 0, "char4_3": 0, "char4_4": 0, "char4_5": 0, "char4_6": 0, "char4_7": 0, "char4_8": 0, "char4_9": 0, "char4_10": 0, "char4_11": 0, "char4_12": 0, "char4_13": 0, "char4_14": 0 }; var ranklist = { "rank1": { "swordsman":["char1_1"], "archer": ["char2_1"], "wizard": ["char3_1"], "cleric": ["char4_1"] }, "rank2": { "swordsman":["char1_2", "char1_3"], "archer": ["char2_2", "char2_3"], "wizard": ["char3_2", "char3_3"], "cleric": ["char4_2", "char4_3"] }, "rank3": { "swordsman":["char1_4", "char1_5"], "archer": ["char2_4", "char2_5"], "wizard": ["char3_4", "char3_5"], "cleric": ["char4_4", "char4_5"] }, "rank4": { "swordsman":["char1_6", "char1_7"], "archer": ["char2_6", "char2_7"], "wizard": ["char3_6", "char3_7"], "cleric": ["char4_6", "char4_7"] }, "rank5": { "swordsman":["char1_8", "char1_9"], "archer": ["char2_8", "char2_9"], "wizard": ["char3_8", "char3_9"], "cleric": ["char4_8", "char4_9", "char4_14"] }, "rank6": { "swordsman":["char1_11", "char1_12"], "archer": ["char2_10", "char2_11"], "wizard": ["char3_10", "char3_11" , "char3_14"], "cleric": ["char4_10", "char4_11"] }, "rank7": { "swordsman":["char1_13", "char1_14", "char1_15"], "archer": ["char2_12", "char2_13"], "wizard": ["char3_12", "char3_13"], "cleric": ["char4_12", "char4_13"] } }; var skilllist = { "swordsman_thrust": { "id": "1", "ident": "swordsman_thrust", "name": "Thrust", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman0_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_0_0.mp4", "desc": "
[Físico] - [Perfurante]<\/div>Um forte impulso que penetra o alvo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "56", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "8" }, "2": { "#{skillatkadd}#": "71", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "9" }, "3": { "#{skillatkadd}#": "86", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "10" }, "4": { "#{skillatkadd}#": "101", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "11" }, "5": { "#{skillatkadd}#": "116", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "12" }, "6": { "#{skillatkadd}#": "131", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "13" }, "7": { "#{skillatkadd}#": "146", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "14" }, "8": { "#{skillatkadd}#": "161", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "15" }, "9": { "#{skillatkadd}#": "176", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "16" }, "10": { "#{skillatkadd}#": "191", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "17" }, "11": { "#{skillatkadd}#": "206", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "18" }, "12": { "#{skillatkadd}#": "221", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "19" }, "13": { "#{skillatkadd}#": "236", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "20" }, "14": { "#{skillatkadd}#": "251", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "21" }, "15": { "#{skillatkadd}#": "266", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "22" }, } }, "swordsman_bash": { "id": "2", "ident": "swordsman_bash", "name": "Bash", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman0_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_0_1.mp4", "desc": "
[Físico] - [Cortante]<\/div>Um forte ataque que causa um grande dano podendo atingir mais de um inimigo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "6", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "54", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "8" }, "2": { "#{skillatkadd}#": "72", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "9" }, "3": { "#{skillatkadd}#": "90", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "10" }, "4": { "#{skillatkadd}#": "108", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "11" }, "5": { "#{skillatkadd}#": "126", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "12" }, "6": { "#{skillatkadd}#": "144", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "13" }, "7": { "#{skillatkadd}#": "162", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "14" }, "8": { "#{skillatkadd}#": "180", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "15" }, "9": { "#{skillatkadd}#": "198", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "16" }, "10": { "#{skillatkadd}#": "216", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "17" }, "11": { "#{skillatkadd}#": "234", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "18" }, "12": { "#{skillatkadd}#": "252", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "19" }, "13": { "#{skillatkadd}#": "270", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "20" }, "14": { "#{skillatkadd}#": "288", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "21" }, "15": { "#{skillatkadd}#": "306", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "22" }, } }, "swordsman_gungho": { "id": "3", "ident": "swordsman_gungho", "name": "GungHo", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman0_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_0_2.mp4", "desc": "
<\/div>Aumenta o poder de ataque diminuindo a defesa temporariamente.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +8
Defesa Física: -2
Duração: 65 seg.", "#{skillfactor}#": "100", "sp": "7" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +11
Defesa Física: -3
Duração: 70 seg.", "#{skillfactor}#": "100", "sp": "8" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +14
Defesa Física: -3
Duração: 75 seg.", "#{skillfactor}#": "100", "sp": "9" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +17
Defesa Física: -4
Duração: 80 seg.", "#{skillfactor}#": "100", "sp": "10" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +20
Defesa Física: -4
Duração: 85 seg.", "#{skillfactor}#": "100", "sp": "11" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +23
Defesa Física: -5
Duração: 90 seg.", "#{skillfactor}#": "100", "sp": "12" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +26
Defesa Física: -6
Duração: 95 seg.", "#{skillfactor}#": "100", "sp": "13" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +29
Defesa Física: -6
Duração: 100 seg.", "#{skillfactor}#": "100", "sp": "14" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +32
Defesa Física: -7
Duração: 105 seg.", "#{skillfactor}#": "100", "sp": "15" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +35
Defesa Física: -7
Duração: 110 seg.", "#{skillfactor}#": "100", "sp": "16" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +38
Defesa Física: -8
Duração: 115 seg.", "#{skillfactor}#": "100", "sp": "17" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +41
Defesa Física: -9
Duração: 120 seg.", "#{skillfactor}#": "100", "sp": "18" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +44
Defesa Física: -9
Duração: 125 seg.", "#{skillfactor}#": "100", "sp": "19" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +47
Defesa Física: -10
Duração: 130 seg.", "#{skillfactor}#": "100", "sp": "20" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +50
Defesa Física: -10
Duração: 135 seg.", "#{skillfactor}#": "100", "sp": "21" }, } }, "swordsman_concentrate": { "id": "4", "ident": "swordsman_concentrate", "name": "Concentrate", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman0_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_0_3.mp4", "desc": "
<\/div>
Aumenta o poder de dano de habilidades ou a delimitados ataques básicos (dependendo do level da habilidade).

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +5
Número de Golpes: 5
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "11" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +7
Número de Golpes: 7
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "12" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +8
Número de Golpes: 8
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "13" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +10
Número de Golpes: 10
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "14" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +11
Número de Golpes: 11
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "15" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +13
Número de Golpes: 13
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "16" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +14
Número de Golpes: 14
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "17" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +16
Número de Golpes: 16
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "18" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +17
Número de Golpes: 17
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "19" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +19
Número de Golpes: 19
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "20" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +20
Número de Golpes: 20
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "21" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +22
Número de Golpes: 22
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "22" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +23
Número de Golpes: 23
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "23" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +25
Número de Golpes: 25
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "24" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adic.: +26
Número de Golpes: 26
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "25" }, } }, "swordsman_restrain": { "id": "5", "ident": "swordsman_restrain", "name": "Restrain", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman0_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_0_4.mp4", "desc": "
<\/div>
Causa perda do HP máximo, mas faz com que seus ataques tenham um chance de causar atordoamento aos inimigos .

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 4%
HP Máx.: -164 
Duração: 33 seg.", "#{skillfactor}#": "100", "sp": "14" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 8%
HP Máx.: -205 
Duração: 36 seg.", "#{skillfactor}#": "100", "sp": "16" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 12%
HP Máx.: -246 
Duração: 39 seg.", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 16%
HP Máx.: -287 
Duração: 42 seg.", "#{skillfactor}#": "100", "sp": "20" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 20%
HP Máx.: -328 
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "22" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 24%
HP Máx.: -369 
Duração: 48 seg.", "#{skillfactor}#": "100", "sp": "24" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 28%
HP Máx.: -411 
Duração: 51 seg.", "#{skillfactor}#": "100", "sp": "26" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 32%
HP Máx.: -452 
Duração: 54 seg.", "#{skillfactor}#": "100", "sp": "28" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 36%
HP Máx.: -493 
Duração: 57 seg.", "#{skillfactor}#": "100", "sp": "30" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Atordoar o Inimigo: 40%
HP Máx.: -534 
Duração: 60 seg.", "#{skillfactor}#": "100", "sp": "32" }, } }, "swordsman_pommelbeat": { "id": "6", "ident": "swordsman_pommelbeat", "name": "PommelBeat", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman0_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_0_5.mp4", "desc": "
[Físico] - [Contusão]<\/div>
Ataca o inimigo com o cabo da faca. O ataque atordoa o alvo ignorando a defesa para causar mais dano.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "14", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "118", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 25
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "13" }, "2": { "#{skillatkadd}#": "146", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 30
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "15" }, "3": { "#{skillatkadd}#": "174", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 35
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "17" }, "4": { "#{skillatkadd}#": "202", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 40
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "19" }, "5": { "#{skillatkadd}#": "230", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 45
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "21" }, "6": { "#{skillatkadd}#": "258", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 50
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "23" }, "7": { "#{skillatkadd}#": "286", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 55
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "25" }, "8": { "#{skillatkadd}#": "314", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 60
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "27" }, "9": { "#{skillatkadd}#": "342", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 65
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "29" }, "10": { "#{skillatkadd}#": "370", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Ignorada: 70
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "31" }, } }, "swordsman_doubleslash": { "id": "7", "ident": "swordsman_doubleslash", "name": "DoubleSlash", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman0_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_0_6.mp4", "desc": "
[Físico] - [Cortante]<\/div>
Ataca o alvo duas vezes rapidamente.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "21", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "203", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "15" }, "2": { "#{skillatkadd}#": "257", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "17" }, "3": { "#{skillatkadd}#": "311", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "19" }, "4": { "#{skillatkadd}#": "365", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "21" }, "5": { "#{skillatkadd}#": "419", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "23" }, } }, "highlander_wagon-wheel": { "id": "8", "ident": "highlander_wagon-wheel", "name": "Wagon Wheel", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman1_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_1_0.mp4", "desc": "
[Físico] - [Cortante]<\/div>
Golpeia os inimigos com um corte giratório lançando-os ao ar e para trás.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "18", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "165", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "14" }, "2": { "#{skillatkadd}#": "212", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "16" }, "3": { "#{skillatkadd}#": "259", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "306", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "20" }, "5": { "#{skillatkadd}#": "353", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "22" }, "6": { "#{skillatkadd}#": "400", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "24" }, "7": { "#{skillatkadd}#": "447", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "26" }, "8": { "#{skillatkadd}#": "494", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "28" }, "9": { "#{skillatkadd}#": "541", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "30" }, "10": { "#{skillatkadd}#": "588", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "32" }, "11": { "#{skillatkadd}#": "635", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "34" }, "12": { "#{skillatkadd}#": "682", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "36" }, "13": { "#{skillatkadd}#": "729", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "38" }, "14": { "#{skillatkadd}#": "776", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "40" }, "15": { "#{skillatkadd}#": "823", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "42" }, } }, "highlander_cartar-stroke": { "id": "9", "ident": "highlander_cartar-stroke", "name": "Cartar Stroke", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman1_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_1_1.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Junta toda a força para golpear o chão criando uma onda que atinge os inimigos próximos em linha.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "21", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "140", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "15" }, "2": { "#{skillatkadd}#": "166", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "17" }, "3": { "#{skillatkadd}#": "192", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "19" }, "4": { "#{skillatkadd}#": "218", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "21" }, "5": { "#{skillatkadd}#": "244", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "23" }, "6": { "#{skillatkadd}#": "270", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "25" }, "7": { "#{skillatkadd}#": "296", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "27" }, "8": { "#{skillatkadd}#": "322", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "29" }, "9": { "#{skillatkadd}#": "348", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "31" }, "10": { "#{skillatkadd}#": "374", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "33" }, "11": { "#{skillatkadd}#": "400", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "35" }, "12": { "#{skillatkadd}#": "426", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "37" }, "13": { "#{skillatkadd}#": "452", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "39" }, "14": { "#{skillatkadd}#": "478", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "41" }, "15": { "#{skillatkadd}#": "504", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 0.5 seg.", "#{skillfactor}#": "100", "sp": "43" }, } }, "highlander_crown": { "id": "10", "ident": "highlander_crown", "name": "Crown", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman1_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_1_2.mp4", "desc": "
[Físico] - [Golpe]<\/div>Golpeia o inimigo na cabeça", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "124", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 5 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "17" }, "2": { "#{skillatkadd}#": "157", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 7 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "19" }, "3": { "#{skillatkadd}#": "190", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 9 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "21" }, "4": { "#{skillatkadd}#": "223", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 11 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "23" }, "5": { "#{skillatkadd}#": "256", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 13 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "25" }, "6": { "#{skillatkadd}#": "289", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 15 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "27" }, "7": { "#{skillatkadd}#": "322", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 17 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "29" }, "8": { "#{skillatkadd}#": "355", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 19 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "31" }, "9": { "#{skillatkadd}#": "388", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 21 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "33" }, "10": { "#{skillatkadd}#": "421", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 23 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "35" }, "11": { "#{skillatkadd}#": "454", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 25 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "37" }, "12": { "#{skillatkadd}#": "487", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 27 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "39" }, "13": { "#{skillatkadd}#": "520", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 29 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "41" }, "14": { "#{skillatkadd}#": "553", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 31 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "43" }, "15": { "#{skillatkadd}#": "586", "#{skillefect}#": "Dano do Atributo: 0%
[Abalado] Duração: 33 seg. 
Raio de Ataque em Área: 0", "#{skillfactor}#": "100", "sp": "45" }, } }, "highlander_cross-guard": { "id": "11", "ident": "highlander_cross-guard", "name": "Cross Guard", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman1_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_1_3.mp4", "desc": "
<\/div>
Usa sua espada para ficar em posição defensiva.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'Espada 2Mãos', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +3
Bloqueio: +(STR + CharNv x 3 + 45)", "#{skillfactor}#": "100", "sp": "12" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +7
Bloqueio: +(STR + CharNv X 3 + 90)", "#{skillfactor}#": "100", "sp": "14" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +11
Bloqueio: +(STR + CharNv X 3 + 135)", "#{skillfactor}#": "100", "sp": "16" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +15
Bloqueio: +(STR + CharNv X 3 + 180)", "#{skillfactor}#": "100", "sp": "18" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +19
Bloqueio: +(STR + CharNv X 3 + 225)", "#{skillfactor}#": "100", "sp": "20" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +23
Bloqueio: +(STR + CharNv X 3 + 270)", "#{skillfactor}#": "100", "sp": "22" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +27
Bloqueio: +(STR + CharNv X 3 + 315)", "#{skillfactor}#": "100", "sp": "24" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +31
Bloqueio: +(STR + CharNv X 3 + 360)", "#{skillfactor}#": "100", "sp": "26" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +35
Bloqueio: +(STR + CharNv X 3 + 405)", "#{skillfactor}#": "100", "sp": "28" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +39
Bloqueio: +(STR + CharNv X 3 + 450)", "#{skillfactor}#": "100", "sp": "30" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +42
Bloqueio: +(STR + CharNv X 3 + 495)", "#{skillfactor}#": "100", "sp": "32" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +46
Bloqueio: +(STR + CharNv X 3 + 540)", "#{skillfactor}#": "100", "sp": "34" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +50
Bloqueio: +(STR + CharNv X 3 + 585)", "#{skillfactor}#": "100", "sp": "36" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +54
Bloqueio: +(STR + CharNv X 3 + 630)", "#{skillfactor}#": "100", "sp": "38" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: +58
Bloqueio: +(STR + CharNv X 3 + 675)", "#{skillfactor}#": "100", "sp": "40" }, } }, "highlander_moulinet": { "id": "12", "ident": "highlander_moulinet", "name": "Moulinet", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman1_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_1_4.mp4", "desc": "
[Físico] - [Cortante]<\/div>
Golpeia os inimigos com vários cortes frontais.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "151", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "19" }, "2": { "#{skillatkadd}#": "192", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "22" }, "3": { "#{skillatkadd}#": "233", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "25" }, "4": { "#{skillatkadd}#": "274", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "28" }, "5": { "#{skillatkadd}#": "315", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "31" }, "6": { "#{skillatkadd}#": "356", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "34" }, "7": { "#{skillatkadd}#": "397", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "37" }, "8": { "#{skillatkadd}#": "438", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "40" }, "9": { "#{skillatkadd}#": "479", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "43" }, "10": { "#{skillatkadd}#": "520", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "46" }, } }, "highlander_skull-swing": { "id": "13", "ident": "highlander_skull-swing", "name": "Skull Swing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman1_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_1_5.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Golpeia fortemente o crânio do alvo ignorando sua armadura.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "276", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "18" }, "2": { "#{skillatkadd}#": "347", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "20" }, "3": { "#{skillatkadd}#": "418", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "22" }, "4": { "#{skillatkadd}#": "489", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "24" }, "5": { "#{skillatkadd}#": "560", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "26" }, } }, "peltasta_umbo-blow": { "id": "14", "ident": "peltasta_umbo-blow", "name": "Umbo Blow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman2_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_2_0.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Golpeia o inimigo após girar se impulsando com o escudo. Causa mais dano quando usada após bloquear um ataque no inimigo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "12", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "94", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "14" }, "2": { "#{skillatkadd}#": "117", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "16" }, "3": { "#{skillatkadd}#": "140", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "163", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "20" }, "5": { "#{skillatkadd}#": "186", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "22" }, "6": { "#{skillatkadd}#": "209", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "24" }, "7": { "#{skillatkadd}#": "232", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "26" }, "8": { "#{skillatkadd}#": "255", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "28" }, "9": { "#{skillatkadd}#": "278", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "30" }, "10": { "#{skillatkadd}#": "301", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "32" }, "11": { "#{skillatkadd}#": "324", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "34" }, "12": { "#{skillatkadd}#": "347", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "36" }, "13": { "#{skillatkadd}#": "370", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "38" }, "14": { "#{skillatkadd}#": "393", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "40" }, "15": { "#{skillatkadd}#": "416", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "42" }, } }, "peltasta_rim-blow": { "id": "15", "ident": "peltasta_rim-blow", "name": "Rim Blow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman2_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_2_1.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Acerta o inimigo com a ponta de seu escudo. Causa mais dano se o inimigo estiver em estado ", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "12", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "94", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "14" }, "2": { "#{skillatkadd}#": "117", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "16" }, "3": { "#{skillatkadd}#": "140", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "163", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "20" }, "5": { "#{skillatkadd}#": "186", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "22" }, "6": { "#{skillatkadd}#": "209", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "24" }, "7": { "#{skillatkadd}#": "232", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "26" }, "8": { "#{skillatkadd}#": "255", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "28" }, "9": { "#{skillatkadd}#": "278", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "30" }, "10": { "#{skillatkadd}#": "301", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "32" }, "11": { "#{skillatkadd}#": "324", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "34" }, "12": { "#{skillatkadd}#": "347", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "36" }, "13": { "#{skillatkadd}#": "370", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "38" }, "14": { "#{skillatkadd}#": "393", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "40" }, "15": { "#{skillatkadd}#": "416", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "42" }, } }, "peltasta_swash-buckling": { "id": "16", "ident": "peltasta_swash-buckling", "name": "Swash Buckling", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman2_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_2_2.mp4", "desc": "

<\/div>
Atrai os inimigos próximos batendo no escudo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 7
Provocação Máx.: +2 por 30 seg.", "#{skillfactor}#": "100", "sp": "17" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 8
Provocação Máx.: +4 por 30 seg.", "#{skillfactor}#": "100", "sp": "19" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 9
Provocação Máx.: +6 por 30 seg.", "#{skillfactor}#": "100", "sp": "21" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 10
Provocação Máx.: +8 por 30 seg.", "#{skillfactor}#": "100", "sp": "23" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 11
Provocação Máx.: +10 por 30 seg.", "#{skillfactor}#": "100", "sp": "25" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 12
Provocação Máx.: +12 por 30 seg.", "#{skillfactor}#": "100", "sp": "27" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 13
Provocação Máx.: +14 por 30 seg.", "#{skillfactor}#": "100", "sp": "29" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 14
Provocação Máx.: +16 por 30 seg.", "#{skillfactor}#": "100", "sp": "31" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 15
Provocação Máx.: +18 por 30 seg.", "#{skillfactor}#": "100", "sp": "33" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 16
Provocação Máx.: +20 por 30 seg.", "#{skillfactor}#": "100", "sp": "35" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 17
Provocação Máx.: +22 por 30 seg.", "#{skillfactor}#": "100", "sp": "37" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 18
Provocação Máx.: +24 por 30 seg.", "#{skillfactor}#": "100", "sp": "39" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 19
Provocação Máx.: +26 por 30 seg.", "#{skillfactor}#": "100", "sp": "41" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 20
Provocação Máx.: +28 por 30 seg.", "#{skillfactor}#": "100", "sp": "43" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 21
Provocação Máx.: +30 por 30 seg.", "#{skillfactor}#": "100", "sp": "45" }, } }, "peltasta_guardian": { "id": "17", "ident": "peltasta_guardian", "name": "Guardian", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman2_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_2_3.mp4", "desc": "
<\/div>
Reduz o poder de ataque para aumentar a defesa.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +10
Dano Físico: -14
Duração: 65 seg.", "#{skillfactor}#": "100", "sp": "12" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +12
Dano Físico: -17
Duração: 70 seg.", "#{skillfactor}#": "100", "sp": "14" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +13
Dano Físico: -21
Duração: 75 seg.", "#{skillfactor}#": "100", "sp": "16" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +15
Dano Físico: -24
Duração: 80 seg.", "#{skillfactor}#": "100", "sp": "18" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +17
Dano Físico: -28
Duração: 85 seg.", "#{skillfactor}#": "100", "sp": "20" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +19
Dano Físico: -31
Duração: 90 seg.", "#{skillfactor}#": "100", "sp": "22" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +21
Dano Físico: -35
Duração: 95 seg.", "#{skillfactor}#": "100", "sp": "24" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +22
Dano Físico: -38
Duração: 100 seg.", "#{skillfactor}#": "100", "sp": "26" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +24
Dano Físico: -42
Duração: 105 seg.", "#{skillfactor}#": "100", "sp": "28" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +26
Dano Físico: -45
Duração: 110 seg.", "#{skillfactor}#": "100", "sp": "30" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +28
Dano Físico: -49
Duração: 115 seg.", "#{skillfactor}#": "100", "sp": "32" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +30
Dano Físico: -52
Duração: 120 seg.", "#{skillfactor}#": "100", "sp": "34" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +31
Dano Físico: -56
Duração: 125 seg.", "#{skillfactor}#": "100", "sp": "36" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +33
Dano Físico: -59
Duração: 130 seg.", "#{skillfactor}#": "100", "sp": "38" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +35
Dano Físico: -63
Duração: 135 seg.", "#{skillfactor}#": "100", "sp": "40" }, } }, "peltasta_shield-lob": { "id": "18", "ident": "peltasta_shield-lob", "name": "Shield Lob", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman2_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_2_4.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Lança o escudo contra os inimigos deferindo um grande dano na área onde ele cair. O escudo ficará no chão até que seja pego, caso contrário ele desaparecerá.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "54", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "168", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "14" }, "2": { "#{skillatkadd}#": "227", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "16" }, "3": { "#{skillatkadd}#": "286", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "345", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "20" }, "5": { "#{skillatkadd}#": "404", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "22" }, "6": { "#{skillatkadd}#": "463", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "24" }, "7": { "#{skillatkadd}#": "522", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "26" }, "8": { "#{skillatkadd}#": "581", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "28" }, "9": { "#{skillatkadd}#": "640", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "30" }, "10": { "#{skillatkadd}#": "699", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "32" }, } }, "peltasta_high-guard": { "id": "19", "ident": "peltasta_high-guard", "name": "High Guard", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/Peltasta_HighGuard.jpg", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_2_5.mp4", "desc": "
<\/div>
Aumenta a taxa de bloqueio e resistência a crítico, mas reduz o poder de ataque.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +150
Ataque: -50%
Chance de Crítico: -10
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "17" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +160
Ataque: -50%
Chance de Crítico: -20
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "19" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +170
Ataque: -50%
Chance de Crítico: -30
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "21" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +180
Ataque: -50%
Chance de Crítico: -40
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "23" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +190
Ataque: -50%
Chance de Crítico: -50
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "25" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +200
Ataque: -50%
Chance de Crítico: -60
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "27" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +210
Ataque: -50%
Chance de Crítico: -70
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "29" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +220
Ataque: -50%
Chance de Crítico: -80
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "31" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +230
Ataque: -50%
Chance de Crítico: -90
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "33" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +240
Ataque: -50%
Chance de Crítico: -100
Duração: 30 seg.", "#{skillfactor}#": "100", "sp": "35" }, } }, "peltasta_butterfly": { "id": "20", "ident": "peltasta_butterfly", "name": "Butterfly", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman2_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_2_6.mp4", "desc": "
[Físico] - [Cortante]<\/div>
Ataque contínuo usando a arma e o escudo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "258", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "14" }, "2": { "#{skillatkadd}#": "326", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "16" }, "3": { "#{skillatkadd}#": "394", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "462", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "20" }, "5": { "#{skillatkadd}#": "530", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "22" }, } }, "hoplite_stabbing": { "id": "21", "ident": "hoplite_stabbing", "name": "Stabbing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman3_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_3_0.mp4", "desc": "
[Físico] - [Perfuração]<\/div>
Ataca o inimigo (estocando) inúmeras vezes com sua lança.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "61", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "19" }, "2": { "#{skillatkadd}#": "80", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "22" }, "3": { "#{skillatkadd}#": "99", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "25" }, "4": { "#{skillatkadd}#": "118", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "28" }, "5": { "#{skillatkadd}#": "137", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "31" }, "6": { "#{skillatkadd}#": "156", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "34" }, "7": { "#{skillatkadd}#": "175", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "37" }, "8": { "#{skillatkadd}#": "194", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "40" }, "9": { "#{skillatkadd}#": "213", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "43" }, "10": { "#{skillatkadd}#": "232", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "46" }, "11": { "#{skillatkadd}#": "251", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "49" }, "12": { "#{skillatkadd}#": "270", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "52" }, "13": { "#{skillatkadd}#": "289", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "55" }, "14": { "#{skillatkadd}#": "308", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "58" }, "15": { "#{skillatkadd}#": "327", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "61" }, } }, "hoplite_pierce": { "id": "22", "ident": "hoplite_pierce", "name": "Pierce", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman3_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_3_1.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Desfere um golpe poderoso no inimigo. O tamanho do inimigo determinará quantas vezes seguidas a habilidade o acertará.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "174", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "18" }, "2": { "#{skillatkadd}#": "217", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "20" }, "3": { "#{skillatkadd}#": "260", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "22" }, "4": { "#{skillatkadd}#": "303", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "24" }, "5": { "#{skillatkadd}#": "346", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "26" }, "6": { "#{skillatkadd}#": "389", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "28" }, "7": { "#{skillatkadd}#": "432", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "30" }, "8": { "#{skillatkadd}#": "475", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "32" }, "9": { "#{skillatkadd}#": "518", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "34" }, "10": { "#{skillatkadd}#": "561", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "36" }, "11": { "#{skillatkadd}#": "604", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "38" }, "12": { "#{skillatkadd}#": "647", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "40" }, "13": { "#{skillatkadd}#": "690", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "42" }, "14": { "#{skillatkadd}#": "733", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "44" }, "15": { "#{skillatkadd}#": "776", "#{skillefect}#": "Dano do Atributo: 0%
Alvos do Tipo Médio: 2 ataques consecutivos
Alvos do Tipo Grande: 3 ataques consecutivos", "#{skillfactor}#": "100", "sp": "46" }, } }, "hoplite_finestra": { "id": "23", "ident": "hoplite_finestra", "name": "Finestra", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman3_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_3_2.mp4", "desc": "
<\/div>
Muda a posição que você segura a lança, aumentando sua taxa de crítico mas reduzindo sua evasão.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'Lança 1MãoLança 2MãosEscudoAdagaPistola', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +10
Bloqueio: +2% 
Evasão: -8
Duração: 33 seg.", "#{skillfactor}#": "100", "sp": "21" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +20
Bloqueio: +4% 
Evasão: -11
Duração: 36 seg.", "#{skillfactor}#": "100", "sp": "24" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +30
Bloqueio: +6% 
Evasão: -13
Duração: 39 seg.", "#{skillfactor}#": "100", "sp": "27" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +40
Bloqueio: +8% 
Evasão: -15
Duração: 42 seg.", "#{skillfactor}#": "100", "sp": "30" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +50
Bloqueio: +10% 
Evasão: -17
Duração: 45 seg.", "#{skillfactor}#": "100", "sp": "33" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +60
Bloqueio: +12% 
Evasão: -19
Duração: 48 seg.", "#{skillfactor}#": "100", "sp": "36" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +70
Bloqueio: +14% 
Evasão: -22
Duração: 51 seg.", "#{skillfactor}#": "100", "sp": "39" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +80
Bloqueio: +16% 
Evasão: -24
Duração: 54 seg.", "#{skillfactor}#": "100", "sp": "42" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +90
Bloqueio: +18% 
Evasão: -26
Duração: 57 seg.", "#{skillfactor}#": "100", "sp": "45" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +100
Bloqueio: +20% 
Evasão: -28
Duração: 60 seg.", "#{skillfactor}#": "100", "sp": "48" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +110
Bloqueio: +22% 
Evasão: -30
Duração: 63 seg.", "#{skillfactor}#": "100", "sp": "51" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +120
Bloqueio: +24% 
Evasão: -33
Duração: 66 seg.", "#{skillfactor}#": "100", "sp": "54" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +130
Bloqueio: +26% 
Evasão: -35
Duração: 69 seg.", "#{skillfactor}#": "100", "sp": "57" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +140
Bloqueio: +28% 
Evasão: -37
Duração: 72 seg.", "#{skillfactor}#": "100", "sp": "60" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +150
Bloqueio: +30% 
Evasão: -39
Duração: 75 seg.", "#{skillfactor}#": "100", "sp": "63" }, } }, "hoplite_synchro-thrusting": { "id": "24", "ident": "hoplite_synchro-thrusting", "name": "Synchro Thrusting", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman3_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_3_3.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Ataca o inimigo com a lança e o escudo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'Lança 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "151", "#{skillefect}#": "Ataque com Lança: 181
Ataque com Escudo: (Escudo DEF X 5 + 181)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "183", "#{skillefect}#": "Ataque com Lança: 220
Ataque com Escudo: (Escudo DEF X 5 + 220)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "23" }, "3": { "#{skillatkadd}#": "215", "#{skillefect}#": "Ataque com Lança: 259
Ataque com Escudo: (Escudo DEF X 5 + 259)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "26" }, "4": { "#{skillatkadd}#": "247", "#{skillefect}#": "Ataque com Lança: 297
Ataque com Escudo: (Escudo DEF X 5 + 297)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "29" }, "5": { "#{skillatkadd}#": "279", "#{skillefect}#": "Ataque com Lança: 336
Ataque com Escudo: (Escudo DEF X 5 + 336)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "32" }, "6": { "#{skillatkadd}#": "311", "#{skillefect}#": "Ataque com Lança: 375
Ataque com Escudo: (Escudo DEF X 5 + 375)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "35" }, "7": { "#{skillatkadd}#": "343", "#{skillefect}#": "Ataque com Lança: 414
Ataque com Escudo: (Escudo DEF X 5 + 414)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "38" }, "8": { "#{skillatkadd}#": "375", "#{skillefect}#": "Ataque com Lança: 453
Ataque com Escudo: (Escudo DEF X 5 + 453)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "41" }, "9": { "#{skillatkadd}#": "407", "#{skillefect}#": "Ataque com Lança: 491
Ataque com Escudo: (Escudo DEF X 5 + 491)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "44" }, "10": { "#{skillatkadd}#": "439", "#{skillefect}#": "
Ataque com Lança: 530
Ataque com Escudo: (Escudo DEF X 5 + 530)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "47" }, "11": { "#{skillatkadd}#": "471", "#{skillefect}#": "Ataque com Lança: 569
Ataque com Escudo: (Escudo DEF X 5 + 569)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "50" }, "12": { "#{skillatkadd}#": "503", "#{skillefect}#": "Ataque com Lança: 608
Ataque com Escudo: (Escudo DEF X 5 + 608)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "53" }, "13": { "#{skillatkadd}#": "535", "#{skillefect}#": "Ataque com Lança: 646
Ataque com Escudo: (Escudo DEF X 5 + 646)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "56" }, "14": { "#{skillatkadd}#": "567", "#{skillefect}#": "Ataque com Lança: 685
Ataque com Escudo: (Escudo DEF X 5 + 685)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "59" }, "15": { "#{skillatkadd}#": "599", "#{skillefect}#": "Ataque com Lança: 724
Ataque com Escudo: (Escudo DEF X 5 + 724)
Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "62" }, } }, "hoplite_long-stride": { "id": "25", "ident": "hoplite_long-stride", "name": "Long Stride", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman3_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_3_4.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Salta a área designada, danificando todos inimigos em volta.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "59", "element": "none", "reqstance": 'Lança 1MãoLança 2MãosEscudoAdagaPistola', "levellist": { "1": { "#{skillatkadd}#": "290", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "24" }, "2": { "#{skillatkadd}#": "357", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "424", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "491", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "33" }, "5": { "#{skillatkadd}#": "558", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "625", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "39" }, "7": { "#{skillatkadd}#": "692", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "42" }, "8": { "#{skillatkadd}#": "759", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "45" }, "9": { "#{skillatkadd}#": "826", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "48" }, "10": { "#{skillatkadd}#": "893", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "51" }, } }, "hoplite_spear-throw": { "id": "26", "ident": "hoplite_spear-throw", "name": "Spear Throw", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman3_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_3_5.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Amerresa a lança no alvo causando dano com o acerto. A lança desaparecerá durante um curto tempo e reaparecerá.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "54", "element": "none", "reqstance": 'Lança 1MãoLança 2MãosEscudoAdagaPistola', "levellist": { "1": { "#{skillatkadd}#": "471", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "25" }, "2": { "#{skillatkadd}#": "571", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "28" }, "3": { "#{skillatkadd}#": "671", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "771", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "871", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "37" }, } }, "barbarian_embowel": { "id": "27", "ident": "barbarian_embowel", "name": "Embowel", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman4_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_4_0.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Apunhala o inimigo depois o chuta lançando-o para trás.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "174", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "19" }, "2": { "#{skillatkadd}#": "216", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "21" }, "3": { "#{skillatkadd}#": "258", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "23" }, "4": { "#{skillatkadd}#": "300", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "25" }, "5": { "#{skillatkadd}#": "342", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "27" }, "6": { "#{skillatkadd}#": "384", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "29" }, "7": { "#{skillatkadd}#": "426", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "31" }, "8": { "#{skillatkadd}#": "468", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "33" }, "9": { "#{skillatkadd}#": "510", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "35" }, "10": { "#{skillatkadd}#": "552", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "37" }, "11": { "#{skillatkadd}#": "594", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "39" }, "12": { "#{skillatkadd}#": "636", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "41" }, "13": { "#{skillatkadd}#": "678", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "43" }, "14": { "#{skillatkadd}#": "720", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "45" }, "15": { "#{skillatkadd}#": "762", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "47" }, } }, "barbarian_frenzy": { "id": "28", "ident": "barbarian_frenzy", "name": "Frenzy", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman4_1.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_4_1.mp4", "desc": "
<\/div>
Quando o Frenesi estiver ativado, seu poder de ataque aumenta com constantes ataques básico à um alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "72", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +11
Acúmulos Máx.: 2
Duração: 32 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +12
Acúmulos Máx.: 4
Duração: 34 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +13
Acúmulos Máx.: 6
Duração: 36 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +14
Acúmulos Máx.: 8
Duração: 38 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +15
Acúmulos Máx.: 10
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +16
Acúmulos Máx.: 12
Duração: 42 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +17
Acúmulos Máx.: 14
Duração: 44 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +18
Acúmulos Máx.: 16
Duração: 46 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +19
Acúmulos Máx.: 18
Duração: 48 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +20
Acúmulos Máx.: 20
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "51" }, } }, "barbarian_helm-chopper": { "id": "29", "ident": "barbarian_helm-chopper", "name": "Helm Chopper", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/helmchopper.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Físico] - [Golpe]<\/div>Um balanço vertical que aponta para a cabeça do inimigo, causando dois golpes. Acertando com sucesso os inimigos com a habilidade, atordoa eles por dois segundos", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "24", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "283", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "18" }, "2": { "#{skillatkadd}#": "366", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "20" }, "3": { "#{skillatkadd}#": "449", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "22" }, "4": { "#{skillatkadd}#": "532", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "24" }, "5": { "#{skillatkadd}#": "615", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "26" }, "6": { "#{skillatkadd}#": "698", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "28" }, "7": { "#{skillatkadd}#": "781", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "30" }, "8": { "#{skillatkadd}#": "864", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "32" }, "9": { "#{skillatkadd}#": "947", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "34" }, "10": { "#{skillatkadd}#": "1030", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "36" }, "11": { "#{skillatkadd}#": "1113", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "38" }, "12": { "#{skillatkadd}#": "1196", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "40" }, "13": { "#{skillatkadd}#": "1279", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "42" }, "14": { "#{skillatkadd}#": "1362", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "44" }, "15": { "#{skillatkadd}#": "1445", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "46" }, } }, "barbarian_cleave": { "id": "30", "ident": "barbarian_cleave", "name": "Cleave", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/cleave.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Físico] - [Cortante]<\/div>Um corte circular que fende os inimigos a frente. Acertando com sucesso o inimigo aumento da taxa de crítico em 50% sobre o alvo por 5 segundos .", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "21", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "272", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "19" }, "2": { "#{skillatkadd}#": "350", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "22" }, "3": { "#{skillatkadd}#": "428", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "25" }, "4": { "#{skillatkadd}#": "506", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "28" }, "5": { "#{skillatkadd}#": "584", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "31" }, "6": { "#{skillatkadd}#": "662", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "34" }, "7": { "#{skillatkadd}#": "740", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "37" }, "8": { "#{skillatkadd}#": "818", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "40" }, "9": { "#{skillatkadd}#": "896", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "43" }, "10": { "#{skillatkadd}#": "974", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "46" }, "11": { "#{skillatkadd}#": "1052", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "49" }, "12": { "#{skillatkadd}#": "1130", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "52" }, "13": { "#{skillatkadd}#": "1208", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "55" }, "14": { "#{skillatkadd}#": "1286", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "58" }, "15": { "#{skillatkadd}#": "1364", "#{skillefect}#": "Dano do Atributo: 0%
+50 Critical Rate
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "61" }, } }, "barbarian_warcry": { "id": "31", "ident": "barbarian_warcry", "name": "Warcry", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman4_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_4_4.mp4", "desc": "
<\/div>
Reduz a armadura dos inimigos próximos e aumenta seu ataque de acordo com a quantidade de armaduras que reduzir.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "82", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -10
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -12
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "25" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -14
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -16
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -19
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -21
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -23
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -26
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -28
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Máx. Defesa Física: -30
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "49" }, } }, "rodelero_shield-charge": { "id": "32", "ident": "rodelero_shield-charge", "name": "Shield Charge", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman5_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_5_0.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Corre empunhando o escudo a frente. Os inimigos que estiverem no caminho receberão dano e serão empurrados.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "81", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "139", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "160", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "181", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "29" }, "4": { "#{skillatkadd}#": "202", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "223", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "35" }, "6": { "#{skillatkadd}#": "244", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "38" }, "7": { "#{skillatkadd}#": "265", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "41" }, "8": { "#{skillatkadd}#": "286", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "44" }, "9": { "#{skillatkadd}#": "307", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "47" }, "10": { "#{skillatkadd}#": "328", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "50" }, "11": { "#{skillatkadd}#": "349", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "53" }, "12": { "#{skillatkadd}#": "370", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "56" }, "13": { "#{skillatkadd}#": "391", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "59" }, "14": { "#{skillatkadd}#": "412", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "62" }, "15": { "#{skillatkadd}#": "433", "#{skillefect}#": "Dano do Atributo: %
Máx. Duração: 5 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "65" }, } }, "barbarian_stomping-kick": { "id": "33", "ident": "barbarian_stomping-kick", "name": "Stomping Kick", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman4_5.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_4_5.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Pula em direção a uma área determinada e causa danos aos inimigos devido ao pouso violento.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "36", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "183", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "227", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "23" }, "3": { "#{skillatkadd}#": "271", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "26" }, "4": { "#{skillatkadd}#": "315", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "29" }, "5": { "#{skillatkadd}#": "359", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "32" }, "6": { "#{skillatkadd}#": "403", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "35" }, "7": { "#{skillatkadd}#": "447", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "38" }, "8": { "#{skillatkadd}#": "491", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "41" }, "9": { "#{skillatkadd}#": "535", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "44" }, "10": { "#{skillatkadd}#": "579", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "47" }, "11": { "#{skillatkadd}#": "623", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "50" }, "12": { "#{skillatkadd}#": "667", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "53" }, "13": { "#{skillatkadd}#": "711", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "56" }, "14": { "#{skillatkadd}#": "755", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "59" }, "15": { "#{skillatkadd}#": "799", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "62" }, } }, "barbarian_giantswing": { "id": "34", "ident": "barbarian_giantswing", "name": "GiantSwing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman4_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_4_6.mp4", "desc": "
<\/div>
Segura o inimigo com uma corda o girando em torno de si, arremessando-o e causando dano no fim.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "291", "#{skillefect}#": "Gira 9 vezes
Distância de Arremesso: 150", "#{skillfactor}#": "100", "sp": "24" }, "2": { "#{skillatkadd}#": "366", "#{skillefect}#": "Gira 9 vezes
Distância de Arremesso: 150", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "441", "#{skillefect}#": "Gira 9 vezes
Distância de Arremesso: 150", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "516", "#{skillefect}#": "Gira 9 vezes
Distância de Arremesso: 150", "#{skillfactor}#": "100", "sp": "33" }, "5": { "#{skillatkadd}#": "591", "#{skillefect}#": "Gira 9 vezes
Distância de Arremesso: 150", "#{skillfactor}#": "100", "sp": "36" }, } }, "barbarian_pouncing": { "id": "35", "ident": "barbarian_pouncing", "name": "Pouncing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman4_7.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_4_7.mp4", "desc": "
[Físico] - [Cortante]<\/div>
Corre em uma direção atacando todos os inimigos pela frente.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "81", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "243", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "25" }, "2": { "#{skillatkadd}#": "305", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "28" }, "3": { "#{skillatkadd}#": "367", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "429", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.
Consume Stamina", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "491", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "37" }, } }, "rodelero_montano": { "id": "36", "ident": "rodelero_montano", "name": "Montano", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman5_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_5_1.mp4", "desc": "
[Físico] - [Cortante]<\/div>
Golpeia um inimigo com força tremenda. O inimigo ficará atordoado por alguns segundos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "272", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "338", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "25" }, "3": { "#{skillatkadd}#": "404", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "470", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "31" }, "5": { "#{skillatkadd}#": "536", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "34" }, "6": { "#{skillatkadd}#": "602", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "37" }, "7": { "#{skillatkadd}#": "668", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "40" }, "8": { "#{skillatkadd}#": "734", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "43" }, "9": { "#{skillatkadd}#": "800", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "46" }, "10": { "#{skillatkadd}#": "866", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "49" }, "11": { "#{skillatkadd}#": "932", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "52" }, "12": { "#{skillatkadd}#": "998", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "55" }, "13": { "#{skillatkadd}#": "1064", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "58" }, "14": { "#{skillatkadd}#": "1130", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "61" }, "15": { "#{skillatkadd}#": "1196", "#{skillefect}#": "Dano do Atributo: %
[Atordoar] Duração: 1 seg.", "#{skillfactor}#": "100", "sp": "64" }, } }, "rodelero_targe-smash": { "id": "37", "ident": "rodelero_targe-smash", "name": "Targe Smash", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman5_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_5_2.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Golpeia o chão com força tremenda criando uma onda de choque que causa danos aos inimigos próximos. Há grande chance dos inimigos ficarem atordoados.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "45", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "292", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "24" }, "2": { "#{skillatkadd}#": "368", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "444", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "520", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "33" }, "5": { "#{skillatkadd}#": "596", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "672", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "39" }, "7": { "#{skillatkadd}#": "748", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "42" }, "8": { "#{skillatkadd}#": "824", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "45" }, "9": { "#{skillatkadd}#": "900", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "48" }, "10": { "#{skillatkadd}#": "976", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "51" }, "11": { "#{skillatkadd}#": "1052", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "54" }, "12": { "#{skillatkadd}#": "1128", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "57" }, "13": { "#{skillatkadd}#": "1204", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "60" }, "14": { "#{skillatkadd}#": "1280", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "63" }, "15": { "#{skillatkadd}#": "1356", "#{skillefect}#": "Dano do Atributo: 0%
[Cegueira] Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "66" }, } }, "rodelero_shield-push": { "id": "38", "ident": "rodelero_shield-push", "name": "Shield Push", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman5_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_5_3.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Obstrui as ações do alvo com seu escudo. O alvo ficará com status ", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "45", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "143", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -15
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "174", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -30
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "205", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -45
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "29" }, "4": { "#{skillatkadd}#": "236", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -60
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "267", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -75
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "6": { "#{skillatkadd}#": "298", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -90
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "7": { "#{skillatkadd}#": "329", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -105
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "8": { "#{skillatkadd}#": "360", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -120
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "9": { "#{skillatkadd}#": "391", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -135
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "10": { "#{skillatkadd}#": "422", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -150
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "11": { "#{skillatkadd}#": "453", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -165
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "12": { "#{skillatkadd}#": "484", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -180
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "13": { "#{skillatkadd}#": "515", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -195
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "14": { "#{skillatkadd}#": "546", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -210
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "15": { "#{skillatkadd}#": "577", "#{skillefect}#": "Dano do Atributo: 0%
Defense: -225
[Desequilibrado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "65" }, } }, "rodelero_slithering": { "id": "39", "ident": "rodelero_slithering", "name": "Slithering", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman5_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_5_4.mp4", "desc": "

[Físico] - [Cortante]<\/div>
Abaixa o escudo avançando em forma defensiva para causar dano surpresa.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "80", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "361", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "25" }, "2": { "#{skillatkadd}#": "442", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "28" }, "3": { "#{skillatkadd}#": "523", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "604", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "685", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "6": { "#{skillatkadd}#": "766", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "7": { "#{skillatkadd}#": "847", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "8": { "#{skillatkadd}#": "928", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "9": { "#{skillatkadd}#": "1009", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "10": { "#{skillatkadd}#": "1090", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "52" }, } }, "rodelero_shootingstar": { "id": "40", "ident": "rodelero_shootingstar", "name": "Shootingstar", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman5_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_5_5.mp4", "desc": "
[Físico] - [Penetrante]<\/div>O inimigo é alvo de contínuos ataques usando espada e escudo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'Espada 1MãoEscudo', "levellist": { "1": { "#{skillatkadd}#": "612", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "26" }, "2": { "#{skillatkadd}#": "750", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "29" }, "3": { "#{skillatkadd}#": "888", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "32" }, "4": { "#{skillatkadd}#": "1026", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "1164", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "38" }, } }, "cataphract_impaler": { "id": "41", "ident": "cataphract_impaler", "name": "Impaler", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman6_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_6_0.mp4", "desc": "
[Físico] - [Penetrante]<\/div>Carrega um inimigo de porte pequeno empalado em sua lança. Você poderá usá-lo para batê-lo contra o chão e golpear outros inimigos.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "72", "element": "none", "reqstance": 'Lança 1MãoLança 2MãosEscudoAdagaPistola', "levellist": { "1": { "#{skillatkadd}#": "222", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "271", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "25" }, "3": { "#{skillatkadd}#": "320", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "369", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "31" }, "5": { "#{skillatkadd}#": "418", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "34" }, "6": { "#{skillatkadd}#": "467", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "37" }, "7": { "#{skillatkadd}#": "516", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "40" }, "8": { "#{skillatkadd}#": "565", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "43" }, "9": { "#{skillatkadd}#": "614", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "46" }, "10": { "#{skillatkadd}#": "663", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "49" }, "11": { "#{skillatkadd}#": "712", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "52" }, "12": { "#{skillatkadd}#": "761", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "55" }, "13": { "#{skillatkadd}#": "810", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "58" }, "14": { "#{skillatkadd}#": "859", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "61" }, "15": { "#{skillatkadd}#": "908", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "64" }, } }, "cataphract_earthwave": { "id": "42", "ident": "cataphract_earthwave", "name": "EarthWave", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman6_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_6_1.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Golpeia o chão com força tremenda acertando todos os inimigos em volta.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "43", "element": "none", "reqstance": 'Lança 1MãoLança 2MãosEscudoAdagaPistola', "levellist": { "1": { "#{skillatkadd}#": "305", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "24" }, "2": { "#{skillatkadd}#": "370", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "435", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "500", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "33" }, "5": { "#{skillatkadd}#": "565", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "630", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "39" }, "7": { "#{skillatkadd}#": "695", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "42" }, "8": { "#{skillatkadd}#": "760", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "45" }, "9": { "#{skillatkadd}#": "825", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "48" }, "10": { "#{skillatkadd}#": "890", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "51" }, "11": { "#{skillatkadd}#": "955", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "54" }, "12": { "#{skillatkadd}#": "1020", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "57" }, "13": { "#{skillatkadd}#": "1085", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "60" }, "14": { "#{skillatkadd}#": "1150", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "63" }, "15": { "#{skillatkadd}#": "1215", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "66" }, } }, "cataphract_trot": { "id": "43", "ident": "cataphract_trot", "name": "Trot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman6_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_6_2.mp4", "desc": "
<\/div>
Aumenta a velocidade de movimento.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "81", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +6
Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +7
Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +8
Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "29" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +9
Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +10
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +11
Duração: 32 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +12
Duração: 34 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +13
Duração: 36 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +14
Duração: 38 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +15
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +16
Duração: 42 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +17
Duração: 44 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +18
Duração: 46 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +19
Duração: 48 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +20
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "65" }, } }, "cataphract_steedcharge": { "id": "44", "ident": "cataphract_steedcharge", "name": "SteedCharge", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman6_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_6_3.mp4", "desc": "
<\/div>
Faz com que você avance rapidamente em linha reta efetuando um ataque no final.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "33", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "307", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "380", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "25" }, "3": { "#{skillatkadd}#": "453", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "526", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "31" }, "5": { "#{skillatkadd}#": "599", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "34" }, "6": { "#{skillatkadd}#": "672", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "37" }, "7": { "#{skillatkadd}#": "745", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "40" }, "8": { "#{skillatkadd}#": "818", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "43" }, "9": { "#{skillatkadd}#": "891", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "46" }, "10": { "#{skillatkadd}#": "964", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "49" }, "11": { "#{skillatkadd}#": "1037", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "52" }, "12": { "#{skillatkadd}#": "1110", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "55" }, "13": { "#{skillatkadd}#": "1183", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "58" }, "14": { "#{skillatkadd}#": "1256", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "61" }, "15": { "#{skillatkadd}#": "1329", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "64" }, } }, "cataphract_doomspike": { "id": "45", "ident": "cataphract_doomspike", "name": "DoomSpike", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman6_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_6_4.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Golpeia os inimigos com uma poderosa estocada.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "62", "element": "none", "reqstance": 'Lança 1MãoLança 2MãosEscudoAdagaPistola', "levellist": { "1": { "#{skillatkadd}#": "461", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "25" }, "2": { "#{skillatkadd}#": "560", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "28" }, "3": { "#{skillatkadd}#": "659", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "758", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "857", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "37" }, "6": { "#{skillatkadd}#": "956", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "40" }, "7": { "#{skillatkadd}#": "1055", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "43" }, "8": { "#{skillatkadd}#": "1154", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "46" }, "9": { "#{skillatkadd}#": "1253", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "49" }, "10": { "#{skillatkadd}#": "1352", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "52" }, } }, "cataphract_rush": { "id": "46", "ident": "cataphract_rush", "name": "Rush", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman6_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_6_5.mp4", "desc": "
[Físico] - [Cortante]<\/div>
Gira sua lança acima da cabeça acertando todos os inimigos em volta.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "270", "element": "none", "reqstance": 'Lança 1MãoLança 2MãosEscudoAdagaPistola', "levellist": { "1": { "#{skillatkadd}#": "302", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "26" }, "2": { "#{skillatkadd}#": "356", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "30" }, "3": { "#{skillatkadd}#": "410", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "34" }, "4": { "#{skillatkadd}#": "464", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "38" }, "5": { "#{skillatkadd}#": "518", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.
Raio de Ataque em Área: 3
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "42" }, } }, "squire_weaponmaintenance": { "id": "47", "ident": "squire_weaponmaintenance", "name": "WeaponMaintenance", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman7_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_7_0.mp4", "desc": "
<\/div>
Cria uma loja temporária onde é possível aprimorar armas. Armas aprimoradas por Escudeiros contêm bônus de ataque.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (2750 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (3000 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (3250 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (3500 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (3750 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (4000 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (4250 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (4500 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (4750 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (5000 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (5250 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (5500 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (5750 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (6000 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o ataque igual a [Skill Nv. + 1] x [Nº de Estrelas na Arma]
Contagem de Ataque: (6250 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, } }, "squire_armormaintenance": { "id": "48", "ident": "squire_armormaintenance", "name": "ArmorMaintenance", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman7_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_7_1.mp4", "desc": "
<\/div>
Cria uma loja temporária onde é possível aprimorar armaduras. Armaduras aprimoradas por um Escudeiro contêm bonus de defesa.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +1
Número de Tentantivas: (550 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +2
Número de Tentantivas: (600 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +3
Número de Tentantivas: (650 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +4
Número de Tentantivas: (700 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +5
Número de Tentantivas: (750 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +6
Número de Tentantivas: (800 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +7
Número de Tentantivas: (850 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +8
Número de Tentantivas: (900 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +9
Número de Tentantivas: (950 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +10
Número de Tentantivas: (1000 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +11
Número de Tentantivas: (1050 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +12
Número de Tentantivas: (1100 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +13
Número de Tentantivas: (1150 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +14
Número de Tentantivas: (1200 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Física: +15
Número de Tentantivas: (1250 + INT)
Duração: 1 hr", "#{skillfactor}#": "100", "sp": "0" }, } }, "squire_repair": { "id": "49", "ident": "squire_repair", "name": "Repair", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman7_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_7_2.mp4", "desc": "
<\/div>
Cria uma loja temporária onde é possível reparar armas e armaduras. Reparações feitas por um Escudeira faz com que a durabilidade máxima seja extendida.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 1 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 2 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 3 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 4 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 5 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 6 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 7 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 8 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 9 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 10 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 11 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 12 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 13 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 14 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Repara mais 15 durabilidade", "#{skillfactor}#": "100", "sp": "0" }, } }, "squire_arrest": { "id": "50", "ident": "squire_arrest", "name": "Arrest", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman7_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_7_3.mp4", "desc": "
<\/div>
Prende o alvo com uma corda, incapacitando-o durante todo o tempo de carregamento da habilidade..

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "52", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 2
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 3
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 4
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 5
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 6
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 7
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 8
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 9
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 10
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 11
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 12
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 13
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 14
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 15
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 16
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "86" }, } }, "squire_base-camp": { "id": "51", "ident": "squire_base-camp", "name": "Base Camp", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman7_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_7_4.mp4", "desc": "
<\/div>
Cria um acampamento que pode ser usado como armazenamento de itens e etc.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "21600", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 1.5 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 2 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 2.5 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "43" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 3 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "47" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 3.5 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "51" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 4 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "55" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 4.5 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "59" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 5 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "63" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 5.5 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "67" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 6 hrs
Duração dos efeitos dos alimentos é de pelo menos 30 min.", "#{skillfactor}#": "100", "sp": "71" }, } }, "squire_refreshment-table": { "id": "52", "ident": "squire_refreshment-table", "name": "Refreshment Table", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman7_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_7_5.mp4", "desc": "
<\/div>
Cria uma mesa contendo comida. A mesa deve ser criada em uma área próxima ao acampamento. Uma vez que o acampamento seja encerrado, a mesa desaparecerá também.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "600", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "32" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "36" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "40" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "44" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "48" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "52" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "56" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "60" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "64" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta a eficácia de alimentos por nível de habilidade.", "#{skillfactor}#": "100", "sp": "68" }, } }, "corsair_jolly-roger": { "id": "53", "ident": "corsair_jolly-roger", "name": "Jolly Roger", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman8_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_8_0.mp4", "desc": "
<\/div>
Coloca uma bandeira (Jolly Roger) no chão. Todos os ataques feitos numa área próxima entram num sistema de combos. Variações e sequências de ataque faz com que um dano bônus seja recebido por todo o grupo ", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "16", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 100 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 110 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 120 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 130 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 140 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 150 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 160 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Bandeira Duração: 170 Seg.", "#{skillfactor}#": "100", "sp": "86" }, } }, "corsair_iron-hook": { "id": "54", "ident": "corsair_iron-hook", "name": "Iron Hook", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman8_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_8_1.mp4", "desc": "

<\/div>
Arremesa um gancho no alvo que imobiliza-o durante certo tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 5 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 6 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 7 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 8 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 9 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 10 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 11 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 12 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 13 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 14 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 15 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 16 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 17 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 18 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Captura: 19 Seg.", "#{skillfactor}#": "100", "sp": "69" }, } }, "corsair_keel-hauling": { "id": "55", "ident": "corsair_keel-hauling", "name": "Keel Hauling", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman8_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_8_2.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Puxa o alvo causando dano a cada distância. É necessário que seja usada posteriormente à habilidade ", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "311", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "26" }, "2": { "#{skillatkadd}#": "387", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "29" }, "3": { "#{skillatkadd}#": "463", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "32" }, "4": { "#{skillatkadd}#": "539", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "615", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "38" }, "6": { "#{skillatkadd}#": "691", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "41" }, "7": { "#{skillatkadd}#": "767", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "44" }, "8": { "#{skillatkadd}#": "843", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "47" }, "9": { "#{skillatkadd}#": "919", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "50" }, "10": { "#{skillatkadd}#": "995", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "53" }, "11": { "#{skillatkadd}#": "1071", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "56" }, "12": { "#{skillatkadd}#": "1147", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "59" }, "13": { "#{skillatkadd}#": "1223", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "62" }, "14": { "#{skillatkadd}#": "1299", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "65" }, "15": { "#{skillatkadd}#": "1375", "#{skillefect}#": "Dano do Atributo: 0%
2 Ataques Contínuos", "#{skillfactor}#": "100", "sp": "68" }, } }, "corsair_unlock-chest": { "id": "56", "ident": "corsair_unlock-chest", "name": "Unlock Chest", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman8_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_8_3.mp4", "desc": "

<\/div>
É permitido ao Corsário abrir baús fechados após o uso dessa habilidade.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "49", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +1", "#{skillfactor}#": "100", "sp": "29" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +2", "#{skillfactor}#": "100", "sp": "33" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +3", "#{skillfactor}#": "100", "sp": "37" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +4", "#{skillfactor}#": "100", "sp": "41" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +5", "#{skillfactor}#": "100", "sp": "45" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +6", "#{skillfactor}#": "100", "sp": "49" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +7", "#{skillfactor}#": "100", "sp": "53" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +8", "#{skillfactor}#": "100", "sp": "57" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +9", "#{skillfactor}#": "100", "sp": "61" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +10", "#{skillfactor}#": "100", "sp": "65" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +11", "#{skillfactor}#": "100", "sp": "69" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +12", "#{skillfactor}#": "100", "sp": "73" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +13", "#{skillfactor}#": "100", "sp": "77" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +14", "#{skillfactor}#": "100", "sp": "81" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Chave Nv.: +15", "#{skillfactor}#": "100", "sp": "85" }, } }, "corsair_double-weapon-assault": { "id": "57", "ident": "corsair_double-weapon-assault", "name": "Double Weapon Assault", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman8_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_8_4.mp4", "desc": "
<\/div>
Permite ao Corsário fazer uso da sua arma secundária (punhal/adaga).

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "52", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 36 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 38 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 42 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 44 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 46 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 48 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 52 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar sua adaga
Imediatamente após ataques normais
Duração: 54 Seg.", "#{skillfactor}#": "100", "sp": "68" }, } }, "corsair_dust-devil": { "id": "58", "ident": "corsair_dust-devil", "name": "Dust Devil", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/dustdevil.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Físico] - [Cortante]<\/div>Um combo circular de cortes, usando sua arma e sub-arma.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'Espada 1MãoLança 1MãoFloreteAdaga', "levellist": { "1": { "#{skillatkadd}#": "195", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "24" }, "2": { "#{skillatkadd}#": "233", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "271", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "309", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "33" }, "5": { "#{skillatkadd}#": "347", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "385", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "7": { "#{skillatkadd}#": "423", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "42" }, "8": { "#{skillatkadd}#": "461", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "45" }, "9": { "#{skillatkadd}#": "499", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "48" }, "10": { "#{skillatkadd}#": "537", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "51" }, "11": { "#{skillatkadd}#": "575", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "54" }, "12": { "#{skillatkadd}#": "613", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "57" }, "13": { "#{skillatkadd}#": "651", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "14": { "#{skillatkadd}#": "689", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "63" }, "15": { "#{skillatkadd}#": "727", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "66" }, } }, "centurion_conscript": { "id": "59", "ident": "centurion_conscript", "name": "Conscript", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman9_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_9_0.mp4", "desc": "
<\/div>
Cria-se colunas em que membros do grupo possam fazer parte de uma formação junto ao Centurião.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "22", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "43" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "47" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "51" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "55" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "59" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "63" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "67" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "71" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "75" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "79" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "83" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "87" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "91" }, } }, "centurion_phalanx": { "id": "60", "ident": "centurion_phalanx", "name": "Phalanx", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman9_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_9_1.mp4", "desc": "
<\/div>
Formação na qual a coluna principal recebe bônus de bloqueio.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "36" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "52" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "56" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "64" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "68" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "72" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "76" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "80" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "84" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "88" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "92" }, } }, "centurion_tercio": { "id": "61", "ident": "centurion_tercio", "name": "Tercio", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman9_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_9_2.mp4", "desc": "
<\/div>
Formação na qual é aumentado o ataque mas aumenta o nível de atenção dos inimigos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "36" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "52" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "56" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "64" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "68" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "72" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "76" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "80" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "84" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "88" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "92" }, } }, "centurion_winged-formation": { "id": "62", "ident": "centurion_winged-formation", "name": "Winged Formation", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman9_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_9_3.mp4", "desc": "
<\/div>
Formação na qual a prioridade é o ataque de diversos pontos (forma de asa).

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "41" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "49" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "53" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "57" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "61" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "65" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "69" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "73" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "77" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "81" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "85" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "89" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "93" }, } }, "centurion_wedged-formation": { "id": "63", "ident": "centurion_wedged-formation", "name": "Wedged Formation", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman9_4.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_9_4.mp4", "desc": "
<\/div>
Formação na qual é concentrada parte do ataque de todos no membro mais a frente da mesma.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "41" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "49" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "53" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "57" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "61" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "65" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "69" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "73" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "77" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "81" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "85" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "89" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "93" }, } }, "centurion_schiltron-formation": { "id": "64", "ident": "centurion_schiltron-formation", "name": "Schiltron Formation", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman9_5.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_9_5.mp4", "desc": "
<\/div>
Formação na qual cria um escudo na linha de frente impedido que os inimigos se aproximem.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "38" }, } }, "centurion_testudo": { "id": "65", "ident": "centurion_testudo", "name": "Testudo", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman9_6.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_9_6.mp4", "desc": "
<\/div>
Formação na qual todos tem bônus de aumento da taxa de bloqueio e defesa, mas todos têm a velocidade diminuída.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "45" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "60" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "65" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "70" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "75" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "80" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "85" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "90" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "95" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "100" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "105" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "110" }, } }, "centurion_change-direction": { "id": "66", "ident": "centurion_change-direction", "name": "Change Direction", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman9_7.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_9_7.mp4", "desc": "
<\/div>
Permite o Centurião rotacionar a sua formação conforme seu posicionamento.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "28" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "32" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "36" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "40" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "44" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "48" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "52" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "56" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "60" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "64" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "68" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "72" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "76" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "80" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "84" }, } }, "doppelsoeldner_deeds-of-valor": { "id": "67", "ident": "doppelsoeldner_deeds-of-valor", "name": "Deeds of Valor", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman10_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_10_0.mp4", "desc": "
<\/div>
Aumenta a velocidade de ataque, e o poder de ataque a cada golpe. Porém, a defesa é diminuída.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "43", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 1
Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 2
Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 3
Duração: 29 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 4
Duração: 32 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 5
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 6
Duração: 38 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 7
Duração: 41 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 8
Duração: 44 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 9
Duração: 47 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 10
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 11
Duração: 53 Seg.", "#{skillfactor}#": "100", "sp": "76" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 12
Duração: 56 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 13
Duração: 59 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 14
Duração: 62 Seg.", "#{skillfactor}#": "100", "sp": "88" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque por Acúmulo: +10%
Defense Por acúmulo: -10%
Acúmulos Máx.: 15
Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "92" }, } }, "swordsman_pain-barrier": { "id": "68", "ident": "swordsman_pain-barrier", "name": "Pain Barrier", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman10_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_10_1.mp4", "desc": "
<\/div>
Durante certo tempo, o Espadachim cria resistência à atordoamento e não pode ser derrubado.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "39", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 27 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 29 Seg.", "#{skillfactor}#": "100", "sp": "69" }, } }, "doppelsoeldner_mordschlag": { "id": "69", "ident": "doppelsoeldner_mordschlag", "name": "Mordschlag", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman10_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_10_2.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Golpe que causa dano devastador em forma de impacto.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "38", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "712", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "884", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "42" }, "3": { "#{skillatkadd}#": "1056", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "1228", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "52" }, "5": { "#{skillatkadd}#": "1400", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "57" }, "6": { "#{skillatkadd}#": "1572", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "62" }, "7": { "#{skillatkadd}#": "1744", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "67" }, "8": { "#{skillatkadd}#": "1916", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "72" }, "9": { "#{skillatkadd}#": "2088", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "77" }, "10": { "#{skillatkadd}#": "2260", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "82" }, "11": { "#{skillatkadd}#": "2432", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "87" }, "12": { "#{skillatkadd}#": "2604", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "92" }, "13": { "#{skillatkadd}#": "2776", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "97" }, "14": { "#{skillatkadd}#": "2948", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "102" }, "15": { "#{skillatkadd}#": "3120", "#{skillefect}#": "Dano do Atributo: %
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "107" }, } }, "doppelsoeldner_double-pay-earn": { "id": "70", "ident": "doppelsoeldner_double-pay-earn", "name": "Double Pay Earn", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman10_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_10_3.mp4", "desc": "
<\/div>
Após ser usado, durante um curto período os monstros abatidos terão o dobro de recompensa.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "57", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Limites de Ataques: 1
2x EXP ", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": " Chance de Drop", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Limites de Ataques: 2
2x EXP ", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": " Chance de Drop", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Limites de Ataques: 3
2x EXP ", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": " Chance de Drop", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Limites de Ataques: 4
2x EXP ", "#{skillfactor}#": "100", "sp": "65" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": " Chance de Drop", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Limites de Ataques: 5
2x EXP ", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": " Chance de Drop", "#{skillfactor}#": "100", "sp": "80" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Limites de Ataques: 6
2x EXP ", "#{skillfactor}#": "100", "sp": "85" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": " Chance de Drop", "#{skillfactor}#": "100", "sp": "90" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Limites de Ataques: 7
2x EXP ", "#{skillfactor}#": "100", "sp": "95" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": " Chance de Drop", "#{skillfactor}#": "100", "sp": "100" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Limites de Ataques: 8
2x EXP ", "#{skillfactor}#": "100", "sp": "105" }, } }, "doppelsoeldner_punish": { "id": "71", "ident": "doppelsoeldner_punish", "name": "Punish", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman10_4.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_10_4.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Atravessa a espada no inimigo caído causando um dano devastador.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "18", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "853", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "1045", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "45" }, "3": { "#{skillatkadd}#": "1237", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "1429", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "1621", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "60" }, "6": { "#{skillatkadd}#": "1813", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "65" }, "7": { "#{skillatkadd}#": "2005", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "70" }, "8": { "#{skillatkadd}#": "2197", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "75" }, "9": { "#{skillatkadd}#": "2389", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "80" }, "10": { "#{skillatkadd}#": "2581", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "85" }, "11": { "#{skillatkadd}#": "2773", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "90" }, "12": { "#{skillatkadd}#": "2965", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "95" }, "13": { "#{skillatkadd}#": "3157", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "100" }, "14": { "#{skillatkadd}#": "3349", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "105" }, "15": { "#{skillatkadd}#": "3541", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "110" }, } }, "doppelsoeldner_cyclone": { "id": "72", "ident": "doppelsoeldner_cyclone", "name": "Cyclone", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_swordsman10_5.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/skill_10_5.mp4", "desc": "
[Físico] - [Cortante]<\/div>
Rotaciona a espada em torno de si, causando dano rápido e grande em alvos próximos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "435", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 2.5 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "537", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 3 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "47" }, "3": { "#{skillatkadd}#": "639", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 3.5 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "741", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 4 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "57" }, "5": { "#{skillatkadd}#": "843", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 4.5 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "62" }, "6": { "#{skillatkadd}#": "945", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "67" }, "7": { "#{skillatkadd}#": "1047", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5.5 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "72" }, "8": { "#{skillatkadd}#": "1149", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "77" }, "9": { "#{skillatkadd}#": "1251", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6.5 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "82" }, "10": { "#{skillatkadd}#": "1353", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 7 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "87" }, "11": { "#{skillatkadd}#": "1455", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 7.5 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "92" }, "12": { "#{skillatkadd}#": "1557", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 8 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "97" }, "13": { "#{skillatkadd}#": "1659", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 8.5 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "102" }, "14": { "#{skillatkadd}#": "1761", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 9 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "107" }, "15": { "#{skillatkadd}#": "1863", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 9.5 Seg.
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "112" }, } }, "archer_multi-shot": { "id": "73", "ident": "archer_multi-shot", "name": "Multi Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer0_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_0_0.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Atira várias flechas em um inimigo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "14", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "33", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 2 por vez", "#{skillfactor}#": "100", "sp": "9" }, "2": { "#{skillatkadd}#": "41", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 3 por vez", "#{skillfactor}#": "100", "sp": "11" }, "3": { "#{skillatkadd}#": "49", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 4 por vez", "#{skillfactor}#": "100", "sp": "13" }, "4": { "#{skillatkadd}#": "57", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 5 por vez", "#{skillfactor}#": "100", "sp": "15" }, "5": { "#{skillatkadd}#": "65", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 6 por vez", "#{skillfactor}#": "100", "sp": "17" }, "6": { "#{skillatkadd}#": "73", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 7 por vez", "#{skillfactor}#": "100", "sp": "19" }, "7": { "#{skillatkadd}#": "81", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 8 por vez", "#{skillfactor}#": "100", "sp": "21" }, "8": { "#{skillatkadd}#": "89", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 9 por vez", "#{skillfactor}#": "100", "sp": "23" }, "9": { "#{skillatkadd}#": "97", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 10 por vez", "#{skillfactor}#": "100", "sp": "25" }, "10": { "#{skillatkadd}#": "105", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 11 por vez", "#{skillfactor}#": "100", "sp": "27" }, "11": { "#{skillatkadd}#": "113", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 12 por vez", "#{skillfactor}#": "100", "sp": "29" }, "12": { "#{skillatkadd}#": "121", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 13 por vez", "#{skillfactor}#": "100", "sp": "31" }, "13": { "#{skillatkadd}#": "129", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 14 por vez", "#{skillfactor}#": "100", "sp": "33" }, "14": { "#{skillatkadd}#": "137", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 15 por vez", "#{skillfactor}#": "100", "sp": "35" }, "15": { "#{skillatkadd}#": "145", "#{skillefect}#": "Dano do Atributo: 0%
Disparos 16 por vez", "#{skillfactor}#": "100", "sp": "37" }, } }, "archer_full-draw": { "id": "74", "ident": "archer_full-draw", "name": "Full Draw", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer0_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_0_1.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Puxa seu arco ao máximo para atirar um fecha penetrante no inimigo. Os inimigos que estiverem atrás do inimigo acertado também serão afetados

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "57", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "12" }, "2": { "#{skillatkadd}#": "68", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "15" }, "3": { "#{skillatkadd}#": "79", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "90", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "21" }, "5": { "#{skillatkadd}#": "101", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "6": { "#{skillatkadd}#": "112", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "7": { "#{skillatkadd}#": "123", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "8": { "#{skillatkadd}#": "134", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "9": { "#{skillatkadd}#": "145", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "10": { "#{skillatkadd}#": "156", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "11": { "#{skillatkadd}#": "167", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "12": { "#{skillatkadd}#": "178", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "13": { "#{skillatkadd}#": "189", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "14": { "#{skillatkadd}#": "200", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "15": { "#{skillatkadd}#": "211", "#{skillefect}#": "Dano do Atributo: 0%
[oblíquo] Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "54" }, } }, "archer_kneeling-shot": { "id": "75", "ident": "archer_kneeling-shot", "name": "Kneeling Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer0_2.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_0_2.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Atacar quando está agachado aumenta a distância e dano de suas flechas.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(15 + DEX)
Alcance: +12.5
Velocidade de Ataque: +82.5", "#{skillfactor}#": "100", "sp": "9" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(19 + DEX)
Alcance: +15
Velocidade de Ataque: +115", "#{skillfactor}#": "100", "sp": "11" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(23 + DEX)
Alcance: +17.5
Velocidade de Ataque: +147.5", "#{skillfactor}#": "100", "sp": "13" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(27 + DEX)
Alcance: +20
Velocidade de Ataque: +180", "#{skillfactor}#": "100", "sp": "15" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(31 + DEX)
Alcance: +22.5
Velocidade de Ataque: +212.5", "#{skillfactor}#": "100", "sp": "17" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(35 + DEX)
Alcance: +25
Velocidade de Ataque: +245", "#{skillfactor}#": "100", "sp": "19" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(40 + DEX)
Alcance: +27.5
Velocidade de Ataque: +277.5", "#{skillfactor}#": "100", "sp": "21" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(44 + DEX)
Alcance: +30
Velocidade de Ataque: +310", "#{skillfactor}#": "100", "sp": "23" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(48 + DEX)
Alcance: +32.5
Velocidade de Ataque: +342.5", "#{skillfactor}#": "100", "sp": "25" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Físico: +(52 + DEX)
Alcance: +35
Velocidade de Ataque: +375", "#{skillfactor}#": "100", "sp": "27" }, } }, "archer_swift-step": { "id": "76", "ident": "archer_swift-step", "name": "Swift Step", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer0_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_0_3.mp4", "desc": "
<\/div>
Velocidade de movimento e de ataque aumenta temporariamente.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "36", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +5%
Defesa Física: -9
Evasão: +6%
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "11" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +6%
Defesa Física: -8
Evasão: +7%
Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "13" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +7%
Defesa Física: -7
Evasão: +8%
Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "15" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +8%
Defesa Física: -6
Evasão: +9%
Duração: 27 Seg.", "#{skillfactor}#": "100", "sp": "17" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +9%
Defesa Física: -5
Evasão: +10%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "19" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +10%
Defesa Física: -4
Evasão: +11%
Duração: 33 Seg.", "#{skillfactor}#": "100", "sp": "21" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +11%
Defesa Física: -3
Evasão: +12%
Duração: 36 Seg.", "#{skillfactor}#": "100", "sp": "23" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +12%
Defesa Física: -2
Evasão: +13%
Duração: 39 Seg.", "#{skillfactor}#": "100", "sp": "25" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +13%
Defesa Física: -1
Evasão: +14%
Duração: 42 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +14%
Defesa Física: -1
Evasão: +15%
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "29" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +15%
Defesa Física: -1
Evasão: +16%
Duração: 48 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +16%
Defesa Física: -1
Evasão: +17%
Duração: 51 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +17%
Defesa Física: -1
Evasão: +18%
Duração: 54 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +18%
Defesa Física: -1
Evasão: +19%
Duração: 57 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +19%
Defesa Física: -1
Evasão: +20%
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "39" }, } }, "archer_oblique-shot": { "id": "77", "ident": "archer_oblique-shot", "name": "Oblique Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer0_4.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_0_4.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Atira uma flecha que irá quicar em um inimigo próximo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "79", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 81%", "#{skillfactor}#": "100", "sp": "10" }, "2": { "#{skillatkadd}#": "98", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 82%", "#{skillfactor}#": "100", "sp": "12" }, "3": { "#{skillatkadd}#": "117", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 83%", "#{skillfactor}#": "100", "sp": "14" }, "4": { "#{skillatkadd}#": "136", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 84%", "#{skillfactor}#": "100", "sp": "16" }, "5": { "#{skillatkadd}#": "155", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 85%", "#{skillfactor}#": "100", "sp": "18" }, "6": { "#{skillatkadd}#": "174", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 86%", "#{skillfactor}#": "100", "sp": "20" }, "7": { "#{skillatkadd}#": "193", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 87%", "#{skillfactor}#": "100", "sp": "22" }, "8": { "#{skillatkadd}#": "212", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 88%", "#{skillfactor}#": "100", "sp": "24" }, "9": { "#{skillatkadd}#": "231", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 89%", "#{skillfactor}#": "100", "sp": "26" }, "10": { "#{skillatkadd}#": "250", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 90%", "#{skillfactor}#": "100", "sp": "28" }, "11": { "#{skillatkadd}#": "269", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 91%", "#{skillfactor}#": "100", "sp": "30" }, "12": { "#{skillatkadd}#": "288", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 92%", "#{skillfactor}#": "100", "sp": "32" }, "13": { "#{skillatkadd}#": "307", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 93%", "#{skillfactor}#": "100", "sp": "34" }, "14": { "#{skillatkadd}#": "326", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 94%", "#{skillfactor}#": "100", "sp": "36" }, "15": { "#{skillatkadd}#": "345", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 95%", "#{skillfactor}#": "100", "sp": "38" }, } }, "archer_heavy-shot": { "id": "78", "ident": "archer_heavy-shot", "name": "Heavy Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer0_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_0_5.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Dispara tiros fortes que empurram os inimigos para trás.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "90", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "12" }, "2": { "#{skillatkadd}#": "114", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "15" }, "3": { "#{skillatkadd}#": "138", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "162", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "21" }, "5": { "#{skillatkadd}#": "186", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "24" }, "6": { "#{skillatkadd}#": "210", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "27" }, "7": { "#{skillatkadd}#": "234", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "30" }, "8": { "#{skillatkadd}#": "258", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "33" }, "9": { "#{skillatkadd}#": "282", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "36" }, "10": { "#{skillatkadd}#": "306", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, } }, "archer_twinarrows": { "id": "79", "ident": "archer_twinarrows", "name": "TwinArrows", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer0_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_0_6.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
O Arqueiro dispara duas flechas ao mesmo tempo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "78", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "18" }, "2": { "#{skillatkadd}#": "107", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "22" }, "3": { "#{skillatkadd}#": "136", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "26" }, "4": { "#{skillatkadd}#": "165", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "30" }, "5": { "#{skillatkadd}#": "194", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "34" }, } }, "ranger_barrage": { "id": "80", "ident": "ranger_barrage", "name": "Barrage", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer1_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_1_0.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Atira cinco (5) flechas em forma de arco no chão causando dano nos inimigos a frente.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "18", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "96", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "17" }, "2": { "#{skillatkadd}#": "118", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "20" }, "3": { "#{skillatkadd}#": "140", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "23" }, "4": { "#{skillatkadd}#": "162", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "26" }, "5": { "#{skillatkadd}#": "184", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "29" }, "6": { "#{skillatkadd}#": "206", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "32" }, "7": { "#{skillatkadd}#": "228", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "35" }, "8": { "#{skillatkadd}#": "250", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "38" }, "9": { "#{skillatkadd}#": "272", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "10": { "#{skillatkadd}#": "294", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "44" }, "11": { "#{skillatkadd}#": "316", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "47" }, "12": { "#{skillatkadd}#": "338", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "50" }, "13": { "#{skillatkadd}#": "360", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "53" }, "14": { "#{skillatkadd}#": "382", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "15": { "#{skillatkadd}#": "404", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, } }, "ranger_high-anchoring": { "id": "81", "ident": "ranger_high-anchoring", "name": "High Anchoring", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer1_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_1_1.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Atira um flecha que penetra em vários inimigos em linha reta.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "100", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "128", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 7", "#{skillfactor}#": "100", "sp": "24" }, "3": { "#{skillatkadd}#": "156", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 8", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "184", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 9", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "212", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 10", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "240", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 11", "#{skillfactor}#": "100", "sp": "40" }, "7": { "#{skillatkadd}#": "268", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 12", "#{skillfactor}#": "100", "sp": "44" }, "8": { "#{skillatkadd}#": "296", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 13", "#{skillfactor}#": "100", "sp": "48" }, "9": { "#{skillatkadd}#": "324", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 14", "#{skillfactor}#": "100", "sp": "52" }, "10": { "#{skillatkadd}#": "352", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 15", "#{skillfactor}#": "100", "sp": "56" }, "11": { "#{skillatkadd}#": "380", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 16", "#{skillfactor}#": "100", "sp": "60" }, "12": { "#{skillatkadd}#": "408", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 17", "#{skillfactor}#": "100", "sp": "64" }, "13": { "#{skillatkadd}#": "436", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 18", "#{skillfactor}#": "100", "sp": "68" }, "14": { "#{skillatkadd}#": "464", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 19", "#{skillfactor}#": "100", "sp": "72" }, "15": { "#{skillatkadd}#": "492", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 20", "#{skillfactor}#": "100", "sp": "76" }, } }, "ranger_critical-shot": { "id": "82", "ident": "ranger_critical-shot", "name": "Critical Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer1_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_1_2.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Dispara uma flecha que aumenta as chances de dano crítico.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "81", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "18" }, "2": { "#{skillatkadd}#": "97", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "21" }, "3": { "#{skillatkadd}#": "113", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "24" }, "4": { "#{skillatkadd}#": "129", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "27" }, "5": { "#{skillatkadd}#": "145", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "30" }, "6": { "#{skillatkadd}#": "161", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "33" }, "7": { "#{skillatkadd}#": "177", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "36" }, "8": { "#{skillatkadd}#": "193", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "39" }, "9": { "#{skillatkadd}#": "209", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "42" }, "10": { "#{skillatkadd}#": "225", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "45" }, "11": { "#{skillatkadd}#": "241", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "48" }, "12": { "#{skillatkadd}#": "257", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "51" }, "13": { "#{skillatkadd}#": "273", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "54" }, "14": { "#{skillatkadd}#": "289", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "57" }, "15": { "#{skillatkadd}#": "305", "#{skillefect}#": "Dano do Atributo: 0%
50% Chance Adicional de Crítico", "#{skillfactor}#": "100", "sp": "60" }, } }, "ranger_steady-aim": { "id": "83", "ident": "ranger_steady-aim", "name": "Steady Aim", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer1_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_1_3.mp4", "desc": "
<\/div>
Aumenta o dano de ataque, mas diminui a velocidade de ataque.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "61", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+6%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+7%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "23" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+8%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "26" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+9%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "29" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+10%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+11%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+12%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+13%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+14%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+15%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+16%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+17%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+18%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+19%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque:+20%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "62" }, } }, "ranger_time-bomb-arrow": { "id": "84", "ident": "ranger_time-bomb-arrow", "name": "Time Bomb Arrow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer1_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_1_4.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Dispara uma flecha com uma bomba que explodirá com um tempo, atingindo os inimigos em volta.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "43", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "129", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "158", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "187", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "216", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "245", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "6": { "#{skillatkadd}#": "274", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "7": { "#{skillatkadd}#": "303", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "8": { "#{skillatkadd}#": "332", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "9": { "#{skillatkadd}#": "361", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "10": { "#{skillatkadd}#": "390", "#{skillefect}#": "Dano do Atributo: 0%
Duração da Bomba: 2 Seg.", "#{skillfactor}#": "100", "sp": "58" }, } }, "ranger_bounce-shot": { "id": "85", "ident": "ranger_bounce-shot", "name": "Bounce Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer1_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_1_5.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Se o alvo morrer para Fecha Ricochete, lançará flechas adjacentes que atingirão os inimigos próximos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "184", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 2", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "247", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 3", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "310", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 4", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "373", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "436", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 6", "#{skillfactor}#": "100", "sp": "39" }, } }, "ranger_spiral-arrow": { "id": "86", "ident": "ranger_spiral-arrow", "name": "Spiral Arrow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/spiralarrow_new.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_1_6.mp4", "desc": "
<\/div>
Após usada a habilidade, a flecha lançada espiralará o alvo acertando algum outro alvo próximo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "36", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: [?]%
Número de Golpes: 2", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: [?]%
Número de Golpes: 3", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: [?]%
Número de Golpes: 4", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: [?]%
Número de Golpes: 5", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: [?]%
Número de Golpes: 6", "#{skillfactor}#": "100", "sp": "39" }, } }, "quarrelshooter_deploy-pavise": { "id": "87", "ident": "quarrelshooter_deploy-pavise", "name": "Deploy Pavise", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer2_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_2_0.mp4", "desc": "
<\/div>Implanta no chão um Pavê (escudo) que impede que o inimigo faça disparos à distância.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "49", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaCanhãoPistola', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 20
Duração do Pavê: 18 Seg.", "#{skillfactor}#": "100", "sp": "18" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 25
Duração do Pavê: 20 Seg.", "#{skillfactor}#": "100", "sp": "21" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 30
Duração do Pavê: 22 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 35
Duração do Pavê: 24 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 40
Duração do Pavê: 26 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 45
Duração do Pavê: 28 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 50
Duração do Pavê: 30 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 55
Duração do Pavê: 32 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 60
Duração do Pavê: 34 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 65
Duração do Pavê: 36 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 70
Duração do Pavê: 38 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 75
Duração do Pavê: 40 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 80
Duração do Pavê: 42 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 85
Duração do Pavê: 44 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 90
Duração do Pavê: 46 Seg.", "#{skillfactor}#": "100", "sp": "60" }, } }, "quarrelshooter_scatter-caltrop": { "id": "88", "ident": "quarrelshooter_scatter-caltrop", "name": "Scatter Caltrop", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer2_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_2_1.mp4", "desc": "
[Físico] - [Perfurante]<\/div>Espalha espinhos pela zona alvo. Inimigos que passarem pelos espinhos sofrerão dano e redução na velocidade de movimento.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 1
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 2
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "23" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 3
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "26" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 4
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "29" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 5
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "32" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 6
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "35" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 7
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "38" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 8
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "41" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 9
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "44" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 10
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "47" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 11
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "50" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 12
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "53" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 13
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "56" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 14
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "59" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Total de Arremessos: 15
Duração: 20 Seg.
Reduz a Velocidade de movimento do inimigo em 10 por 5 Seg. 5", "#{skillfactor}#": "100", "sp": "62" }, } }, "quarrelshooter_stone-picking": { "id": "89", "ident": "quarrelshooter_stone-picking", "name": "Stone Picking", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer2_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_2_2.mp4", "desc": "
<\/div>
Você recolhe pedras que podem ser usadas com Tiro de Pedra. Esta habilidade pode ser usada em cidades.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "5", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 1", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 2", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 3", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 4", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 5", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 6", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 7", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 8", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 9", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 10", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 11", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 12", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 13", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 14", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Balas de Pedra Obtidas: 15", "#{skillfactor}#": "100", "sp": "0" }, } }, "quarrelshooter_stone-shot": { "id": "90", "ident": "quarrelshooter_stone-shot", "name": "Stone Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer2_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_2_3.mp4", "desc": "
[Físico] - [Contusão]<\/div>
Dispara uma bala de pedra que empurra o alvo. Há uma chance de que o alvo fique atordoado.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'BestaEscudo', "levellist": { "1": { "#{skillatkadd}#": "75", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 4 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "89", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 4 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "25" }, "3": { "#{skillatkadd}#": "103", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 5 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "117", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 5 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "131", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 6 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "40" }, "6": { "#{skillatkadd}#": "145", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 6 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "45" }, "7": { "#{skillatkadd}#": "159", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 6 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "50" }, "8": { "#{skillatkadd}#": "173", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 7 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "55" }, "9": { "#{skillatkadd}#": "187", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 7 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "60" }, "10": { "#{skillatkadd}#": "201", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 8 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "65" }, "11": { "#{skillatkadd}#": "215", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 8 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "70" }, "12": { "#{skillatkadd}#": "229", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 8 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "75" }, "13": { "#{skillatkadd}#": "243", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 9 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "80" }, "14": { "#{skillatkadd}#": "257", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 9 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "85" }, "15": { "#{skillatkadd}#": "271", "#{skillefect}#": "Dano do Atributo: 0%
[Atordoar] Duração: 10 Seg.
Consume 1 Bala de Pedra", "#{skillfactor}#": "100", "sp": "90" }, } }, "quarrelshooter_rapid-fire": { "id": "91", "ident": "quarrelshooter_rapid-fire", "name": "Rapid Fire", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer2_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_2_4.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Carrega vários projéteis que são disparados rapidamente.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "45", "element": "none", "reqstance": 'BestaEscudo', "levellist": { "1": { "#{skillatkadd}#": "53", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 1.2 Seg.", "#{skillfactor}#": "100", "sp": "19" }, "2": { "#{skillatkadd}#": "81", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 1.4 Seg.", "#{skillfactor}#": "100", "sp": "23" }, "3": { "#{skillatkadd}#": "109", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 1.6 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "4": { "#{skillatkadd}#": "137", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 1.8 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "5": { "#{skillatkadd}#": "165", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 2 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "6": { "#{skillatkadd}#": "193", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 2.2 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "7": { "#{skillatkadd}#": "221", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 2.4 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "8": { "#{skillatkadd}#": "249", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 2.6 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "9": { "#{skillatkadd}#": "277", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 2.8 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "10": { "#{skillatkadd}#": "305", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Carga Máx.: 3 Seg.", "#{skillfactor}#": "100", "sp": "55" }, } }, "quarrelshooter_teardown": { "id": "92", "ident": "quarrelshooter_teardown", "name": "Teardown", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer2_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_2_5.mp4", "desc": "
[Físico] - [Contusão]<\/div>
Enquanto, ao mesmo tempo que desmonta das pavês, você pode causa danos ao alvos próximos..

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "50", "element": "none", "reqstance": 'BestaEscudo', "levellist": { "1": { "#{skillatkadd}#": "122", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "15" }, "2": { "#{skillatkadd}#": "154", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "18" }, "3": { "#{skillatkadd}#": "186", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "21" }, "4": { "#{skillatkadd}#": "218", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "24" }, "5": { "#{skillatkadd}#": "250", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "27" }, "6": { "#{skillatkadd}#": "282", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "30" }, "7": { "#{skillatkadd}#": "314", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "33" }, "8": { "#{skillatkadd}#": "346", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "36" }, "9": { "#{skillatkadd}#": "378", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "10": { "#{skillatkadd}#": "410", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "42" }, } }, "quarrelshooter_runningshot": { "id": "93", "ident": "quarrelshooter_runningshot", "name": "RunningShot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer2_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_2_6.mp4", "desc": "
<\/div>
Você pode atacar com uma besta quanto se movimenta rapidamente.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "50", "element": "none", "reqstance": 'BestaEscudo', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.
Velocidade de Ataque: +30%
Dano Adicional: 40%", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.
Velocidade de Ataque: +30%
Dano Adicional: 80%", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.
Velocidade de Ataque: +30%
Dano Adicional: 120%", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.
Velocidade de Ataque: +30%
Dano Adicional: 160%", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 23 Seg.
Velocidade de Ataque: +30%
Dano Adicional: 200%", "#{skillfactor}#": "100", "sp": "39" }, } }, "sapper_conceal": { "id": "94", "ident": "sapper_conceal", "name": "Conceal", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer3_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_3_0.mp4", "desc": "
<\/div>
Implanta uma armadilha escondida para pegar os inimigos despercebidos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 1 min.", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 2 min.", "#{skillfactor}#": "100", "sp": "24" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 3 min.", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 4 min.", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 5 min.", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 6 min.", "#{skillfactor}#": "100", "sp": "40" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 7 min.", "#{skillfactor}#": "100", "sp": "44" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 8 min.", "#{skillfactor}#": "100", "sp": "48" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 9 min.", "#{skillfactor}#": "100", "sp": "52" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 10 min.", "#{skillfactor}#": "100", "sp": "56" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 11 min.", "#{skillfactor}#": "100", "sp": "60" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 12 min.", "#{skillfactor}#": "100", "sp": "64" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 13 min.", "#{skillfactor}#": "100", "sp": "68" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 14 min.", "#{skillfactor}#": "100", "sp": "72" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 min.", "#{skillfactor}#": "100", "sp": "76" }, } }, "sapper_claymore": { "id": "95", "ident": "sapper_claymore", "name": "Claymore", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer3_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_3_1.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Instala um explosivo Claymore no chão que explodirá os inimigos a frente quando a habilidade .", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "32", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "176", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "28" }, "2": { "#{skillatkadd}#": "221", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "32" }, "3": { "#{skillatkadd}#": "266", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "36" }, "4": { "#{skillatkadd}#": "311", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "40" }, "5": { "#{skillatkadd}#": "356", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "44" }, "6": { "#{skillatkadd}#": "401", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "48" }, "7": { "#{skillatkadd}#": "446", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "52" }, "8": { "#{skillatkadd}#": "491", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "56" }, "9": { "#{skillatkadd}#": "536", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "60" }, "10": { "#{skillatkadd}#": "581", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "64" }, "11": { "#{skillatkadd}#": "626", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "68" }, "12": { "#{skillatkadd}#": "671", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "72" }, "13": { "#{skillatkadd}#": "716", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "76" }, "14": { "#{skillatkadd}#": "761", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "80" }, "15": { "#{skillatkadd}#": "806", "#{skillefect}#": "Dano do Atributo: 5%
Raio de Ataque em Área: 5
Consume 1 Claymore", "#{skillfactor}#": "100", "sp": "84" }, } }, "sapper_punji-stake": { "id": "96", "ident": "sapper_punji-stake", "name": "Punji Stake", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer3_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_3_2.mp4", "desc": "

[Físico] - [Perfurante]<\/div>
Insta uma armadilha que é ativada quando os inimigos passam por cima, desferindo danos e os empurrando para trás.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "39", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "152", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 35 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "29" }, "2": { "#{skillatkadd}#": "183", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 40 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "33" }, "3": { "#{skillatkadd}#": "214", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 45 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "37" }, "4": { "#{skillatkadd}#": "245", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 50 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "41" }, "5": { "#{skillatkadd}#": "276", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 55 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "45" }, "6": { "#{skillatkadd}#": "307", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 60 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "49" }, "7": { "#{skillatkadd}#": "338", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 65 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "53" }, "8": { "#{skillatkadd}#": "369", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 70 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "57" }, "9": { "#{skillatkadd}#": "400", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 75 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "61" }, "10": { "#{skillatkadd}#": "431", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 80 Seg.
Consume 3 Madeira de Pinho	", "#{skillfactor}#": "100", "sp": "65" }, "11": { "#{skillatkadd}#": "462", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 85 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "69" }, "12": { "#{skillatkadd}#": "493", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 90 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "73" }, "13": { "#{skillatkadd}#": "524", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 95 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "77" }, "14": { "#{skillatkadd}#": "555", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 100 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "81" }, "15": { "#{skillatkadd}#": "586", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 3 Seg.
Duração: 105 Seg.
Consume 3 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "85" }, } }, "sapper_detonate-traps": { "id": "97", "ident": "sapper_detonate-traps", "name": "Detonate Traps", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer3_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_3_3.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Detona os explosivos instalados.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "126", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "31" }, "2": { "#{skillatkadd}#": "156", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "35" }, "3": { "#{skillatkadd}#": "186", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "39" }, "4": { "#{skillatkadd}#": "216", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "43" }, "5": { "#{skillatkadd}#": "246", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "47" }, "6": { "#{skillatkadd}#": "276", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "51" }, "7": { "#{skillatkadd}#": "306", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "55" }, "8": { "#{skillatkadd}#": "336", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "59" }, "9": { "#{skillatkadd}#": "366", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "63" }, "10": { "#{skillatkadd}#": "396", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "67" }, "11": { "#{skillatkadd}#": "426", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "71" }, "12": { "#{skillatkadd}#": "456", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "75" }, "13": { "#{skillatkadd}#": "486", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "79" }, "14": { "#{skillatkadd}#": "516", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "83" }, "15": { "#{skillatkadd}#": "546", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Explosões: 4", "#{skillfactor}#": "100", "sp": "87" }, } }, "sapper_broom-trap": { "id": "98", "ident": "sapper_broom-trap", "name": "Broom Trap", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer3_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_3_4.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Instala uma armadilha de lazes giratórios que atinge os inimigos em volta. 

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "90", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "132", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "34" }, "2": { "#{skillatkadd}#": "168", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "204", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "240", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "49" }, "5": { "#{skillatkadd}#": "276", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "54" }, "6": { "#{skillatkadd}#": "312", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "59" }, "7": { "#{skillatkadd}#": "348", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "64" }, "8": { "#{skillatkadd}#": "384", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "69" }, "9": { "#{skillatkadd}#": "420", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "74" }, "10": { "#{skillatkadd}#": "456", "#{skillefect}#": "Dano do Atributo: 0%
Duração de Armadilha: 15 Seg.
Consume 3 cinzas de madeira", "#{skillfactor}#": "100", "sp": "79" }, } }, "sapper_collar-bomb": { "id": "99", "ident": "sapper_collar-bomb", "name": "Collar Bomb", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer3_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_3_5.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Pendure as bombas nos inimigos.
Ela explode quando o alvo encosta em outros inimigos

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "54", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "283", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 1", "#{skillfactor}#": "100", "sp": "34" }, "2": { "#{skillatkadd}#": "363", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 2", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "443", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 3", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "523", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 4", "#{skillfactor}#": "100", "sp": "49" }, "5": { "#{skillatkadd}#": "603", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 5", "#{skillfactor}#": "100", "sp": "54" }, "6": { "#{skillatkadd}#": "683", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 6", "#{skillfactor}#": "100", "sp": "59" }, "7": { "#{skillatkadd}#": "763", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 7", "#{skillfactor}#": "100", "sp": "64" }, "8": { "#{skillatkadd}#": "843", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 8", "#{skillfactor}#": "100", "sp": "69" }, "9": { "#{skillatkadd}#": "923", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 9", "#{skillfactor}#": "100", "sp": "74" }, "10": { "#{skillatkadd}#": "1003", "#{skillefect}#": "Dano do Atributo: 0%
Ajustar Contagem: 10", "#{skillfactor}#": "100", "sp": "79" }, } }, "sapper_spike-shooter": { "id": "100", "ident": "sapper_spike-shooter", "name": "Spike Shooter", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer3_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_3_6.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Coloque um cerca de Arame Farpado entre você e os inimigos.
Os inimigos que tentarem atrevesar levaram danos graves.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "100", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "325", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Flechas: 2
Alcance da Configuração: 70
Consume 2 Arame", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "418", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Flechas: 4
Alcance da Configuração: 90
Consume 2 Arame", "#{skillfactor}#": "100", "sp": "41" }, "3": { "#{skillatkadd}#": "511", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Flechas: 6
Alcance da Configuração: 110
Consume 2 Arame", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "604", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Flechas: 8
Alcance da Configuração: 130
Consume 2 Arame", "#{skillfactor}#": "100", "sp": "53" }, "5": { "#{skillatkadd}#": "697", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Flechas: 10
Alcance da Configuração: 150", "#{skillfactor}#": "100", "sp": "59" }, } }, "hunter_coursing": { "id": "101", "ident": "hunter_coursing", "name": "Coursing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer4_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_4_0.mp4", "desc": "
<\/div>
O companheiro irá morder um alvo adicionando bonus de chance de deferir um ataque crítico no alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "9", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -16
Chance Adicional de Crítico: 30%
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "25" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -20
Chance Adicional de Crítico: 30%
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "29" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -24
Chance Adicional de Crítico: 30%
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -28
Chance Adicional de Crítico: 30%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -32
Chance Adicional de Crítico: 30%
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -36
Chance Adicional de Crítico: 30%
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -40
Chance Adicional de Crítico: 30%
Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -44
Chance Adicional de Crítico: 30%
Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -48
Chance Adicional de Crítico: 30%
Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -52
Chance Adicional de Crítico: 30%
Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "61" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -56
Chance Adicional de Crítico: 30%
Duração: 27 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -60
Chance Adicional de Crítico: 30%
Duração: 29 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -64
Chance Adicional de Crítico: 30%
Duração: 31 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -68
Chance Adicional de Crítico: 30%
Duração: 33 Seg.", "#{skillfactor}#": "100", "sp": "77" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -72
Chance Adicional de Crítico: 30%
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "81" }, } }, "hunter_snatching": { "id": "102", "ident": "hunter_snatching", "name": "Snatching", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer4_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_4_1.mp4", "desc": "
<\/div>
Pede para o companheiro agarrar e derrubar um inimigo que voa.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "26", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 2 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "30", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "34", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "38", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "42", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "46", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "50", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "54", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "58", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "62", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "66", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "70", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "74", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "78", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "82", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "0" }, } }, "hunter_rush-dog": { "id": "103", "ident": "hunter_rush-dog", "name": "Rush Dog", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer4_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_4_2.mp4", "desc": "
<\/div>
Pede para que o companheiro empurre o alvo para trás.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "5", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "286", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "334", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "382", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "430", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "478", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "38" }, "6": { "#{skillatkadd}#": "526", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "42" }, "7": { "#{skillatkadd}#": "574", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "46" }, "8": { "#{skillatkadd}#": "622", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "50" }, "9": { "#{skillatkadd}#": "670", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "54" }, "10": { "#{skillatkadd}#": "718", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "58" }, "11": { "#{skillatkadd}#": "766", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "62" }, "12": { "#{skillatkadd}#": "814", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "66" }, "13": { "#{skillatkadd}#": "862", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "70" }, "14": { "#{skillatkadd}#": "910", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "74" }, "15": { "#{skillatkadd}#": "958", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "78" }, } }, "hunter_praise": { "id": "104", "ident": "hunter_praise", "name": "Praise", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer4_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_4_3.mp4", "desc": "
<\/div>
Aumenta temporariamente a velocidade de movimento e velocidade de ataque do companheiro.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque do companheiro: +25
Precisão do Companheiro: +25
Taxa de Crítico do companheiro: +25
Duração: 60 Seg.
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "26" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque do companheiro: +30
Precisão do Companheiro: +30
Taxa de Crítico do companheiro: +30
Duração: 70 Seg.
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "30" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque do companheiro: +35
Precisão do Companheiro: +35
Taxa de Crítico do companheiro: +35
Duração: 80 Seg.
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "34" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque do companheiro: +40
Precisão do Companheiro: +40
Taxa de Crítico do companheiro: +40
Duração: 90 Seg.
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "38" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque do companheiro: +45
Precisão do Companheiro: +45
Taxa de Crítico do companheiro: +45
Duração: 100 Seg.
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "42" }, } }, "hunter_pointing": { "id": "105", "ident": "hunter_pointing", "name": "Pointing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer4_4.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_4_4.mp4", "desc": "
<\/div>
O companheiro irá apontar para um inimigo amendontrando-o. A taxa de evasão do inimigo é diminuída.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "17", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -15
Precisão: -15
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "28" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -17
Precisão: -17
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -19
Precisão: -19
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -21
Precisão: -21
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -23
Precisão: -23
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -25
Precisão: -25
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -27
Precisão: -27
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -29
Precisão: -29
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -31
Precisão: -31
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -33
Precisão: -33
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -35
Precisão: -35
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -37
Precisão: -37
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -39
Precisão: -39
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "76" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -41
Precisão: -41
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -43
Precisão: -43
Duração do Apontar: 90 Seg.", "#{skillfactor}#": "100", "sp": "84" }, } }, "hunter_retrieve": { "id": "106", "ident": "hunter_retrieve", "name": "Retrieve", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer4_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_4_5.mp4", "desc": "
<\/div>
O companheiro pega um inimigo e trás para perto de seu personagem.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "10", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "29" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "61" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "65" }, } }, "hunter_hounding": { "id": "107", "ident": "hunter_hounding", "name": "Hounding", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer4_6.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_4_6.mp4", "desc": "
<\/div>
O companheiro irá rondar a área em volta de seu personagem procurando por inimigos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "17", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 1 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 2 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 3 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 4 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 5 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 6 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 7 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 8 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 9 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Detecta inimigos ocultos 10 vezes
AI de Perseguição Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "66" }, } }, "hunter_growling": { "id": "108", "ident": "hunter_growling", "name": "Growling", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer4_7.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_4_7.mp4", "desc": "
<\/div>
O companheiro irá emitir um rugido que impede os montros chegarem perto do personagem.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "34", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "[Medo] Duração: 4 Seg.
Desativa a AI se a distância é de pelo menos
superior a 250 entre você e o companheiro
Duração: 10 min.", "#{skillfactor}#": "100", "sp": "32" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "[Medo] Duração: 5 Seg.
Desativa a AI se a distância é de pelo menos
superior a 250 entre você e o companheiro
Duração: 10 min.", "#{skillfactor}#": "100", "sp": "37" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "[Medo] Duração: 6 Seg.
Desativa a AI se a distância é de pelo menos
superior a 250 entre você e o companheiro
Duração: 10 min.", "#{skillfactor}#": "100", "sp": "42" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "[Medo] Duração: 7 Seg.
Desativa a AI se a distância é de pelo menos
superior a 250 entre você e o companheiro
Duração: 10 min.", "#{skillfactor}#": "100", "sp": "47" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "[Medo] Duração: 8 Seg.
Desativa a AI se a distância é de pelo menos
superior a 250 entre você e o companheiro
Duração: 10 min.", "#{skillfactor}#": "100", "sp": "52" }, } }, "wugushi_detoxifiy": { "id": "109", "ident": "wugushi_detoxifiy", "name": "Detoxifiy", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer5_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_5_0.mp4", "desc": "
<\/div>
Desintoxica o personagem caso ele esteja envenenado. Venenos que sejam de um nível maior que o da habilidade Desintoxicar, não serão removidos e terão apenas o tempo de efeito reduzido.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "9", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 10 Potes de Veneno", "#{skillfactor}#": "100", "sp": "34" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 11 Potes de Veneno", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 12 Potes de Veneno", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 13 Potes de Veneno", "#{skillfactor}#": "100", "sp": "49" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 14 Potes de Veneno", "#{skillfactor}#": "100", "sp": "54" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 15 Potes de Veneno", "#{skillfactor}#": "100", "sp": "59" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 16 Potes de Veneno", "#{skillfactor}#": "100", "sp": "64" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 17 Potes de Veneno", "#{skillfactor}#": "100", "sp": "69" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 18 Potes de Veneno", "#{skillfactor}#": "100", "sp": "74" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 19 Potes de Veneno", "#{skillfactor}#": "100", "sp": "79" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 20 Potes de Veneno", "#{skillfactor}#": "100", "sp": "84" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 21 Potes de Veneno	", "#{skillfactor}#": "100", "sp": "89" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 22 Potes de Veneno", "#{skillfactor}#": "100", "sp": "94" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "99" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: -3 Seg.
Consume 24 Potes de Veneno", "#{skillfactor}#": "100", "sp": "104" }, } }, "wugushi_needle-bow": { "id": "110", "ident": "wugushi_needle-bow", "name": "Needle Bow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer5_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_5_1.mp4", "desc": "
[Físico] - [Venenoso]<\/div>
Atira um dardo envenenado usando uma zarabatana. O alvo atingido é envenenado por um certo tempo e receberá danos constantes do veneno.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "36", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "194", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 6 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "235", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 7 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "276", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 8 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "317", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 9 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "358", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 10 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "399", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 11 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "440", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 12 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "65" }, "8": { "#{skillatkadd}#": "481", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 13 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "522", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 14 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "563", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 15 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "80" }, "11": { "#{skillatkadd}#": "604", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 16 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "85" }, "12": { "#{skillatkadd}#": "645", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 17 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "90" }, "13": { "#{skillatkadd}#": "686", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 18 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "95" }, "14": { "#{skillatkadd}#": "727", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 19 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "100" }, "15": { "#{skillatkadd}#": "768", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 20 Seg.
Consume 5 Potes de Veneno", "#{skillfactor}#": "100", "sp": "105" }, } }, "wugushi_bewitch": { "id": "111", "ident": "wugushi_bewitch", "name": "Bewitch", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer5_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_5_2.mp4", "desc": "
<\/div>
Faz com que o inimigo já envenenado fique confuso.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "27", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "[Confusion] Duração: 10 Seg.
Aplica-se um max. de 3 vezes
Consume 4 Potes de Veneno", "#{skillfactor}#": "100", "sp": "32" }, } }, "wugushi_wugong-gu": { "id": "112", "ident": "wugushi_wugong-gu", "name": "Wugong Gu", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer5_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_5_3.mp4", "desc": "
[Físico] - [Venenoso]<\/div>
Atira uma flecha com um veneno contagioso. O alvo envenenado contagiará os inimigos próximos sempre que for acertado por ataque mágicos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "76", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "253", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 6 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "327", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 7 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "42" }, "3": { "#{skillatkadd}#": "401", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 8 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "475", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 9 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "52" }, "5": { "#{skillatkadd}#": "549", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 10 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "57" }, "6": { "#{skillatkadd}#": "623", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 11 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "62" }, "7": { "#{skillatkadd}#": "697", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 12 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "67" }, "8": { "#{skillatkadd}#": "771", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 13 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "72" }, "9": { "#{skillatkadd}#": "845", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 14 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "77" }, "10": { "#{skillatkadd}#": "919", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 15 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "82" }, "11": { "#{skillatkadd}#": "993", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 16 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "87" }, "12": { "#{skillatkadd}#": "1067", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 17 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "92" }, "13": { "#{skillatkadd}#": "1141", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 18 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "97" }, "14": { "#{skillatkadd}#": "1215", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 19 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "102" }, "15": { "#{skillatkadd}#": "1289", "#{skillefect}#": "Dano do Atributo: 0%
[Veneno] Duração: 20 Seg.
Consume 7 Potes de Veneno", "#{skillfactor}#": "100", "sp": "107" }, } }, "wugushi_throw-gu-pot": { "id": "113", "ident": "wugushi_throw-gu-pot", "name": "Throw Gu Pot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer5_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_5_4.mp4", "desc": "
[Físico] - [Venenoso]<\/div>
Atira um pote cheio de veneno no lugar designado criando uma poça de veneno ao cair. Todos os inimigos próximos serão envenenados.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "54", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "204", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "38" }, "2": { "#{skillatkadd}#": "246", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "43" }, "3": { "#{skillatkadd}#": "288", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "48" }, "4": { "#{skillatkadd}#": "330", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "53" }, "5": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "58" }, "6": { "#{skillatkadd}#": "414", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "63" }, "7": { "#{skillatkadd}#": "456", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "68" }, "8": { "#{skillatkadd}#": "498", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "73" }, "9": { "#{skillatkadd}#": "540", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "78" }, "10": { "#{skillatkadd}#": "582", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.
Consume 23 Potes de Veneno", "#{skillfactor}#": "100", "sp": "83" }, } }, "wugushi_jincan-gu": { "id": "114", "ident": "wugushi_jincan-gu", "name": "Jincan Gu", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer5_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_5_5.mp4", "desc": "
[Físico] - [Venenoso]<\/div>
Atira uma flecha com o veneno do bicho-de-seda dourado infligindo um dano massivo no alvo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "52", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "1394", "#{skillefect}#": "Consume 11 Potes de Veneno
Duração dos Insetos Venenosos: 20 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "2": { "#{skillatkadd}#": "1679", "#{skillefect}#": "Consume 11 Potes de Veneno
Duração dos Insetos Venenosos: 20 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "3": { "#{skillatkadd}#": "1964", "#{skillefect}#": "Consume 11 Potes de Veneno
Duração dos Insetos Venenosos: 20 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "4": { "#{skillatkadd}#": "2249", "#{skillefect}#": "Consume 11 Potes de Veneno
Duração dos Insetos Venenosos: 20 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "5": { "#{skillatkadd}#": "2534", "#{skillefect}#": "Consume 11 Potes de Veneno
Duração dos Insetos Venenosos: 20 Seg.", "#{skillfactor}#": "100", "sp": "65" }, } }, "scout_camoubandeirae": { "id": "115", "ident": "scout_camoubandeirae", "name": "CamouBandeirae", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer6_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_6_0.mp4", "desc": "
<\/div>
Se esconde num barril, não atraindo a atenção dos inimigos. A maioria dos ataques físicos sofridos serão defendidos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "76", "element": "none", "reqstance": 'ArcoBestaEscudo', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de Bloqueio: 5
Velocidade de Movimento: -(MSPD X 0.9)", "#{skillfactor}#": "100", "sp": "33" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de Bloqueio: 10
Velocidade de Movimento: -(MSPD X 0.8)", "#{skillfactor}#": "100", "sp": "38" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de Bloqueio: 15
Velocidade de Movimento: -(MSPD X 0.7)", "#{skillfactor}#": "100", "sp": "43" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de Bloqueio: 20
Velocidade de Movimento: -(MSPD X 0.6)", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de Bloqueio: 25
Velocidade de Movimento: -(MSPD X 0.5)", "#{skillfactor}#": "100", "sp": "53" }, } }, "scout_flu-flu": { "id": "116", "ident": "scout_flu-flu", "name": "Flu Flu", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer6_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_6_1.mp4", "desc": "
[Físico] - [Cortante]<\/div>
Atira uma flecha artodoante no alvo causando dano massivo e uma onda supersônica causando medo e confusão nos inimigos próximos assim que flecha acertar o alvo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "61", "element": "none", "reqstance": 'ArcoBestaEscudo', "levellist": { "1": { "#{skillatkadd}#": "150", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "187", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "224", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "261", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "298", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "335", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "8": { "#{skillatkadd}#": "409", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "446", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "483", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "11": { "#{skillatkadd}#": "520", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "12": { "#{skillatkadd}#": "557", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "13": { "#{skillatkadd}#": "594", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "95" }, "14": { "#{skillatkadd}#": "631", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "15": { "#{skillatkadd}#": "668", "#{skillefect}#": "Dano do Atributo: 0%
Alvos Atacados [Medo] + [Confusão]
[Medo] Máx. 5 Inimigos Próximos
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "105" }, } }, "scout_flare-shot": { "id": "117", "ident": "scout_flare-shot", "name": "Flare Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer6_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_6_2.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Atira uma flecha sinalizadora no chão. A explosão espalhará labaredas pela área causando dano constantes nos inimigos por alguns segundos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "41", "element": "none", "reqstance": 'ArcoBestaEscudo', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "67" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "77" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "92" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "97" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "102" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "107" }, } }, "scout_cloaking": { "id": "118", "ident": "scout_cloaking", "name": "Cloaking", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer6_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_6_3.mp4", "desc": "
<\/div>
Faz com que o personagem fique invisível durante certo tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 29 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 32 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 38 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 41 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 44 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 47 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 53 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 56 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 59 Seg.", "#{skillfactor}#": "100", "sp": "95" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 62 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "105" }, } }, "scout_perspective-distortion": { "id": "119", "ident": "scout_perspective-distortion", "name": "Perspective Distortion", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer6_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_6_4.mp4", "desc": "
<\/div>
Distorce o espaço entre o personagem e alvo fazendo com que ataques corpo a corpo sejam possíveis mesmo a longas distâncias.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 11 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "32" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 12 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "37" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 13 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "42" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 14 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "47" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 15 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "52" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 16 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "57" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 17 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "62" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 18 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "67" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 19 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "72" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 20 Seg.
Consume 3 SP por seg.", "#{skillfactor}#": "100", "sp": "77" }, } }, "scout_scan": { "id": "120", "ident": "scout_scan", "name": "Scan", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer6_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_6_5.mp4", "desc": "
<\/div>
Revela todos os alvos escondidos a frente.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "58", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "64" }, } }, "rogue_sneak-hit": { "id": "121", "ident": "rogue_sneak-hit", "name": "Sneak Hit", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer7_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_7_0.mp4", "desc": "
<\/div>
Aumenta o crítico de ataque de modo exponencial, caso seja feito pela retarguarda do alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "70", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +62%
Duração: 34 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +64%
Duração: 38 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +66%
Duração: 42 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +68%
Duração: 46 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +70%
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "61" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +72%
Duração: 54 Seg.", "#{skillfactor}#": "100", "sp": "67" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +74%
Duração: 58 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +76%
Duração: 62 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +78%
Duração: 66 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +80%
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "91" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +82%
Duração: 74 Seg.", "#{skillfactor}#": "100", "sp": "97" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +84%
Duração: 78 Seg.", "#{skillfactor}#": "100", "sp": "103" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +86%
Duração: 82 Seg.", "#{skillfactor}#": "100", "sp": "109" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +88%
Duração: 86 Seg.", "#{skillfactor}#": "100", "sp": "115" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Chance de Crítico: +90%
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "121" }, } }, "rogue_feint": { "id": "122", "ident": "rogue_feint", "name": "Feint", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer7_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_7_1.mp4", "desc": "
<\/div>
Engana o inimigo forçando-o olhara para outro lugar enquanto é atacado.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -10%
Alvos: 3
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -20%
Alvos: 4
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -30%
Alvos: 5
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -40%
Alvos: 6
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -50%
Alvos: 7
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -60%
Alvos: 8
Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -70%
Alvos: 9
Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -80%
Alvos: 10
Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -90%
Alvos: 11
Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -100%
Alvos: 12
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -110%
Alvos: 13
Duração: 32 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -120%
Alvos: 14
Duração: 34 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -130%
Alvos: 15
Duração: 36 Seg.", "#{skillfactor}#": "100", "sp": "95" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -140%
Alvos: 16
Duração: 38 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: -150%
Alvos: 17
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "105" }, } }, "rogue_vendetta": { "id": "123", "ident": "rogue_vendetta", "name": "Vendetta", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer7_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_7_2.mp4", "desc": "
<\/div>
Carrega um ataque de arco em que caso destrua o alvo, o personagem terá um bônus temporário de poder de ataque.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'ArcoBestaEscudo', "levellist": { "1": { "#{skillatkadd}#": "284", "#{skillefect}#": "Dano do Atributo: 0%
STR: +5 
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "2": { "#{skillatkadd}#": "366", "#{skillefect}#": "Dano do Atributo: 0%
STR: +10 
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "3": { "#{skillatkadd}#": "448", "#{skillefect}#": "Dano do Atributo: 0%
STR: +15 
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "530", "#{skillefect}#": "Dano do Atributo: 0%
STR: +20 
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "5": { "#{skillatkadd}#": "612", "#{skillefect}#": "Dano do Atributo: 0%
STR: +25 
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "6": { "#{skillatkadd}#": "694", "#{skillefect}#": "Dano do Atributo: 0%
STR: +30 
Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "7": { "#{skillatkadd}#": "776", "#{skillefect}#": "Dano do Atributo: 0%
STR: +35 
Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "8": { "#{skillatkadd}#": "858", "#{skillefect}#": "Dano do Atributo: 0%
STR: +40 
Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "9": { "#{skillatkadd}#": "940", "#{skillefect}#": "Dano do Atributo: 0%
STR: +45 
Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "86" }, "10": { "#{skillatkadd}#": "1022", "#{skillefect}#": "Dano do Atributo: 0%
STR: +50 
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "92" }, "11": { "#{skillatkadd}#": "1104", "#{skillefect}#": "Dano do Atributo: 0%
STR: +55 
Duração: 32 Seg.", "#{skillfactor}#": "100", "sp": "98" }, "12": { "#{skillatkadd}#": "1186", "#{skillefect}#": "Dano do Atributo: 0%
STR: +60 
Duração: 34 Seg.", "#{skillfactor}#": "100", "sp": "104" }, "13": { "#{skillatkadd}#": "1268", "#{skillefect}#": "Dano do Atributo: 0%
STR: +65 
Duração: 36 Seg.", "#{skillfactor}#": "100", "sp": "110" }, "14": { "#{skillatkadd}#": "1350", "#{skillefect}#": "Dano do Atributo: 0%
STR: +70 
Duração: 38 Seg.", "#{skillfactor}#": "100", "sp": "116" }, "15": { "#{skillatkadd}#": "1432", "#{skillefect}#": "Dano do Atributo: 0%
STR: +75 
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "122" }, } }, "rogue_capture": { "id": "124", "ident": "rogue_capture", "name": "Capture", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer7_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_7_3.mp4", "desc": "
<\/div>
Rouba a habilidade que o inimigo use podendo usá-la logo depois no mesmo local.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "300", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 1 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 2 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 3 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 4 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 5 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 6 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "70" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 7 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "76" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 8 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "82" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 9 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "88" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 10 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "94" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 11 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "100" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 12 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "106" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 13 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "112" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 14 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "118" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Obtém 15 círculo mágico do inimigo", "#{skillfactor}#": "100", "sp": "124" }, } }, "rogue_evasion": { "id": "125", "ident": "rogue_evasion", "name": "Evasion", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer7_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_7_4.mp4", "desc": "
<\/div>
Aumenta a evasão.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "90", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +10%
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +20%
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +30%
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +40%
Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +50%
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +60%
Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +70%
Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +80%
Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "81" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +90%
Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Evasão: +100%
Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "93" }, } }, "rogue_burrow": { "id": "126", "ident": "rogue_burrow", "name": "Burrow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer7_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_7_5.mp4", "desc": "
<\/div>
Se esconde debaixo da terra podendo atacar mas sendo impossível se mover.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Taxa de Crítico da Habilidade: +5%", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Taxa de Crítico da Habilidade: +10%", "#{skillfactor}#": "100", "sp": "48" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Taxa de Crítico da Habilidade: +15%", "#{skillfactor}#": "100", "sp": "54" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Taxa de Crítico da Habilidade: +20%", "#{skillfactor}#": "100", "sp": "60" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Taxa de Crítico da Habilidade: +25%", "#{skillfactor}#": "100", "sp": "66" }, } }, "rogue_lachrymator": { "id": "127", "ident": "rogue_lachrymator", "name": "Lachrymator", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer7_6.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_7_6.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Lança uma bomba de gás lacrimogêneo que causa Cegueira ao alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "112", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 8 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 9 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 10 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 11 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 12 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 13 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 14 Seg.", "#{skillfactor}#": "100", "sp": "77" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 15 Seg.", "#{skillfactor}#": "100", "sp": "83" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 16 Seg.", "#{skillfactor}#": "100", "sp": "89" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Lacrimogéneo: 17 Seg.", "#{skillfactor}#": "100", "sp": "95" }, } }, "rogue_backstab": { "id": "128", "ident": "rogue_backstab", "name": "Backstab", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer7_7.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_7_7.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Usa a adaga para dar um ataque duplo com altas chances de crítico e consequentemente atordoar o alvo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "34", "element": "none", "reqstance": 'BestaAdaga', "levellist": { "1": { "#{skillatkadd}#": "461", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 52%", "#{skillfactor}#": "100", "sp": "43" }, "2": { "#{skillatkadd}#": "574", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 54%", "#{skillfactor}#": "100", "sp": "49" }, "3": { "#{skillatkadd}#": "687", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 56%", "#{skillfactor}#": "100", "sp": "55" }, "4": { "#{skillatkadd}#": "800", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 58%", "#{skillfactor}#": "100", "sp": "61" }, "5": { "#{skillatkadd}#": "913", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 60%", "#{skillfactor}#": "100", "sp": "67" }, "6": { "#{skillatkadd}#": "1026", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 62%", "#{skillfactor}#": "100", "sp": "73" }, "7": { "#{skillatkadd}#": "1139", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 64%", "#{skillfactor}#": "100", "sp": "79" }, "8": { "#{skillatkadd}#": "1252", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 66%", "#{skillfactor}#": "100", "sp": "85" }, "9": { "#{skillatkadd}#": "1365", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 68%", "#{skillfactor}#": "100", "sp": "91" }, "10": { "#{skillatkadd}#": "1478", "#{skillefect}#": "Dano do Atributo: 0%
Golpeia 2 vezes
Chance de Crítico: 70%", "#{skillfactor}#": "100", "sp": "97" }, } }, "fletcher_broadhead": { "id": "129", "ident": "fletcher_broadhead", "name": "Broadhead", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer8_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_8_0.mp4", "desc": "

[Físico] - [Perfurante]<\/div>
Atira uma flecha na cabeça do inimigo causando sangramento.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "38", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaPistolaCanhão', "levellist": { "1": { "#{skillatkadd}#": "314", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 5.5 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "411", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 6 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "508", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 6.5 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "605", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 7 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "702", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 7.5 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "799", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 8 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "896", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 8.5 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "65" }, "8": { "#{skillatkadd}#": "993", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 9 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "1090", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 9.5 Seg.Consume 1 Ponta de Flechae Damage: 0%
Duração do Sangramento: 10 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "80" }, "11": { "#{skillatkadd}#": "1284", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 10.5 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "85" }, "12": { "#{skillatkadd}#": "1381", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 11 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "90" }, "13": { "#{skillatkadd}#": "1478", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 11.5 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "95" }, "14": { "#{skillatkadd}#": "1575", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 12 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "100" }, "15": { "#{skillatkadd}#": "1672", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Sangramento: 12.5 Seg.
Consume 1 Ponta de Flecha", "#{skillfactor}#": "100", "sp": "105" }, } }, "fletcher_bodkin-point": { "id": "130", "ident": "fletcher_bodkin-point", "name": "Bodkin Point", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer8_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_8_1.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Atira uma flecha que penetra a armadura do alvo causando mais dano subsequente.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "45", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaPistolaCanhão', "levellist": { "1": { "#{skillatkadd}#": "384", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -5% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "474", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -10% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "43" }, "3": { "#{skillatkadd}#": "564", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -15% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "49" }, "4": { "#{skillatkadd}#": "654", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -20% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "744", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -25% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "61" }, "6": { "#{skillatkadd}#": "834", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -30% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "67" }, "7": { "#{skillatkadd}#": "924", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -35% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "73" }, "8": { "#{skillatkadd}#": "1014", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -40% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "79" }, "9": { "#{skillatkadd}#": "1104", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -45% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "85" }, "10": { "#{skillatkadd}#": "1194", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -50% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "91" }, "11": { "#{skillatkadd}#": "1284", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -55% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "97" }, "12": { "#{skillatkadd}#": "1374", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -60% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "103" }, "13": { "#{skillatkadd}#": "1464", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -65% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "109" }, "14": { "#{skillatkadd}#": "1554", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -70% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "115" }, "15": { "#{skillatkadd}#": "1644", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: -75% 
Remove Escudos Refletores
Consume 1 Flecha Penetrante", "#{skillfactor}#": "100", "sp": "121" }, } }, "fletcher_barbed-arrow": { "id": "131", "ident": "fletcher_barbed-arrow", "name": "Barbed Arrow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer8_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_8_2.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Atira uma flecha com farpas que ao acertar o inimigo causa múltiplos danos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "52", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaPistolaCanhão', "levellist": { "1": { "#{skillatkadd}#": "434", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "527", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "43" }, "3": { "#{skillatkadd}#": "620", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "49" }, "4": { "#{skillatkadd}#": "713", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "806", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "61" }, "6": { "#{skillatkadd}#": "899", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "67" }, "7": { "#{skillatkadd}#": "992", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "73" }, "8": { "#{skillatkadd}#": "1085", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "79" }, "9": { "#{skillatkadd}#": "1178", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "85" }, "10": { "#{skillatkadd}#": "1271", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "91" }, "11": { "#{skillatkadd}#": "1364", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "97" }, "12": { "#{skillatkadd}#": "1457", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "103" }, "13": { "#{skillatkadd}#": "1550", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "109" }, "14": { "#{skillatkadd}#": "1643", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "115" }, "15": { "#{skillatkadd}#": "1736", "#{skillefect}#": "Dano do Atributo: 0%
Alvos com Armadura de Pano: 3 golpes
Alvos com Armadura de Couro: 2 golpes
Alvos com Armadura de Ferro 1 Golpe
Alvos com Armadura de Fantasma: Nenhum
Consume 1 Flecha Farpada", "#{skillfactor}#": "100", "sp": "121" }, } }, "fletcher_crossfire": { "id": "132", "ident": "fletcher_crossfire", "name": "Crossfire", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer8_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_8_3.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Atira uma flecha de fogo que se abater o alvo causa uma explosão de chamas.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaPistolaCanhão', "levellist": { "1": { "#{skillatkadd}#": "324", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:80%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "416", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:85%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "508", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:90%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "600", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:95%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "692", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:100%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "784", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:105%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "70" }, "7": { "#{skillatkadd}#": "876", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:110%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "76" }, "8": { "#{skillatkadd}#": "968", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:115%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "82" }, "9": { "#{skillatkadd}#": "1060", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:120%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "88" }, "10": { "#{skillatkadd}#": "1152", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:125%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "94" }, "11": { "#{skillatkadd}#": "1244", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:130%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "100" }, "12": { "#{skillatkadd}#": "1336", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:135%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "106" }, "13": { "#{skillatkadd}#": "1428", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:140%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "112" }, "14": { "#{skillatkadd}#": "1520", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:145%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "118" }, "15": { "#{skillatkadd}#": "1612", "#{skillefect}#": "Dano do Atributo: 0%
Bonus de Ataque por Explosão:150%
Consume 1 Flecha Sagrada", "#{skillfactor}#": "100", "sp": "124" }, } }, "fletcher_magic-arrow": { "id": "133", "ident": "fletcher_magic-arrow", "name": "Magic Arrow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer8_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_8_4.mp4", "desc": "
[Mágico]<\/div>
Atira uma flecha de fogo (mágico) que causa múltiplos danos explodindo o alvo em chamas.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaPistolaCanhão', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 7
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 9
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "48" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 11
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "54" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 13
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "60" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 15
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "66" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 17
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "72" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 19
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "78" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 21
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "84" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 23
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "90" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Contagem de Ataque: 25
Consume 1 Flecha Mágica", "#{skillfactor}#": "100", "sp": "96" }, } }, "fletcher_divine-machine-arrow": { "id": "134", "ident": "fletcher_divine-machine-arrow", "name": "Divine Machine Arrow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer8_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_8_5.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Atira uma flecha que ao penetrar o alvo causa dano em projeção aos 2 lados do alvo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "61", "element": "none", "reqstance": 'ArcoBestaEscudoAdagaPistolaCanhão', "levellist": { "1": { "#{skillatkadd}#": "390", "#{skillefect}#": "Bonus de Ataque: + 200%
Dano do Atributo: 0%
Duração: 10 Seg.
Consume 1 Flecha Divina", "#{skillfactor}#": "100", "sp": "44" }, "2": { "#{skillatkadd}#": "524", "#{skillefect}#": "Bonus de Ataque: + 200%
Dano do Atributo: 0%
Duração: 10 Seg.
Consume 1 Flecha Divina", "#{skillfactor}#": "100", "sp": "50" }, "3": { "#{skillatkadd}#": "658", "#{skillefect}#": "Bonus de Ataque: + 200%
Dano do Atributo: 0%
Duração: 10 Seg.
Consume 1 Flecha Divina", "#{skillfactor}#": "100", "sp": "56" }, "4": { "#{skillatkadd}#": "792", "#{skillefect}#": "Bonus de Ataque: + 200%
Dano do Atributo: 0%
Duração: 10 Seg.
Consume 1 Flecha Divina", "#{skillfactor}#": "100", "sp": "62" }, "5": { "#{skillatkadd}#": "926", "#{skillefect}#": "Bonus de Ataque: + 200%
Dano do Atributo: 0%
Duração: 10 Seg.
Consume 1 Flecha Divina", "#{skillfactor}#": "100", "sp": "68" }, } }, "falconer_call": { "id": "135", "ident": "falconer_call", "name": "Call", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer9_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_9_0.mp4", "desc": "
<\/div>
Chama o seu falcão para perto.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "20" }, } }, "falconer_roost": { "id": "136", "ident": "falconer_roost", "name": "Roost", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer9_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_9_1.mp4", "desc": "
<\/div>
Instala um poleiro no chão onde o falcao pode pousar.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Alcance: 100
Duração: 120 Seg.", "#{skillfactor}#": "100", "sp": "27" }, } }, "falconer_circling": { "id": "137", "ident": "falconer_circling", "name": "Circling", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer9_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_9_2.mp4", "desc": "
<\/div>
Ordena que o falcão voe em volta de uma certa área. Inimigos nessa área terão a defesa diminuída.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "75", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -1 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -2 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -3 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -4 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -5 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -6 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -7 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -8 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -9 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -10 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -11 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -12 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -13 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "95" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -14 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Raio de Defesa em Área: -15 
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "105" }, } }, "falconer_hovering": { "id": "138", "ident": "falconer_hovering", "name": "Hovering", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer9_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_9_3.mp4", "desc": "
<\/div>
Ordena que o falcão paire em uma certa área. Uma vez que o alvo seja definido, o falcão alça vôo para depois descer causando dano em cada inimigo da área.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "75", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "430", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "2": { "#{skillatkadd}#": "562", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "694", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "826", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "5": { "#{skillatkadd}#": "958", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "6": { "#{skillatkadd}#": "1090", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "7": { "#{skillatkadd}#": "1222", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "8": { "#{skillatkadd}#": "1354", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "9": { "#{skillatkadd}#": "1486", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "10": { "#{skillatkadd}#": "1618", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "11": { "#{skillatkadd}#": "1750", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "12": { "#{skillatkadd}#": "1882", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "89" }, "13": { "#{skillatkadd}#": "2014", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "94" }, "14": { "#{skillatkadd}#": "2146", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "99" }, "15": { "#{skillatkadd}#": "2278", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "104" }, } }, "falconer_pheasant": { "id": "139", "ident": "falconer_pheasant", "name": "Pheasant", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer9_4.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_9_4.mp4", "desc": "
<\/div>
Joga uma boneca de treino de falcão em uma certa área. Logo após isso o falcão entrará em queda livre indo em busca da boneca causando dano em todos os inimigos da área.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "520", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "38" }, "2": { "#{skillatkadd}#": "660", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "43" }, "3": { "#{skillatkadd}#": "800", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "48" }, "4": { "#{skillatkadd}#": "940", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "53" }, "5": { "#{skillatkadd}#": "1080", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "58" }, "6": { "#{skillatkadd}#": "1220", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "63" }, "7": { "#{skillatkadd}#": "1360", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "68" }, "8": { "#{skillatkadd}#": "1500", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "73" }, "9": { "#{skillatkadd}#": "1640", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "78" }, "10": { "#{skillatkadd}#": "1780", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "83" }, "11": { "#{skillatkadd}#": "1920", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "88" }, "12": { "#{skillatkadd}#": "2060", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "93" }, "13": { "#{skillatkadd}#": "2200", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "98" }, "14": { "#{skillatkadd}#": "2340", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "103" }, "15": { "#{skillatkadd}#": "2480", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "108" }, } }, "falconer_hanging-shot": { "id": "140", "ident": "falconer_hanging-shot", "name": "Hanging Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer9_5.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_9_5.mp4", "desc": "
<\/div>
O falcão pega o Falcoeiro pelas garras alçando vôo. Uma vez que esteja no ar, o Falcoeiro poderá realizar ataques básicos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "100", "element": "none", "reqstance": 'ArcoBestaEscudo', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "76" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "88" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "94" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "106" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 27 Seg.", "#{skillfactor}#": "100", "sp": "112" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "118" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 29 Seg.", "#{skillfactor}#": "100", "sp": "124" }, } }, "schwarzereiter_concentrated-fire": { "id": "141", "ident": "schwarzereiter_concentrated-fire", "name": "Concentrated Fire", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer10_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_10_0.mp4", "desc": "
[Físico] - [Contusão]<\/div>
Concentra o tiro que ao ser liberado efetua vários disparos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "45", "element": "none", "reqstance": 'BestaPistola', "levellist": { "1": { "#{skillatkadd}#": "320", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "417", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "514", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "611", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "708", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "805", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "70" }, "7": { "#{skillatkadd}#": "902", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "76" }, "8": { "#{skillatkadd}#": "999", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "82" }, "9": { "#{skillatkadd}#": "1096", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "88" }, "10": { "#{skillatkadd}#": "1193", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "94" }, "11": { "#{skillatkadd}#": "1290", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "100" }, "12": { "#{skillatkadd}#": "1387", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "106" }, "13": { "#{skillatkadd}#": "1484", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "112" }, "14": { "#{skillatkadd}#": "1581", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "118" }, "15": { "#{skillatkadd}#": "1678", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "124" }, } }, "schwarzereiter_caracole": { "id": "142", "ident": "schwarzereiter_caracole", "name": "Caracole", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer10_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_10_1.mp4", "desc": "
[Físico] - [Contusão]<\/div>
Efetua um disparo que lança o personagem para trás.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "52", "element": "none", "reqstance": 'BestaPistola', "levellist": { "1": { "#{skillatkadd}#": "475", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "588", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "701", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "814", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "927", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "73" }, "6": { "#{skillatkadd}#": "1040", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "1153", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "87" }, "8": { "#{skillatkadd}#": "1266", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "94" }, "9": { "#{skillatkadd}#": "1379", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "101" }, "10": { "#{skillatkadd}#": "1492", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "108" }, "11": { "#{skillatkadd}#": "1605", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "115" }, "12": { "#{skillatkadd}#": "1718", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "122" }, "13": { "#{skillatkadd}#": "1831", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "129" }, "14": { "#{skillatkadd}#": "1944", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "136" }, "15": { "#{skillatkadd}#": "2057", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "143" }, } }, "schwarzereiter_limacon": { "id": "143", "ident": "schwarzereiter_limacon", "name": "Limacon", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer10_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_10_2.mp4", "desc": "
[Físico] - [Contusão]<\/div>
Efetua um disparo que dá mobilidade ao atirador.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'BestaPistola', "levellist": { "1": { "#{skillatkadd}#": "365", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "38" }, "2": { "#{skillatkadd}#": "438", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "44" }, "3": { "#{skillatkadd}#": "511", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "584", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "56" }, "5": { "#{skillatkadd}#": "657", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "62" }, "6": { "#{skillatkadd}#": "730", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "68" }, "7": { "#{skillatkadd}#": "803", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "74" }, "8": { "#{skillatkadd}#": "876", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "80" }, "9": { "#{skillatkadd}#": "949", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "86" }, "10": { "#{skillatkadd}#": "1022", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "92" }, "11": { "#{skillatkadd}#": "1095", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "98" }, "12": { "#{skillatkadd}#": "1168", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "104" }, "13": { "#{skillatkadd}#": "1241", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "110" }, "14": { "#{skillatkadd}#": "1314", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "116" }, "15": { "#{skillatkadd}#": "1387", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "122" }, } }, "schwarzereiter_retreat-shot": { "id": "144", "ident": "schwarzereiter_retreat-shot", "name": "Retreat Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer10_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_10_3.mp4", "desc": "
[Físico] - [Contusão]<\/div>
Possibilita que disparos seja efetuado com o personagem de costas para a frente da montaria.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "52", "element": "none", "reqstance": 'BestaPistola', "levellist": { "1": { "#{skillatkadd}#": "321", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "48" }, "2": { "#{skillatkadd}#": "418", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "56" }, "3": { "#{skillatkadd}#": "515", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "64" }, "4": { "#{skillatkadd}#": "612", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "72" }, "5": { "#{skillatkadd}#": "709", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "80" }, "6": { "#{skillatkadd}#": "806", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "88" }, "7": { "#{skillatkadd}#": "903", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "96" }, "8": { "#{skillatkadd}#": "1000", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "104" }, "9": { "#{skillatkadd}#": "1097", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "112" }, "10": { "#{skillatkadd}#": "1194", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "120" }, "11": { "#{skillatkadd}#": "1291", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "128" }, "12": { "#{skillatkadd}#": "1388", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "136" }, "13": { "#{skillatkadd}#": "1485", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "144" }, "14": { "#{skillatkadd}#": "1582", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "152" }, "15": { "#{skillatkadd}#": "1679", "#{skillefect}#": "Dano do Atributo: 0%
Capaz de usar enquanto montado", "#{skillfactor}#": "100", "sp": "160" }, } }, "wizard_energy-bolt": { "id": "145", "ident": "wizard_energy-bolt", "name": "Energy Bolt", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard0_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_0_0.mp4", "desc": "
[Mágico]<\/div>
Um forte ataque mágico.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "9", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "34", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "15" }, "2": { "#{skillatkadd}#": "43", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "18" }, "3": { "#{skillatkadd}#": "52", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "21" }, "4": { "#{skillatkadd}#": "61", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "24" }, "5": { "#{skillatkadd}#": "70", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "27" }, "6": { "#{skillatkadd}#": "79", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "30" }, "7": { "#{skillatkadd}#": "88", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "33" }, "8": { "#{skillatkadd}#": "97", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "36" }, "9": { "#{skillatkadd}#": "106", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "39" }, "10": { "#{skillatkadd}#": "115", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "42" }, "11": { "#{skillatkadd}#": "124", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "45" }, "12": { "#{skillatkadd}#": "133", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "48" }, "13": { "#{skillatkadd}#": "142", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "51" }, "14": { "#{skillatkadd}#": "151", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "54" }, "15": { "#{skillatkadd}#": "160", "#{skillefect}#": "Dano do Atributo: 0%
Tempo de Conjuração: 1 seg.
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "57" }, } }, "wizard_lethargy": { "id": "146", "ident": "wizard_lethargy", "name": "Lethargy", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard0_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_0_1.mp4", "desc": "
<\/div>
Reduz o poder de ataque, precisão e evasão do alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "18", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -6
Bonus de Ataque Mágico:-6
Evasão: -4
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "11" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -9
Bonus de Ataque Mágico:-9
Evasão: -6
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "15" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -12
Bonus de Ataque Mágico:-12
Evasão: -8
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "19" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -15
Bonus de Ataque Mágico:-15
Evasão: -10
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "23" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -18
Bonus de Ataque Mágico:-18
Evasão: -12
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -21
Bonus de Ataque Mágico:-21
Evasão: -14
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -24
Bonus de Ataque Mágico:-24
Evasão: -16
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -27
Bonus de Ataque Mágico:-27
Evasão: -18
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -30
Bonus de Ataque Mágico:-30
Evasão: -20
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -33
Bonus de Ataque Mágico:-33
Evasão: -22
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -36
Bonus de Ataque Mágico:-36
Evasão: -24
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -39
Bonus de Ataque Mágico:-39
Evasão: -26
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -42
Bonus de Ataque Mágico:-42
Evasão: -28
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -45
Bonus de Ataque Mágico:-45
Evasão: -30
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: -48
Bonus de Ataque Mágico:-48
Evasão: -32
[Letargia] Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "67" }, } }, "wizard_sleep": { "id": "147", "ident": "wizard_sleep", "name": "Sleep", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard0_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_0_2.mp4", "desc": "
<\/div>
Coloca um inimigo temporariamente em estado de dormência. Golpeá-lo o acordará.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 3 Seg.
Limite de Ataque: 1", "#{skillfactor}#": "100", "sp": "16" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 4 Seg.
Limite de Ataque: 2", "#{skillfactor}#": "100", "sp": "20" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 5 Seg.
Limite de Ataque: 3", "#{skillfactor}#": "100", "sp": "24" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 6 Seg.
Limite de Ataque: 4", "#{skillfactor}#": "100", "sp": "28" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 7 Seg.
Limite de Ataque: 5", "#{skillfactor}#": "100", "sp": "32" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 8 Seg.
Limite de Ataque: 6", "#{skillfactor}#": "100", "sp": "36" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 9 Seg.
Limite de Ataque: 7", "#{skillfactor}#": "100", "sp": "40" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 10 Seg.
Limite de Ataque: 8", "#{skillfactor}#": "100", "sp": "44" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 11 Seg.
Limite de Ataque: 9", "#{skillfactor}#": "100", "sp": "48" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 12 Seg.
Limite de Ataque: 10", "#{skillfactor}#": "100", "sp": "52" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 13 Seg.
Limite de Ataque: 11", "#{skillfactor}#": "100", "sp": "56" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 14 Seg.
Limite de Ataque: 12", "#{skillfactor}#": "100", "sp": "60" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 15 Seg.
Limite de Ataque: 13", "#{skillfactor}#": "100", "sp": "64" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 16 Seg.
Limite de Ataque: 14", "#{skillfactor}#": "100", "sp": "68" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "[Sono] Duração: 17 Seg.
Limite de Ataque: 15", "#{skillfactor}#": "100", "sp": "72" }, } }, "wizard_reflect-shield": { "id": "148", "ident": "wizard_reflect-shield", "name": "Reflect Shield", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard0_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_0_3.mp4", "desc": "
<\/div>
Cria um escudo mágico que reflete os ataques.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "41", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (5 + SPR)
Duração: 25 Seg.
Reflete 2 vezes", "#{skillfactor}#": "100", "sp": "17" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (10 + SPR)
Duração: 30 Seg.
Reflete 2 vezes", "#{skillfactor}#": "100", "sp": "21" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (15 + SPR)
Duração: 35 Seg.
Reflects 3 vezes", "#{skillfactor}#": "100", "sp": "25" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (20 + SPR)
Duração: 40 Seg.
Reflects 3 vezes", "#{skillfactor}#": "100", "sp": "29" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (25 + SPR)
Duração: 45 Seg.
Reflects 4 vezes", "#{skillfactor}#": "100", "sp": "33" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (30 + SPR)
Duração: 50 Seg.
Reflects 4 vezes", "#{skillfactor}#": "100", "sp": "37" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (35 + SPR)
Duração: 55 Seg.
Reflects 5 vezes", "#{skillfactor}#": "100", "sp": "41" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (40 + SPR)
Duração: 60 Seg.
Reflects 5 vezes", "#{skillfactor}#": "100", "sp": "45" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (45 + SPR)
Duração: 65 Seg.
Reflects 6 vezes", "#{skillfactor}#": "100", "sp": "49" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (50 + SPR)
Duração: 70 Seg.
Reflects 6 vezes", "#{skillfactor}#": "100", "sp": "53" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (55 + SPR)
Duração: 75 Seg.
Reflects 7 vezes", "#{skillfactor}#": "100", "sp": "57" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (60 + SPR)
Duração: 80 Seg.
Reflects 7 vezes", "#{skillfactor}#": "100", "sp": "61" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (65 + SPR)
Duração: 85 Seg.
Reflects 8 vezes", "#{skillfactor}#": "100", "sp": "65" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (70 + SPR)
Duração: 90 Seg.
Reflects 8 vezes", "#{skillfactor}#": "100", "sp": "69" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Refletido: (75 + SPR)
Duração: 95 Seg.
Reflects 9 times", "#{skillfactor}#": "100", "sp": "73" }, } }, "wizard_earthquake": { "id": "149", "ident": "wizard_earthquake", "name": "Earthquake", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard0_4.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_0_4.mp4", "desc": "
[Mágico] - [Terra]<\/div>Um poderosa habilidade de elemento terra que causará dano aos inimigos.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "17", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "86", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "107", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "24" }, "3": { "#{skillatkadd}#": "128", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "149", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "170", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "191", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "40" }, "7": { "#{skillatkadd}#": "212", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "44" }, "8": { "#{skillatkadd}#": "233", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "48" }, "9": { "#{skillatkadd}#": "254", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "52" }, "10": { "#{skillatkadd}#": "275", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "56" }, "11": { "#{skillatkadd}#": "296", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "60" }, "12": { "#{skillatkadd}#": "317", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "64" }, "13": { "#{skillatkadd}#": "338", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "68" }, "14": { "#{skillatkadd}#": "359", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "72" }, "15": { "#{skillatkadd}#": "380", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 4", "#{skillfactor}#": "100", "sp": "76" }, } }, "wizard_surespell": { "id": "150", "ident": "wizard_surespell", "name": "Surespell", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard0_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_0_5.mp4", "desc": "
<\/div>
Faz com que a próxima habilidade seja ininterrupta.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "56" }, } }, "wizard_magic-missile": { "id": "151", "ident": "wizard_magic-missile", "name": "Magic Missile", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard0_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_0_6.mp4", "desc": "
[Mágico]<\/div>
Conjura vários disparos mágicos que perseguem o inimigo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "17", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "150", "#{skillefect}#": "Dano do Atributo: 0%
Total de Mísseis 1", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "184", "#{skillefect}#": "Dano do Atributo: 0%
Total de Mísseis 2", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "218", "#{skillefect}#": "Dano do Atributo: 0%
Total de Mísseis 3", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "252", "#{skillefect}#": "Dano do Atributo: 0%
Total de Mísseis 4", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "286", "#{skillefect}#": "Dano do Atributo: 0%
Total de Mísseis 5", "#{skillfactor}#": "100", "sp": "39" }, } }, "wizard_quick-cast": { "id": "152", "ident": "wizard_quick-cast", "name": "Quick Cast", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard0_7.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_0_7.mp4", "desc": "
<\/div>
Reduz o tempo de conjuração da próxima habilidade.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "13", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Conjuração -10%
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "25" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Conjuração -20%
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "29" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Conjuração -30%
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Conjuração -40%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Conjuração -50%
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "41" }, } }, "pyromancer_fireball": { "id": "153", "ident": "pyromancer_fireball", "name": "Fireball", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard1_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_1_0.mp4", "desc": "
[Mágico] - [Fogo]<\/div>
Conjura uma esfera flamejante que caso não encontre um alvo primário, é posta ao chão. Causa dano aos inimigos que passarem por sua área de efeito.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "75", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 1
Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "97", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 2
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "119", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 3
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "141", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 4
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "163", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 5
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "6": { "#{skillatkadd}#": "185", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 6
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "7": { "#{skillatkadd}#": "207", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 7
Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "8": { "#{skillatkadd}#": "229", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 8
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "9": { "#{skillatkadd}#": "251", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 9
Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "10": { "#{skillatkadd}#": "273", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 10
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "11": { "#{skillatkadd}#": "295", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 11
Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "12": { "#{skillatkadd}#": "317", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 12
Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "13": { "#{skillatkadd}#": "339", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 13
Duração: 85 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "14": { "#{skillatkadd}#": "361", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 14
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "15": { "#{skillatkadd}#": "383", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 15
Duração: 95 Seg.", "#{skillfactor}#": "100", "sp": "78" }, } }, "pyromancer_fire-wall": { "id": "154", "ident": "pyromancer_fire-wall", "name": "Fire Wall", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard1_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_1_1.mp4", "desc": "
[Mágico] - [Fogo]<\/div>
Conjura uma barreira flamejante por X quadrados que causa dano constante nos inimigos que tentarem ultrapassá-la.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "45", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 1
Número de Golpes: 3
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 2
Número de Golpes: 4
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 2
Número de Golpes: 5
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 3
Número de Golpes: 6
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 3
Número de Golpes: 7
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 4
Número de Golpes: 8
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 4
Número de Golpes: 9
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 5
Número de Golpes: 10
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 5
Número de Golpes: 11
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 6
Número de Golpes: 12
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 6
Número de Golpes: 13
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 7
Número de Golpes: 14
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "96" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 7
Número de Golpes: 15
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "102" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 8
Número de Golpes: 16
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Número de Colunas: 8
Número de Golpes: 17
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "114" }, } }, "pyromancer_enchant-fire": { "id": "155", "ident": "pyromancer_enchant-fire", "name": "Enchant Fire", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard1_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_1_2.mp4", "desc": "
[Efeito] - [Fogo]<\/div>
Adiciona o elemento fogo à arma.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "110", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +7
Dano Adicional: +7
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +9
Dano Adicional: +9
Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +11
Dano Adicional: +11
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +13
Dano Adicional: +13
Duração: 100 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +15
Dano Adicional: +15
Duração: 110 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +17
Dano Adicional: +17
Duração: 120 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +19
Dano Adicional: +19
Duração: 130 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +21
Dano Adicional: +21
Duração: 140 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +22
Dano Adicional: +22
Duração: 150 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +24
Dano Adicional: +24
Duração: 160 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +26
Dano Adicional: +26
Duração: 170 Seg.", "#{skillfactor}#": "100", "sp": "67" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +28
Dano Adicional: +28
Duração: 180 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +30
Dano Adicional: +30
Duração: 190 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +32
Dano Adicional: +32
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque Tipo Fogo: +34
Dano Adicional: +34
Duração: 210 Seg.", "#{skillfactor}#": "100", "sp": "83" }, } }, "pyromancer_flare": { "id": "156", "ident": "pyromancer_flare", "name": "Flare", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard1_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_1_3.mp4", "desc": "

[Mágico] - [Fogo]<\/div>
Faz com que inimigos com que estejam com o status Queimando explodam causando dano aos inimigos próximos. ", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "95", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "119", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "143", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "167", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "191", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "6": { "#{skillatkadd}#": "215", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "43" }, "7": { "#{skillatkadd}#": "239", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "47" }, "8": { "#{skillatkadd}#": "263", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "51" }, "9": { "#{skillatkadd}#": "287", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "10": { "#{skillatkadd}#": "311", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "11": { "#{skillatkadd}#": "335", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "63" }, "12": { "#{skillatkadd}#": "359", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "67" }, "13": { "#{skillatkadd}#": "383", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "71" }, "14": { "#{skillatkadd}#": "407", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "75" }, "15": { "#{skillatkadd}#": "431", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "79" }, } }, "pyromancer_fire-pillar": { "id": "157", "ident": "pyromancer_fire-pillar", "name": "Fire Pillar", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard1_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_1_4.mp4", "desc": "

[Mágico] - [Fogo]<\/div>
Conjura um pilar de chamas que causa dano nos inimigos em volta.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "135", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "41", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "57", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 9 second", "#{skillfactor}#": "100", "sp": "37" }, "3": { "#{skillatkadd}#": "73", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "89", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "5": { "#{skillatkadd}#": "105", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "6": { "#{skillatkadd}#": "121", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "7": { "#{skillatkadd}#": "137", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "8": { "#{skillatkadd}#": "153", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "9": { "#{skillatkadd}#": "169", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "86" }, "10": { "#{skillatkadd}#": "185", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "93" }, } }, "pyromancer_hell-breath": { "id": "158", "ident": "pyromancer_hell-breath", "name": "Hell Breath", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard1_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_1_5.mp4", "desc": "
[Mágico] - [Fogo]<\/div>
Assopra chamas para frente causando dano massivo nos inimigos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "65", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "77", "#{skillefect}#": "Dano do Atributo: 0%
Consume 3% SP a cada 0.5 seg.", "#{skillfactor}#": "100", "sp": "34" }, "2": { "#{skillatkadd}#": "100", "#{skillefect}#": "Dano do Atributo: 0%
Consume 3% SP a cada 0.5 seg.", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "123", "#{skillefect}#": "Dano do Atributo: 0%
Consume 3% SP a cada 0.5 seg.", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "146", "#{skillefect}#": "Dano do Atributo: 0%
Consume 3% SP a cada 0.5 seg.", "#{skillfactor}#": "100", "sp": "49" }, "5": { "#{skillatkadd}#": "169", "#{skillefect}#": "Dano do Atributo: 0%
Consume 3% SP a cada 0.5 seg.", "#{skillfactor}#": "100", "sp": "54" }, } }, "cryomancer_ice-bolt": { "id": "159", "ident": "cryomancer_ice-bolt", "name": "Ice Bolt", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard2_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_2_0.mp4", "desc": "
[Mágico] - [Gelo]<\/div>
Ataca o inimigo com uma força gélida tendo chance de congelá-lo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "72", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "93", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "114", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "135", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "156", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "6": { "#{skillatkadd}#": "177", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "7": { "#{skillatkadd}#": "198", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "8": { "#{skillatkadd}#": "219", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "9": { "#{skillatkadd}#": "240", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "10": { "#{skillatkadd}#": "261", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "11": { "#{skillatkadd}#": "282", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "12": { "#{skillatkadd}#": "303", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "67" }, "13": { "#{skillatkadd}#": "324", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "14": { "#{skillatkadd}#": "345", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "15": { "#{skillatkadd}#": "366", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "79" }, } }, "cryomancer_ice-pike": { "id": "160", "ident": "cryomancer_ice-pike", "name": "Ice Pike", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard2_1_0721.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_2_1.mp4", "desc": "
[Mágico] - [Gelo]<\/div>
Conjura uma onda de gelo que a cada inimigo que acerta tem a chance de congelá-lo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "103", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "28" }, "2": { "#{skillatkadd}#": "135", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "3": { "#{skillatkadd}#": "167", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "4": { "#{skillatkadd}#": "199", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "5": { "#{skillatkadd}#": "231", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "6": { "#{skillatkadd}#": "263", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "7": { "#{skillatkadd}#": "295", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "8": { "#{skillatkadd}#": "327", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "9": { "#{skillatkadd}#": "359", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "10": { "#{skillatkadd}#": "391", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "11": { "#{skillatkadd}#": "423", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "12": { "#{skillatkadd}#": "455", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "83" }, "13": { "#{skillatkadd}#": "487", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "88" }, "14": { "#{skillatkadd}#": "519", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "93" }, "15": { "#{skillatkadd}#": "551", "#{skillefect}#": "Dano do Atributo: 0%
[Congelado] Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "98" }, } }, "cryomancer_ice-wall": { "id": "161", "ident": "cryomancer_ice-wall", "name": "Ice Wall", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard2_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_2_2.mp4", "desc": "
[Mágico] - [Gelo]<\/div>
Conjura uma barreira de gelo por ", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "6", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 2
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 3
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 4
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 5
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 6
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 7
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 8
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 9
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 10
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 11
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 12
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "89" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 13
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "94" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 14
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "99" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 15
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "104" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Colunas de Gelo: 16
[Congelado] Duração: 5 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "109" }, } }, "cryomancer_ice-blast": { "id": "162", "ident": "cryomancer_ice-blast", "name": "Ice Blast", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard2_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_2_3.mp4", "desc": "

[Mágico] - [Gelo]<\/div>
Explode os inimigos que se encontram em estado Congelado.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "95", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "120", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "145", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "170", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "195", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "6": { "#{skillatkadd}#": "220", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "43" }, "7": { "#{skillatkadd}#": "245", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "47" }, "8": { "#{skillatkadd}#": "270", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "51" }, "9": { "#{skillatkadd}#": "295", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "10": { "#{skillatkadd}#": "320", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "11": { "#{skillatkadd}#": "345", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "63" }, "12": { "#{skillatkadd}#": "370", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "67" }, "13": { "#{skillatkadd}#": "395", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "71" }, "14": { "#{skillatkadd}#": "420", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "75" }, "15": { "#{skillatkadd}#": "445", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "79" }, } }, "cryomancer_subzero-shield": { "id": "163", "ident": "cryomancer_subzero-shield", "name": "Subzero Shield", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard2_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_2_4.mp4", "desc": "

[Mágico] - [Gelo]<\/div>
Por um certo período uma parede de gelo se forma em volta do personagem bloqueando os ataques dos inimigos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "32", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.
Chances de Congelar: 15%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.
Chances de Congelar: 20%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 24 Seg.
Chances de Congelar: 25%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 27 Seg.
Chances de Congelar: 30%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Chances de Congelar: 35%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 33 Seg.
Chances de Congelar: 40%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 36 Seg.
Chances de Congelar: 45%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 39 Seg.
Chances de Congelar: 50%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 42 Seg.
Chances de Congelar: 55%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 45 Seg.
Chances de Congelar: 60%
[Congelado] Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "63" }, } }, "linker_unbind": { "id": "164", "ident": "linker_unbind", "name": "Unbind", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard4_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_4_0.mp4", "desc": "
<\/div>
Desconecta todos os vínculos feitos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Desconecta todos os links de uma só vez.", "#{skillfactor}#": "100", "sp": "27" }, } }, "cryomancer_gust": { "id": "165", "ident": "cryomancer_gust", "name": "Gust", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard2_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_2_5.mp4", "desc": "
<\/div>
Lança ventos fortes que empurram os inimigos causando dano de tipo Gelo com chances de colocar o inimigo em estado Congelado.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "36", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "81", "#{skillefect}#": "[Gelo] Ataques por Alvos 130", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "103", "#{skillefect}#": "[Gelo] Ataques por Alvos 170", "#{skillfactor}#": "100", "sp": "35" }, "3": { "#{skillatkadd}#": "125", "#{skillefect}#": "[Gelo] Ataques por Alvos 211", "#{skillfactor}#": "100", "sp": "40" }, "4": { "#{skillatkadd}#": "147", "#{skillefect}#": "[Gelo] Ataques por Alvos 252", "#{skillfactor}#": "100", "sp": "45" }, "5": { "#{skillatkadd}#": "169", "#{skillefect}#": "[Gelo] Ataques por Alvos 292", "#{skillfactor}#": "100", "sp": "50" }, "6": { "#{skillatkadd}#": "191", "#{skillefect}#": "[Gelo] Ataques por Alvos 333", "#{skillfactor}#": "100", "sp": "55" }, "7": { "#{skillatkadd}#": "213", "#{skillefect}#": "[Gelo] Ataques por Alvos 373", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "235", "#{skillefect}#": "[Gelo] Ataques por Alvos 414", "#{skillfactor}#": "100", "sp": "65" }, "9": { "#{skillatkadd}#": "257", "#{skillefect}#": "[Gelo] Ataques por Alvos 455", "#{skillfactor}#": "100", "sp": "70" }, "10": { "#{skillatkadd}#": "279", "#{skillefect}#": "[Gelo] Ataques por Alvos 495", "#{skillfactor}#": "100", "sp": "75" }, } }, "cryomancer_snow-rolling": { "id": "166", "ident": "cryomancer_snow-rolling", "name": "Snow Rolling", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard2_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_2_6.mp4", "desc": "

[Mágico] - [Gelo]<\/div>
Cria uma bola de neve onde o personagem sobe encima e ao andar causa dano aos inimigos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "68", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "178", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "2": { "#{skillatkadd}#": "225", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 7
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "272", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 8
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "4": { "#{skillatkadd}#": "319", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 9
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "5": { "#{skillatkadd}#": "366", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 10
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "60" }, } }, "psychokino_psychic-pressure": { "id": "167", "ident": "psychokino_psychic-pressure", "name": "Psychic Pressure", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard3_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_3_0.mp4", "desc": "
[Mágico]<\/div>
Usa a psicocinesia para tomar controle da mente dos inimigos, deixando-os incapacitados e deferindo dano.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "109", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 5
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "142", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 6
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "175", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 7
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "208", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 8
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "241", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 9
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "274", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 10
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "307", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 11
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "340", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 12
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "373", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 13
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "406", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 14
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "439", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 15
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "472", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 16
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "505", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 17
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "538", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 18
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "571", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 19
Consume 1% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, } }, "psychokino_telekinesis": { "id": "168", "ident": "psychokino_telekinesis", "name": "Telekinesis", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard3_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_3_1.mp4", "desc": "
[Mágico]<\/div>
Usa psicocinese para controlar o inimigo e usá-lo como arma jogando-o contra outros inimigos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "143", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 1
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "2": { "#{skillatkadd}#": "182", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 1
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "3": { "#{skillatkadd}#": "221", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 2
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "4": { "#{skillatkadd}#": "260", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 2
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "299", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 3
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "6": { "#{skillatkadd}#": "338", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 3
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "7": { "#{skillatkadd}#": "377", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 4
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "8": { "#{skillatkadd}#": "416", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 4
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "9": { "#{skillatkadd}#": "455", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 5
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "10": { "#{skillatkadd}#": "494", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 5
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "11": { "#{skillatkadd}#": "533", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 6
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "83" }, "12": { "#{skillatkadd}#": "572", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 6
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "88" }, "13": { "#{skillatkadd}#": "611", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 7
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "93" }, "14": { "#{skillatkadd}#": "650", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 7
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "98" }, "15": { "#{skillatkadd}#": "689", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 8
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "103" }, } }, "psychokino_swap": { "id": "169", "ident": "psychokino_swap", "name": "Swap", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard3_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_3_2.mp4", "desc": "
<\/div>
O Psicocinético troca instantaneamente de posição com o alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "18", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 1
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 2
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "42" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 3
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 4
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "52" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 5
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "57" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 6
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "62" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 7
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "67" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 8
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "72" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 9
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "77" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 10
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "82" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 11
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "87" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 12
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "92" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 13
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "97" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 14
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "102" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos 15
Limite de Alcance 20", "#{skillfactor}#": "100", "sp": "107" }, } }, "psychokino_teleportation": { "id": "170", "ident": "psychokino_teleportation", "name": "Teleportation", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard3_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_3_3.mp4", "desc": "
<\/div>
Seu personagem teletransporta imediatamente para o lugar escolhido, dentro do raio de visão.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 110", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 120", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 130", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 140", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 150", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 160", "#{skillfactor}#": "100", "sp": "70" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 170", "#{skillfactor}#": "100", "sp": "76" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 180", "#{skillfactor}#": "100", "sp": "82" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 190", "#{skillfactor}#": "100", "sp": "88" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 200", "#{skillfactor}#": "100", "sp": "94" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 210", "#{skillfactor}#": "100", "sp": "100" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 220", "#{skillfactor}#": "100", "sp": "106" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 230", "#{skillfactor}#": "100", "sp": "112" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 240", "#{skillfactor}#": "100", "sp": "118" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Distância Máx. do Teletransporte 250", "#{skillfactor}#": "100", "sp": "124" }, } }, "psychokino_magnetic-force": { "id": "171", "ident": "psychokino_magnetic-force", "name": "Magnetic Force", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard3_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_3_4.mp4", "desc": "
[Mágico]<\/div>
Puxa o inimigo para a área escolhida e defere danos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "72", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "253", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "317", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "48" }, "3": { "#{skillatkadd}#": "381", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "54" }, "4": { "#{skillatkadd}#": "445", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "60" }, "5": { "#{skillatkadd}#": "509", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "66" }, "6": { "#{skillatkadd}#": "573", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "72" }, "7": { "#{skillatkadd}#": "637", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "78" }, "8": { "#{skillatkadd}#": "701", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "84" }, "9": { "#{skillatkadd}#": "765", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "90" }, "10": { "#{skillatkadd}#": "829", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "96" }, } }, "psychokino_raise": { "id": "172", "ident": "psychokino_raise", "name": "Raise", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard3_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_3_5.mp4", "desc": "
<\/div>
Lança o inimigo pelo ar, incapacitando-o.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "117", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 7
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 9
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 11
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 13
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "69" }, } }, "psychokino_gravity-pole": { "id": "173", "ident": "psychokino_gravity-pole", "name": "Gravity Pole", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard3_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_3_6.mp4", "desc": "
<\/div>
Conjura uma linha reta no campo que atrai os inimigos em volta.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 6
Consume 2% SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 7
Consume 2% SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 8
Consume 2% SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 9
Consume 2% SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alvos: 10

Consume 2% SP por seg.Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "69" }, } }, "linker_physical-link": { "id": "174", "ident": "linker_physical-link", "name": "Physical Link", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard4_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_4_1.mp4", "desc": "
<\/div>
Cria um vínculo com os aliados para que os danos recebidos diminuam por serem divididos com cada um que tiver sido vinculado.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 1
Duração: 70 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "27" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 2
Duração: 80 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "32" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 3
Duração: 90 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "37" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 4
Duração: 100 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "42" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 5
Duração: 110 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "47" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 6
Duração: 120 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "52" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 7
Duração: 130 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "57" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 8
Duração: 140 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "62" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 9
Duração: 150 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "67" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 10
Duração: 160 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "72" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 11
Duração: 170 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "77" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 12
Duração: 180 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "82" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 13
Duração: 190 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "87" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 14
Duração: 200 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "92" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Diminui o dano, dependendo do número de ligações
Máx. de Ligações: 15
Duração: 210 Seg.
Consume 16 Stamina", "#{skillfactor}#": "100", "sp": "97" }, } }, "linker_joint-penalty": { "id": "175", "ident": "linker_joint-penalty", "name": "Joint Penalty", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard4_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_4_2.mp4", "desc": "
<\/div>
Cria um vínculo entre todos os inimigos próximos para que todos tomem danos juntos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 3
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 4
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 4
Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 5
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 5
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 6
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 6
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 7
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 7
Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "86" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 8
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "92" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 8
Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "98" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 9
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "104" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 9
Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "110" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 10
Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "116" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Ligações: 10
Duração: 85 Seg.", "#{skillfactor}#": "100", "sp": "122" }, } }, "linker_hangmans-knot": { "id": "176", "ident": "linker_hangmans-knot", "name": "Hangmans Knot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard4_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_4_3.mp4", "desc": "
<\/div>
Junta todos inimigos vinculados em um único local.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "10", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 1.2 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 1.4 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 1.6 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 1.8 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 2 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 2.2 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 2.4 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 2.6 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 2.8 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 3 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 3.2 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 3.4 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 3.6 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 3.8 Seg.", "#{skillfactor}#": "100", "sp": "95" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Vinculo: 4 Seg.", "#{skillfactor}#": "100", "sp": "100" }, } }, "linker_spiritual-chain": { "id": "177", "ident": "linker_spiritual-chain", "name": "Spiritual Chain", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard4_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_4_4.mp4", "desc": "
<\/div>
Cria um vínculo com os aliados para que todos compartilhem os aprimoramentos de status (buffs).

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "90", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "76" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "88" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "94" }, } }, "linker_lifeline": { "id": "178", "ident": "linker_lifeline", "name": "Lifeline", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard4_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_4_5.mp4", "desc": "
<\/div>
Cria um vínculo com o alvo para compartilhar sua defesa e a regeneração de vida (HP).

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 27 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "74" }, } }, "thaumaturge_swell-left-arm": { "id": "179", "ident": "thaumaturge_swell-left-arm", "name": "Swell Left Arm", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard5_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_5_0.mp4", "desc": "
<\/div>
Aumenta seu poder de ataque ou de um aliado durante algum tempo fazendo seu braço crescer.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "50", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +34
Bonus de Ataque Mágico:+34
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +43
Bonus de Ataque Mágico:+43
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +51
Bonus de Ataque Mágico:+51
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +60
Bonus de Ataque Mágico:+60
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +68
Bonus de Ataque Mágico:+68
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +77
Bonus de Ataque Mágico:+77
Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +86
Bonus de Ataque Mágico:+86
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +94
Bonus de Ataque Mágico:+94
Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +103
Bonus de Ataque Mágico:+103
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +111
Bonus de Ataque Mágico:+111
Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "96" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +120
Bonus de Ataque Mágico:+120
Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "102" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +129
Bonus de Ataque Mágico:+129
Duração: 85 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +137
Bonus de Ataque Mágico:+137
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "114" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +146
Bonus de Ataque Mágico:+146
Duração: 95 Seg.", "#{skillfactor}#": "100", "sp": "120" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Ataque Físico: +154
Bonus de Ataque Mágico:+154
Duração: 100 Seg.", "#{skillfactor}#": "100", "sp": "126" }, } }, "thaumaturge_shrink-body": { "id": "180", "ident": "thaumaturge_shrink-body", "name": "Shrink Body", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard5_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_5_1.mp4", "desc": "
<\/div>
Reduz o tamanho de um inimigo por determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 3
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 4
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 4
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 6
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 6
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 7
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "94" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 7
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "101" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 8
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 8
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "115" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 9
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "122" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 9
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "129" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 10
Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "136" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 10
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "143" }, } }, "thaumaturge_swell-body": { "id": "181", "ident": "thaumaturge_swell-body", "name": "Swell Body", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard5_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_5_2.mp4", "desc": "
<\/div>
Aumenta o tamanho de um inimigo por determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 3
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 4
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 4
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 5
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 6
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 6
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 7
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "94" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 7
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "101" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 8
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 8
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "115" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 9
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "122" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 9
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "129" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 10
Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "136" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Alvos: 10
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "143" }, } }, "thaumaturge_transpose": { "id": "182", "ident": "thaumaturge_transpose", "name": "Transpose", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard5_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_5_3.mp4", "desc": "
<\/div>
A inteligência do alvo se torna sua força e vice-versa durante determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "70", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "61" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 100 Seg.", "#{skillfactor}#": "100", "sp": "67" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 110 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 120 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 130 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 140 Seg.", "#{skillfactor}#": "100", "sp": "91" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 150 Seg.", "#{skillfactor}#": "100", "sp": "97" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 160 Seg.", "#{skillfactor}#": "100", "sp": "103" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 170 Seg.", "#{skillfactor}#": "100", "sp": "109" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 180 Seg.", "#{skillfactor}#": "100", "sp": "115" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 190 Seg.", "#{skillfactor}#": "100", "sp": "121" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "127" }, } }, "thaumaturge_reversi": { "id": "183", "ident": "thaumaturge_reversi", "name": "Reversi", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard5_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_5_4.mp4", "desc": "
<\/div>
Habilidades de inimigos que estiverem marcadas ao chão se tornarão habilidades benéficas ao Taumaturgo e aos seus aliados.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "50" }, } }, "thaumaturge_swell-right-arm": { "id": "184", "ident": "thaumaturge_swell-right-arm", "name": "Swell Right Arm", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard5_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_5_5.mp4", "desc": "
<\/div>
Incha o braço direito onde se encontra o escudo, aumentando a defesa durante determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "50", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +40
Adaga, Ataque Físico/Mágico: +34
Nenhum outro efeito quando equipando uma arma secundária
Duração: 30 Seg. ", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +49
Adaga, Ataque Físico/Mágico: +43
Nenhum outro efeito quando equipando uma arma secundária
Duração: 35 Seg. ", "#{skillfactor}#": "100", "sp": "48" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +58
Adaga, Ataque Físico/Mágico: +51
Nenhum outro efeito quando equipando uma arma secundária
Duração: 40 Seg. ", "#{skillfactor}#": "100", "sp": "54" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +67
Adaga, Ataque Físico/Mágico: +60
Nenhum outro efeito quando equipando uma arma secundária
Duração: 45 Seg. ", "#{skillfactor}#": "100", "sp": "60" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +76
Adaga, Ataque Físico/Mágico: +68
Nenhum outro efeito quando equipando uma arma secundária
Duração: 50 Seg. ", "#{skillfactor}#": "100", "sp": "66" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +85
Adaga, Ataque Físico/Mágico: +77
Nenhum outro efeito quando equipando uma arma secundária
Duração: 55 Seg. ", "#{skillfactor}#": "100", "sp": "72" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +94
Adaga, Ataque Físico/Mágico: +86
Nenhum outro efeito quando equipando uma arma secundária
Duração: 60 Seg. ", "#{skillfactor}#": "100", "sp": "78" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +103
Adaga, Ataque Físico/Mágico: +94
Nenhum outro efeito quando equipando uma arma secundária
Duração: 65 Seg. ", "#{skillfactor}#": "100", "sp": "84" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +112
Adaga, Ataque Físico/Mágico: +103
Nenhum outro efeito quando equipando uma arma secundária
Duração: 70 Seg. ", "#{skillfactor}#": "100", "sp": "90" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": " Escudo, Defesa Física/Mágica: +121
Adaga, Ataque Físico/Mágico: +111
Nenhum outro efeito quando equipando uma arma secundária
Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "96" }, } }, "thaumaturge_swell-brain": { "id": "185", "ident": "thaumaturge_swell-brain", "name": "Swell Brain", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard5_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_5_6.mp4", "desc": "
<\/div>
Incha a cabeça do Taumaturgo ou de aliados, aumentando a inteligência durante determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "INT: +25
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "INT: +30
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "INT: +35
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "INT: +40
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "76" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "INT: +45
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "84" }, } }, "elementalist_electrocute": { "id": "186", "ident": "elementalist_electrocute", "name": "Electrocute", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard6_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_6_0.mp4", "desc": "
[Mágico] - [Elétrico]<\/div>
Conjura descargas elétricas que acertam múltiplas vezes os alvos a frente do seu personagem.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "63", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "135", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 2", "#{skillfactor}#": "100", "sp": "52" }, "2": { "#{skillatkadd}#": "169", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 3", "#{skillfactor}#": "100", "sp": "60" }, "3": { "#{skillatkadd}#": "203", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 3", "#{skillfactor}#": "100", "sp": "68" }, "4": { "#{skillatkadd}#": "237", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 4", "#{skillfactor}#": "100", "sp": "76" }, "5": { "#{skillatkadd}#": "271", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 4", "#{skillfactor}#": "100", "sp": "84" }, "6": { "#{skillatkadd}#": "305", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "92" }, "7": { "#{skillatkadd}#": "339", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "100" }, "8": { "#{skillatkadd}#": "373", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 6", "#{skillfactor}#": "100", "sp": "108" }, "9": { "#{skillatkadd}#": "407", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 6", "#{skillfactor}#": "100", "sp": "116" }, "10": { "#{skillatkadd}#": "441", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 7", "#{skillfactor}#": "100", "sp": "124" }, "11": { "#{skillatkadd}#": "475", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 7", "#{skillfactor}#": "100", "sp": "132" }, "12": { "#{skillatkadd}#": "509", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 8", "#{skillfactor}#": "100", "sp": "140" }, "13": { "#{skillatkadd}#": "543", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 8", "#{skillfactor}#": "100", "sp": "148" }, "14": { "#{skillatkadd}#": "577", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 9", "#{skillfactor}#": "100", "sp": "156" }, "15": { "#{skillatkadd}#": "611", "#{skillefect}#": "Dano do Atributo: 0%
Números de Alvos: 9", "#{skillfactor}#": "100", "sp": "164" }, } }, "elementalist_stone-curse": { "id": "187", "ident": "elementalist_stone-curse", "name": "Stone Curse", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard6_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_6_1.mp4", "desc": "
<\/div>
Petrifica o alvo durante certo tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "122", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 5 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "48" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 7 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "56" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 9 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "64" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 11 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "72" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 13 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "80" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "88" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "96" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "104" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "112" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 23 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "120" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "128" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 27 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "136" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 29 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "144" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 31 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "152" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 33 Seg.
Números de Alvos: 5", "#{skillfactor}#": "100", "sp": "160" }, } }, "elementalist_hail": { "id": "188", "ident": "elementalist_hail", "name": "Hail", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard6_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_6_2.mp4", "desc": "
[Mágico] - [Gelo]<\/div>
Conjura uma chuva de granizo que causa dano em todos os inimigos próximos durante certo tempo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "81", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "44", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "2": { "#{skillatkadd}#": "63", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "3": { "#{skillatkadd}#": "82", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "4": { "#{skillatkadd}#": "101", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "5": { "#{skillatkadd}#": "120", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "6": { "#{skillatkadd}#": "139", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "7": { "#{skillatkadd}#": "158", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "98" }, "8": { "#{skillatkadd}#": "177", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "106" }, "9": { "#{skillatkadd}#": "196", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "114" }, "10": { "#{skillatkadd}#": "215", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "122" }, "11": { "#{skillatkadd}#": "234", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "130" }, "12": { "#{skillatkadd}#": "253", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "138" }, "13": { "#{skillatkadd}#": "272", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "146" }, "14": { "#{skillatkadd}#": "291", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "154" }, "15": { "#{skillatkadd}#": "310", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "162" }, } }, "elementalist_prominence": { "id": "189", "ident": "elementalist_prominence", "name": "Prominence", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard6_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_6_3.mp4", "desc": "
[Mágico] - [Fogo]<\/div>
Conjura uma proeminência que irá vagar pelo campo por certo tempo causando dano aos inimigos que tocar.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "108", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "145", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "2": { "#{skillatkadd}#": "187", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "3": { "#{skillatkadd}#": "229", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "4": { "#{skillatkadd}#": "271", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "5": { "#{skillatkadd}#": "313", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "91" }, "6": { "#{skillatkadd}#": "355", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "7": { "#{skillatkadd}#": "397", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "109" }, "8": { "#{skillatkadd}#": "439", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "118" }, "9": { "#{skillatkadd}#": "481", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "127" }, "10": { "#{skillatkadd}#": "523", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "136" }, "11": { "#{skillatkadd}#": "565", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "145" }, "12": { "#{skillatkadd}#": "607", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "154" }, "13": { "#{skillatkadd}#": "649", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "163" }, "14": { "#{skillatkadd}#": "691", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "172" }, "15": { "#{skillatkadd}#": "733", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "181" }, } }, "elementalist_meteor": { "id": "190", "ident": "elementalist_meteor", "name": "Meteor", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard6_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_6_4.mp4", "desc": "
[Mágico] - [Fogo]<\/div>
Conjura um meteoro que causa dano massivo ao alvo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "90", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "563", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "65" }, "2": { "#{skillatkadd}#": "702", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "78" }, "3": { "#{skillatkadd}#": "841", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "91" }, "4": { "#{skillatkadd}#": "980", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "104" }, "5": { "#{skillatkadd}#": "1119", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "117" }, "6": { "#{skillatkadd}#": "1258", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "130" }, "7": { "#{skillatkadd}#": "1397", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "143" }, "8": { "#{skillatkadd}#": "1536", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "156" }, "9": { "#{skillatkadd}#": "1675", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "169" }, "10": { "#{skillatkadd}#": "1814", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "182" }, } }, "elementalist_rain": { "id": "191", "ident": "elementalist_rain", "name": "Rain", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/elementist_Rain.jpg", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_6_5.mp4", "desc": "
<\/div>
Faz chover no local especificado. A chuva pode conter efeitos diferentes água, elétrico e etc

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "256", "#{skillefect}#": "Duração: 10 Seg.
Chance de dobrar a duração: 0%
Velocidade de Movimento: -10%
Dano adicional do tipo relâmpago: +35%
Dano em alvos do tipo fogo:256", "#{skillfactor}#": "100", "sp": "70" }, "2": { "#{skillatkadd}#": "330", "#{skillefect}#": "Duração: 12 Seg.
Chance de dobrar a duração: 0%
Velocidade de Movimento: -10%
Dano adicional do tipo relâmpago: +35%
Dano em alvos do tipo fogo:330", "#{skillfactor}#": "100", "sp": "82" }, "3": { "#{skillatkadd}#": "404", "#{skillefect}#": "Duração: 14 Seg.
Chance de dobrar a duração: 0%
Velocidade de Movimento: -10%
Dano adicional do tipo relâmpago: +35%
Dano em alvos do tipo fogo:404", "#{skillfactor}#": "100", "sp": "94" }, "4": { "#{skillatkadd}#": "478", "#{skillefect}#": "Duração: 16 Seg.
Chance de dobrar a duração: 0%
Velocidade de Movimento: -10%
Dano adicional do tipo relâmpago: +35%
Dano em alvos do tipo fogo:478", "#{skillfactor}#": "100", "sp": "106" }, "5": { "#{skillatkadd}#": "552", "#{skillefect}#": "Duração: 18 Seg.
Chance de dobrar a duração: 0%
Velocidade de Movimento: -10%
Dano adicional do tipo relâmpago: +35%
Dano em alvos do tipo fogo:552", "#{skillfactor}#": "100", "sp": "118" }, } }, "sorcerer_summoning": { "id": "192", "ident": "sorcerer_summoning", "name": "Summoning", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard7_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_7_0.mp4", "desc": "
<\/div>
Invoca um demônio baseado na carta usada para a invocação.  

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "240", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (0.4 X INT)
Defesa Adicional do Demônio: (0.4 X SPR)", "#{skillfactor}#": "100", "sp": "50" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (0.5 X INT)
Defesa Adicional do Demônio: (0.5 X SPR)", "#{skillfactor}#": "100", "sp": "58" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (0.6 X INT)
Defesa Adicional do Demônio: (0.6 X SPR)", "#{skillfactor}#": "100", "sp": "66" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (0.7 X INT)
Defesa Adicional do Demônio: (0.7 X SPR)", "#{skillfactor}#": "100", "sp": "74" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (0.8 X INT)
Defesa Adicional do Demônio: (0.8 X SPR)", "#{skillfactor}#": "100", "sp": "82" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (0.9 X INT)
Defesa Adicional do Demônio: (0.9 X SPR)", "#{skillfactor}#": "100", "sp": "90" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (1 X INT)
Defesa Adicional do Demônio: (1 X SPR)", "#{skillfactor}#": "100", "sp": "98" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (1.1 X INT)
Defesa Adicional do Demônio: (1.1 X SPR)", "#{skillfactor}#": "100", "sp": "106" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (1.2 X INT)
Defesa Adicional do Demônio: (1.2 X SPR)", "#{skillfactor}#": "100", "sp": "114" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (1.3 X INT)
Defesa Adicional do Demônio: (1.3 X SPR)", "#{skillfactor}#": "100", "sp": "122" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (1.4 X INT)
Defesa Adicional do Demônio: (1.4 X SPR)", "#{skillfactor}#": "100", "sp": "130" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (1.5 X INT)
Defesa Adicional do Demônio: (1.5 X SPR)", "#{skillfactor}#": "100", "sp": "138" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (1.6 X INT)
Defesa Adicional do Demônio: (1.6 X SPR)", "#{skillfactor}#": "100", "sp": "146" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (1.7 X INT)
Defesa Adicional do Demônio: (1.7 X SPR)", "#{skillfactor}#": "100", "sp": "154" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca um Boss Tipo Demônio
Ataque Adicional do Demônio: (1.8 X INT)
Defesa Adicional do Demônio: (1.8 X SPR)", "#{skillfactor}#": "100", "sp": "162" }, } }, "sorcerer_attack-ground": { "id": "193", "ident": "sorcerer_attack-ground", "name": "Attack Ground", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard7_1.png", "circle": "2", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_7_1.mp4", "desc": "
<\/div>
Ordena que o demônio faça um ataque ao solo no alvo especificado.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "5", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "38" }, } }, "cleric_heal": { "id": "194", "ident": "cleric_heal", "name": "Heal", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric0_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_0_0.mp4", "desc": "
[Mágico] - [Divino]<\/div>
Cria um círculo no chão que ao passar por cima restaura HP ou causa dano aos inimigos. Alvos voadores não são afetados.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "22", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "39", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (35 + INT)) X 1.5) X 1.1 ~ ((50 + (35 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "12" }, "2": { "#{skillatkadd}#": "47", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (43 + INT)) X 1.5) X 1.1 ~ ((50 + (43 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "15" }, "3": { "#{skillatkadd}#": "55", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (51 + INT)) X 1.5) X 1.1 ~ ((50 + (51 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "63", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (59 + INT)) X 1.5) X 1.1 ~ ((50 + (59 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "21" }, "5": { "#{skillatkadd}#": "71", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (67 + INT)) X 1.5) X 1.1 ~ ((50 + (67 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "6": { "#{skillatkadd}#": "79", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (75 + INT)) X 1.5) X 1.1 ~ ((50 + (75 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "7": { "#{skillatkadd}#": "87", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (83 + INT)) X 1.5) X 1.1 ~ ((50 + (83 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "8": { "#{skillatkadd}#": "95", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (91 + INT)) X 1.5) X 1.1 ~ ((50 + (91 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "9": { "#{skillatkadd}#": "103", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (99 + INT)) X 1.5) X 1.1 ~ ((50 + (99 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "10": { "#{skillatkadd}#": "111", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (107 + INT)) X 1.5) X 1.1 ~ ((50 + (107 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "11": { "#{skillatkadd}#": "119", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (115 + INT)) X 1.5) X 1.1 ~ ((50 + (115 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "12": { "#{skillatkadd}#": "127", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (123 + INT)) X 1.5) X 1.1 ~ ((50 + (123 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "13": { "#{skillatkadd}#": "135", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (131 + INT)) X 1.5) X 1.1 ~ ((50 + (131 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "14": { "#{skillatkadd}#": "143", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (139 + INT)) X 1.5) X 1.1 ~ ((50 + (139 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "15": { "#{skillatkadd}#": "151", "#{skillefect}#": "Dano do Atributo: 0%
Recupera 5% do HP Máx.
Taxa adicional de recuperação de HP: ((50 + (147 + INT)) X 1.5) X 1.1 ~ ((50 + (147 + INT)) X 1.5) X 1.3
Duração do Círculo Mágico: 40 Seg.", "#{skillfactor}#": "100", "sp": "54" }, } }, "sorcerer_riding": { "id": "195", "ident": "sorcerer_riding", "name": "Riding", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard7_2.png", "circle": "2", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_7_2.mp4", "desc": "
<\/div>
Faz com que o Feiticeiro possa subir no Demônio, usando-o como montaria.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "40" }, } }, "sorcerer_morph": { "id": "196", "ident": "sorcerer_morph", "name": "Morph", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard7_3.png", "circle": "2", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_7_3.mp4", "desc": "
<\/div>
Faz com o que o Demônio invocado varie para outro Demônio baseado na carta usada.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "50" }, } }, "sorcerer_hold": { "id": "197", "ident": "sorcerer_hold", "name": "Hold", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard7_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_7_4.mp4", "desc": "
<\/div>
Ordena que o Demônio fique parado num local.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "5", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "38" }, } }, "sorcerer_summon-familiar": { "id": "198", "ident": "sorcerer_summon-familiar", "name": "Summon Familiar", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard7_5.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_7_5.mp4", "desc": "
[Mágico] - [Sombrio]<\/div>
Invoca um familiar.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 1", "#{skillfactor}#": "100", "sp": "55" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 2", "#{skillfactor}#": "100", "sp": "63" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 3", "#{skillfactor}#": "100", "sp": "71" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 4", "#{skillfactor}#": "100", "sp": "79" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 5", "#{skillfactor}#": "100", "sp": "87" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 6", "#{skillfactor}#": "100", "sp": "95" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 7", "#{skillfactor}#": "100", "sp": "103" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 8", "#{skillfactor}#": "100", "sp": "111" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 9", "#{skillfactor}#": "100", "sp": "119" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 10", "#{skillfactor}#": "100", "sp": "127" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 11", "#{skillfactor}#": "100", "sp": "135" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 12", "#{skillfactor}#": "100", "sp": "143" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 13", "#{skillfactor}#": "100", "sp": "151" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 14", "#{skillfactor}#": "100", "sp": "159" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Quantidade de Familiar: 15", "#{skillfactor}#": "100", "sp": "167" }, } }, "sorcerer_summon-salamion": { "id": "199", "ident": "sorcerer_summon-salamion", "name": "Summon Salamion", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard7_6.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_7_6.mp4", "desc": "
<\/div>
Invoca Salamion, um demônio de fogo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 60 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(0.4 X INT)", "#{skillfactor}#": "100", "sp": "53" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 70 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(0.5 X INT)", "#{skillfactor}#": "100", "sp": "61" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 80 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(0.6 X INT)", "#{skillfactor}#": "100", "sp": "69" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 90 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(0.7 X INT)", "#{skillfactor}#": "100", "sp": "77" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 100 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(0.8 X INT)", "#{skillfactor}#": "100", "sp": "85" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 110 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(0.9 X INT)", "#{skillfactor}#": "100", "sp": "93" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 120 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(1 X INT)", "#{skillfactor}#": "100", "sp": "101" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 130 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(1.1 X INT)", "#{skillfactor}#": "100", "sp": "109" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 140 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(1.2 X INT)", "#{skillfactor}#": "100", "sp": "117" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 150 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(1.3 X INT)", "#{skillfactor}#": "100", "sp": "125" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 160 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(1.4 X INT)", "#{skillfactor}#": "100", "sp": "133" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 170 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(1.5 X INT)", "#{skillfactor}#": "100", "sp": "141" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 180 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(1.6 X INT)", "#{skillfactor}#": "100", "sp": "149" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 190 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(1.7 X INT)", "#{skillfactor}#": "100", "sp": "157" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Salamion Duração: 200 Seg.
Salamion Nv.: CharNv
Danos Adicionais do Salamion: +(1.8 X INT)", "#{skillfactor}#": "100", "sp": "165" }, } }, "cleric_cure": { "id": "200", "ident": "cleric_cure", "name": "Cure", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric0_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_0_1.mp4", "desc": "
[Mágico] - [Divino]<\/div>
Conjura um quadrado no chão que cura efeitos negativos ou causa dano aos inimigos.
Alvos voadores não são afetados.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "27", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "10", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 10
Duração do Círculo Mágico: 6 Seg.", "#{skillfactor}#": "100", "sp": "13" }, "2": { "#{skillatkadd}#": "148", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 12
Duração do Círculo Mágico: 7 Seg.", "#{skillfactor}#": "100", "sp": "16" }, "3": { "#{skillatkadd}#": "286", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 14
Duração do Círculo Mágico: 8 Seg.", "#{skillfactor}#": "100", "sp": "19" }, "4": { "#{skillatkadd}#": "424", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 16
Duração do Círculo Mágico: 9 Seg.", "#{skillfactor}#": "100", "sp": "22" }, "5": { "#{skillatkadd}#": "562", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 18
Duração do Círculo Mágico: 10 Seg.", "#{skillfactor}#": "100", "sp": "25" }, "6": { "#{skillatkadd}#": "700", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 20
Duração do Círculo Mágico: 11 Seg.", "#{skillfactor}#": "100", "sp": "28" }, "7": { "#{skillatkadd}#": "838", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 22
Duração do Círculo Mágico: 12 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "8": { "#{skillatkadd}#": "976", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 24
Duração do Círculo Mágico: 13 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "9": { "#{skillatkadd}#": "1114", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 26
Duração do Círculo Mágico: 14 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "10": { "#{skillatkadd}#": "1252", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 28
Duração do Círculo Mágico: 15 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "11": { "#{skillatkadd}#": "1390", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 30
Duração do Círculo Mágico: 16 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "12": { "#{skillatkadd}#": "1528", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 32
Duração do Círculo Mágico: 17 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "13": { "#{skillatkadd}#": "1666", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 34
Duração do Círculo Mágico: 18 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "14": { "#{skillatkadd}#": "1804", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 36
Duração do Círculo Mágico: 19 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "15": { "#{skillatkadd}#": "1942", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 38
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "55" }, } }, "sorcerer_summon-servant": { "id": "201", "ident": "sorcerer_summon-servant", "name": "Summon Servant", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard7_7.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_7_7.mp4", "desc": "
<\/div>
Invoca um servo na forma de um gato.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumentar velocidade de Recuperação de SP
Aumentar o Raio de Ataque em Área
Recuperação de Stamina
Aumentar a Defesa Mágica
Aumentar o Ataque Tipo Sombrio", "#{skillfactor}#": "100", "sp": "55" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumentar velocidade de Recuperação de SP
Aumentar o Raio de Ataque em Área
Recuperação de Stamina
Aumentar a Defesa Mágica
Aumentar o Ataque Tipo Sombrio", "#{skillfactor}#": "100", "sp": "63" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumentar velocidade de Recuperação de SP
Aumentar o Raio de Ataque em Área
Recuperação de Stamina
Aumentar a Defesa Mágica
Aumentar o Ataque Tipo Sombrio", "#{skillfactor}#": "100", "sp": "71" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumentar velocidade de Recuperação de SP
Aumentar o Raio de Ataque em Área
Recuperação de Stamina
Aumentar a Defesa Mágica
Aumentar o Ataque Tipo Sombrio", "#{skillfactor}#": "100", "sp": "79" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumentar velocidade de Recuperação de SP
Aumentar o Raio de Ataque em Área
Recuperação de Stamina
Aumentar a Defesa Mágica
Aumentar o Ataque Tipo Sombrio", "#{skillfactor}#": "100", "sp": "87" }, } }, "chronomancer_quicken": { "id": "202", "ident": "chronomancer_quicken", "name": "Quicken", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard8_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_8_0.mp4", "desc": "
<\/div>
Ao manipular o tempo, concede velocidade de ataque ao Cronomante e/ou aos aliados durante certo tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +30
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +60
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +90
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +120
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "76" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +150
Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +180
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "92" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +210
Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +240
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +270
Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "116" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +300
Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "124" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +330
Duração: 85 Seg.", "#{skillfactor}#": "100", "sp": "132" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +360
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "140" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +390
Duração: 95 Seg.", "#{skillfactor}#": "100", "sp": "148" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +420
Duração: 100 Seg.", "#{skillfactor}#": "100", "sp": "156" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Ataque: +450
Duração: 105 Seg.", "#{skillfactor}#": "100", "sp": "164" }, } }, "cleric_safety-zone": { "id": "203", "ident": "cleric_safety-zone", "name": "Safety Zone", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric0_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_0_2.mp4", "desc": "
<\/div>
Conjura uma zona segura que bloqueia ataques.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "48", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 2 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "16" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 4 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "20" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 6 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 8 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "28" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 10 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 12 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 14 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 16 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 18 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 20 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 22 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 24 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 26 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 28 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: 30 vezes
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "72" }, } }, "chronomancer_reincarnate": { "id": "204", "ident": "chronomancer_reincarnate", "name": "Reincarnate", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard8_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_8_1.mp4", "desc": "
<\/div>
Manipula um monstro para que ele renasça após morrer.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "88" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "98" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "118" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "128" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "138" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "148" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "158" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "168" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "178" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "188" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "198" }, } }, "cleric_deprotected-zone": { "id": "205", "ident": "cleric_deprotected-zone", "name": "Deprotected Zone", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric0_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_0_3.mp4", "desc": "
<\/div>
Cria uma zona amaldiçoada que reduz as defesas do inimigo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "13", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(2 + SPR)
Por acúmulo: -1
Duração do Círculo Mágico: 6 Seg.", "#{skillfactor}#": "100", "sp": "15" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(3 + SPR)
Por acúmulo: -1
Duração do Círculo Mágico: 8 Seg.", "#{skillfactor}#": "100", "sp": "18" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(4 + SPR)
Por acúmulo: -2
Duração do Círculo Mágico: 10 Seg.", "#{skillfactor}#": "100", "sp": "21" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(4 + SPR)
Por acúmulo: -2
Duração do Círculo Mágico: 12 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(5 + SPR)
Por acúmulo: -3
Duração do Círculo Mágico: 14 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(6 + SPR)
Por acúmulo: -3
Duração do Círculo Mágico: 16 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(6 + SPR)
Por acúmulo: -4
Duração do Círculo Mágico: 18 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(7 + SPR)
Por acúmulo: -4
Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(8 + SPR)
Por acúmulo: -5
Duração do Círculo Mágico: 22 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(9 + SPR)
Por acúmulo: -5
Duração do Círculo Mágico: 24 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(9 + SPR)
Por acúmulo: -6
Duração do Círculo Mágico: 26 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(10 + SPR)
Por acúmulo: -6
Duração do Círculo Mágico: 28 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(11 + SPR)
Por acúmulo: -7
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(11 + SPR)
Por acúmulo: -7
Duração do Círculo Mágico: 32 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa: -(12 + SPR)
Por acúmulo: -8
Duração do Círculo Mágico: 34 Seg.", "#{skillfactor}#": "100", "sp": "57" }, } }, "chronomancer_stop": { "id": "206", "ident": "chronomancer_stop", "name": "Stop", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard8_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_8_2.mp4", "desc": "
<\/div>
Manipula o tempo numa área ao redor do Cronomante. Todos os inimigos dentro da conjuração serão parados no tempo. Os alvos sobre o efeito da habilidade não podem sofrer dano.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "100", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 6 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 7 Seg.", "#{skillfactor}#": "100", "sp": "83" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 8 Seg.", "#{skillfactor}#": "100", "sp": "96" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 9 Seg.", "#{skillfactor}#": "100", "sp": "109" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 10 Seg.", "#{skillfactor}#": "100", "sp": "122" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 11 Seg.", "#{skillfactor}#": "100", "sp": "135" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 12 Seg.", "#{skillfactor}#": "100", "sp": "148" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 13 Seg.", "#{skillfactor}#": "100", "sp": "161" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 14 Seg.", "#{skillfactor}#": "100", "sp": "174" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 15 Seg.", "#{skillfactor}#": "100", "sp": "187" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 16 Seg.", "#{skillfactor}#": "100", "sp": "200" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 17 Seg.", "#{skillfactor}#": "100", "sp": "213" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 18 Seg.", "#{skillfactor}#": "100", "sp": "226" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 19 Seg.", "#{skillfactor}#": "100", "sp": "239" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Efeito: 20 Seg.", "#{skillfactor}#": "100", "sp": "252" }, } }, "chronomancer_slow": { "id": "207", "ident": "chronomancer_slow", "name": "Slow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard8_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_8_3.mp4", "desc": "
<\/div>
Manipula o tempo para diminuir a velocidade do alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -9
Duração do Círculo Mágico: 14.5 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -11
Duração do Círculo Mágico: 15 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -12
Duração do Círculo Mágico: 15.5 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -14
Duração do Círculo Mágico: 16 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -15
Duração do Círculo Mágico: 16.5 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "91" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -17
Duração do Círculo Mágico: 17 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -18
Duração do Círculo Mágico: 17.5 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "109" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -20
Duração do Círculo Mágico: 18 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "118" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -21
Duração do Círculo Mágico: 18.5 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "127" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -23
Duração do Círculo Mágico: 19 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "136" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -24
Duração do Círculo Mágico: 19.5 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "145" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -26
Duração do Círculo Mágico: 20 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "154" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -27
Duração do Círculo Mágico: 20.5 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "163" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -29
Duração do Círculo Mágico: 21 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "172" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: -30
Duração do Círculo Mágico: 21.5 Seg.
[Lentidão] Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "181" }, } }, "chronomancer_haste": { "id": "208", "ident": "chronomancer_haste", "name": "Haste", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard8_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_8_4.mp4", "desc": "
<\/div>
Manipula o tempo para aumentar a velocidade de movimento do alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +6%
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +7%
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +8%
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +9%
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "83" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +10%
Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "92" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +11%
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "101" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +12%
Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "110" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +13%
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "119" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +14%
Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "128" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Velocidade de Movimento: +15%
Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "137" }, } }, "cleric_divine-might": { "id": "209", "ident": "cleric_divine-might", "name": "Divine Might", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric0_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_0_4.mp4", "desc": "
<\/div>
Conjura um quadrado no chão que aumenta o nível de qualquer habilidade que seja conjurada em cima do local delimitado. O efeito desaparece assim que a habilidade for usada.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "27", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 1 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "15" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 2 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "18" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 3 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "21" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 4 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 5 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 6 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 7 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 8 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 9 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicado 10 vezes
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "42" }, } }, "chronomancer_back-masking": { "id": "210", "ident": "chronomancer_back-masking", "name": "Back Masking", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard8_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_8_5.mp4", "desc": "

<\/div>
Ao manipular o tempo faz com que os alvos em torno do Cronomante voltem ao seu lugar que estavam à um determinado momento antes da habilidade.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "300", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Alcance do Efeito: 60
Impossível usar a habilidade nas proximidades por 10 Seg.
Consume 1 Pedaço de dimensão", "#{skillfactor}#": "100", "sp": "150" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Alcance da habilidade: 70
Impossível usar a habilidade nas proximidades por 10 Seg.
Consume 1 Pedaço de dimensão", "#{skillfactor}#": "100", "sp": "170" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Alcance da habilidade: 80
Impossível usar a habilidade nas proximidades por 10 Seg.
Consume 1 Pedaço de dimensão", "#{skillfactor}#": "100", "sp": "190" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Alcance da habilidade: 90
Impossível usar a habilidade nas proximidades por 10 Seg.
Consume 1 Pedaço de dimensão", "#{skillfactor}#": "100", "sp": "210" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Alcance da habilidade: 100
Impossível usar a habilidade nas proximidades por 10 Seg.
Consume 1 Pedaço de dimensão", "#{skillfactor}#": "100", "sp": "230" }, } }, "cleric_fade": { "id": "211", "ident": "cleric_fade", "name": "Fade", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric0_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_0_5.mp4", "desc": "
<\/div>Ao ser usada faz com o que o Clérigo não chame mais atenção dos monstros agressivos.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "56" }, } }, "cleric_guardian-saint": { "id": "212", "ident": "cleric_guardian-saint", "name": "Guardian Saint", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric0_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_0_6.mp4", "desc": "
<\/div>
Cria um elo com um aliado que transfere o dano recebido para o mesmo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "90", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Santo Guardião: 60 Seg.
Chance de Acertar: 50%
Cargas: 3", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Santo Guardião: 60 Seg.
Chance de Acertar: 50%
Cargas: 6", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Santo Guardião: 60 Seg.
Chance de Acertar: 50%
Cargas: 9", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Santo Guardião: 60 Seg.
Chance de Acertar: 50%
Cargas: 12", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Santo Guardião: 60 Seg.
Chance de Acertar: 50%
Cargas: 15", "#{skillfactor}#": "100", "sp": "38" }, } }, "necromancer_gather-copse": { "id": "213", "ident": "necromancer_gather-copse", "name": "Gather Copse", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard9_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_9_0.mp4", "desc": "
[Mágico] - [Sombrio]<\/div>
Usada após a morte de um monstro faz com que o corpo dele seja absorvido pelo Necromante.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "231", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "314", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "3": { "#{skillatkadd}#": "397", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "480", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "53" }, "5": { "#{skillatkadd}#": "563", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "6": { "#{skillatkadd}#": "646", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "65" }, "7": { "#{skillatkadd}#": "729", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "71" }, "8": { "#{skillatkadd}#": "812", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "9": { "#{skillatkadd}#": "895", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "83" }, "10": { "#{skillatkadd}#": "978", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "89" }, "11": { "#{skillatkadd}#": "1061", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "95" }, "12": { "#{skillatkadd}#": "1144", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "101" }, "13": { "#{skillatkadd}#": "1227", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "107" }, "14": { "#{skillatkadd}#": "1310", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "113" }, "15": { "#{skillatkadd}#": "1393", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "119" }, } }, "necromancer_create-shoggoth": { "id": "214", "ident": "necromancer_create-shoggoth", "name": "Create Shoggoth", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard9_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_9_1.mp4", "desc": "
<\/div>
Cria um monstro usando os corpos reunidos e baseado na carta que é usada. O monstro terá uma aparência amorfa feita de plantas.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "240", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional do Shoggoth: (0.4 × INT)
Defesa Adicional do Shoggoth: (0.4 × SPR)
Consume 30 cadáveres", "#{skillfactor}#": "100", "sp": "92" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional do Shoggoth: (0.5 × INT)
Defesa Adicional do Shoggoth: (0.5 × SPR)
Consume 30 cadáveres", "#{skillfactor}#": "100", "sp": "103" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional do Shoggoth: (0.6 × INT)
Defesa Adicional do Shoggoth: (0.6 × SPR)
Consume 30 cadáveres", "#{skillfactor}#": "100", "sp": "114" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional do Shoggoth: (0.7 × INT)
Defesa Adicional do Shoggoth: (0.7 × SPR)
Consume 30 cadáveres", "#{skillfactor}#": "100", "sp": "125" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional do Shoggoth: (0.8 × INT)
Defesa Adicional do Shoggoth: (0.8 × SPR)
Consume 30 cadáveres", "#{skillfactor}#": "100", "sp": "136" }, } }, "krivis_aukuras": { "id": "215", "ident": "krivis_aukuras", "name": "Aukuras", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric1_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_1_0.mp4", "desc": "
<\/div>
Conjura um altar que aumenta a regeneração de vida HP.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +21
", "#{skillfactor}#": "100", "sp": "24" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recuperação de HP: -8 Seg.
Duração: 100 Seg.", "#{skillfactor}#": "100", "sp": "29" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +27
", "#{skillfactor}#": "100", "sp": "34" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recuperação de HP: -8.5 Seg.
Duração: 110 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +33
", "#{skillfactor}#": "100", "sp": "44" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recuperação de HP: -9 Seg.
Duração: 120 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +39
", "#{skillfactor}#": "100", "sp": "54" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recuperação de HP: -9.5 Seg.
Duração: 130 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +45
", "#{skillfactor}#": "100", "sp": "64" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recuperação de HP: -10 Seg.
Duração: 140 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +51
", "#{skillfactor}#": "100", "sp": "74" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recuperação de HP: -10.5 Seg.
Duração: 150 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +57
", "#{skillfactor}#": "100", "sp": "84" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recuperação de HP: -11 Seg.
Duração: 160 Seg.", "#{skillfactor}#": "100", "sp": "89" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +63
", "#{skillfactor}#": "100", "sp": "94" }, } }, "necromancer_flesh-cannon": { "id": "216", "ident": "necromancer_flesh-cannon", "name": "Flesh Cannon", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard9_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_9_2.mp4", "desc": "
[Mágico] - [Sombrio]<\/div>
Cria um canhão usando os corpos reunidos. Os corpos são atirados ao alvo causando dano constante.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "23", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "284", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "70" }, "2": { "#{skillatkadd}#": "357", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "79" }, "3": { "#{skillatkadd}#": "430", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "88" }, "4": { "#{skillatkadd}#": "503", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "97" }, "5": { "#{skillatkadd}#": "576", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "106" }, "6": { "#{skillatkadd}#": "649", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "115" }, "7": { "#{skillatkadd}#": "722", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "124" }, "8": { "#{skillatkadd}#": "795", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "133" }, "9": { "#{skillatkadd}#": "868", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "142" }, "10": { "#{skillatkadd}#": "941", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "151" }, "11": { "#{skillatkadd}#": "1014", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "160" }, "12": { "#{skillatkadd}#": "1087", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "169" }, "13": { "#{skillatkadd}#": "1160", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "178" }, "14": { "#{skillatkadd}#": "1233", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "187" }, "15": { "#{skillatkadd}#": "1306", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5
Consume 15 cadáveres", "#{skillfactor}#": "100", "sp": "196" }, } }, "necromancer_flesh-hoop": { "id": "217", "ident": "necromancer_flesh-hoop", "name": "Flesh Hoop", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard9_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_9_3.mp4", "desc": "
[Mágico] - [Sombrio]<\/div>
Cria um círculo de carne em torno do Necromante usando os corpos absorvidos. O círculo causa dano aos inimigos pelo contato, desintegrando-se ao mesmo tempo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "230", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "65" }, "2": { "#{skillatkadd}#": "313", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "73" }, "3": { "#{skillatkadd}#": "396", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "81" }, "4": { "#{skillatkadd}#": "479", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "89" }, "5": { "#{skillatkadd}#": "562", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "97" }, "6": { "#{skillatkadd}#": "645", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "105" }, "7": { "#{skillatkadd}#": "728", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "113" }, "8": { "#{skillatkadd}#": "811", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "121" }, "9": { "#{skillatkadd}#": "894", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "129" }, "10": { "#{skillatkadd}#": "977", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "137" }, "11": { "#{skillatkadd}#": "1060", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "145" }, "12": { "#{skillatkadd}#": "1143", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "153" }, "13": { "#{skillatkadd}#": "1226", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "161" }, "14": { "#{skillatkadd}#": "1309", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "169" }, "15": { "#{skillatkadd}#": "1392", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "177" }, } }, "necromancer_dirty-pole": { "id": "218", "ident": "necromancer_dirty-pole", "name": "Dirty Pole", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_wizar_dirtypole.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Mágico] - [Sombrio]<\/div>Cria um mastro de carne que causa dano quando invocado. Aplica Apodrecer[Apodrecer] a medida que inimigos se aproximam.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "163", "#{skillefect}#": "Duração: 22 Seg.
[Apodrecer] Duração: 15 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "75" }, "2": { "#{skillatkadd}#": "194", "#{skillefect}#": "Duração: 24 Seg.
[Apodrecer] Duração: 16 Seg.
Consume 5 Corpse", "#{skillfactor}#": "100", "sp": "83" }, "3": { "#{skillatkadd}#": "225", "#{skillefect}#": "Duração: 26 Seg.
[Apodrecer] Duração: 17 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "91" }, "4": { "#{skillatkadd}#": "256", "#{skillefect}#": "Duração: 28 Seg.
[Apodrecer] Duração: 18 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "99" }, "5": { "#{skillatkadd}#": "287", "#{skillefect}#": "Duração: 30 Seg.
[Apodrecer] Duração: 19 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "107" }, "6": { "#{skillatkadd}#": "318", "#{skillefect}#": "Duração: 32 Seg.
[Apodrecer] Duração: 20 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "115" }, "7": { "#{skillatkadd}#": "349", "#{skillefect}#": "Duração: 34 Seg.
[Apodrecer] Duração: 21 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "123" }, "8": { "#{skillatkadd}#": "380", "#{skillefect}#": "Duração: 36 Seg.
[Apodrecer] Duração: 22 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "131" }, "9": { "#{skillatkadd}#": "411", "#{skillefect}#": "Duração: 38 Seg.
[Apodrecer] Duração: 23 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "139" }, "10": { "#{skillatkadd}#": "442", "#{skillefect}#": "Duração: 40 Seg.
[Apodrecer] Duração: 24 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "147" }, "11": { "#{skillatkadd}#": "473", "#{skillefect}#": "Duração: 42 Seg.
[Apodrecer] Duração: 25 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "155" }, "12": { "#{skillatkadd}#": "504", "#{skillefect}#": "Duração: 44 Seg.
[Apodrecer] Duração: 26 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "163" }, "13": { "#{skillatkadd}#": "535", "#{skillefect}#": "Duração: 46 Seg.
[Apodrecer] Duração: 27 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "171" }, "14": { "#{skillatkadd}#": "566", "#{skillefect}#": "Duração: 48 Seg.
[Apodrecer] Duração: 28 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "179" }, "15": { "#{skillatkadd}#": "597", "#{skillefect}#": "Duração: 50 Seg.
[Apodrecer] Duração: 29 Seg.
Consume 5 cadáveres", "#{skillfactor}#": "100", "sp": "187" }, } }, "krivis_zalciai": { "id": "219", "ident": "krivis_zalciai", "name": "Zalciai", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric1_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_1_1.mp4", "desc": "
<\/div>
Aumenta o poder de ataque crítico dos aliados ou reduz a resistência à ataques críticos do inimigos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(12 + SPR)
Resistência a críticos dos inimigos: -(6 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(18 + SPR)
Resistência a críticos dos inimigos: -(7 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(25 + SPR)
Resistência a críticos dos inimigos: -(9 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(31 + SPR)
Resistência a críticos dos inimigos: -(11 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(37 + SPR)
Resistência a críticos dos inimigos: -(12 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "38" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(44 + SPR)
Resistência a críticos dos inimigos: -(14 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "42" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(50 + SPR)
Resistência a críticos dos inimigos: -(15 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "46" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(56 + SPR)
Resistência a críticos dos inimigos: -(17 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "50" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(62 + SPR)
Resistência a críticos dos inimigos: -(19 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "54" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(69 + SPR)
Resistência a críticos dos inimigos: -(20 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "58" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(75 + SPR)
Resistência a críticos dos inimigos: -(22 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "62" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(81 + SPR)
Resistência a críticos dos inimigos: -(23 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "66" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(88 + SPR)
Resistência a críticos dos inimigos: -(25 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "70" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(94 + SPR)
Resistência a críticos dos inimigos: -(27 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "74" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de crítico para aliados: +(100 + SPR)
Resistência a críticos dos inimigos: -(28 + SPR × 0.8)", "#{skillfactor}#": "100", "sp": "78" }, } }, "necromancer_disinter": { "id": "220", "ident": "necromancer_disinter", "name": "Disinter", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard9_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_9_5.mp4", "desc": "
<\/div>
Exuma o corpo morto no alvo. Através da exumação é possível obter recompensas do monstro.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "24", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Alcance: 40", "#{skillfactor}#": "100", "sp": "60" }, } }, "krivis_daino": { "id": "221", "ident": "krivis_daino", "name": "Daino", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric1_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_1_2.mp4", "desc": "
<\/div>
Aumenta a capacidade dos aliados de receber aprimoramentos de status buffs.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "6", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +2
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "20" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +3
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +4
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "28" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +5
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +6
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +7
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +8
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +9
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +10
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +11
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +12
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +13
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +14
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +15
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de acúmulos: +16
Duração: 200 Seg.", "#{skillfactor}#": "100", "sp": "76" }, } }, "krivis_zaibas": { "id": "222", "ident": "krivis_zaibas", "name": "Zaibas", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric1_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_1_3.mp4", "desc": "
[Mágico] - [Elétrico]<\/div>
Conjura um quadrado mágico no chão que os inimigos que passarem por cima receberão múltiplos relâmpagos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "90", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 5
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "25" }, "2": { "#{skillatkadd}#": "109", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 6
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "3": { "#{skillatkadd}#": "128", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 7
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "4": { "#{skillatkadd}#": "147", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 8
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "5": { "#{skillatkadd}#": "166", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 9
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "6": { "#{skillatkadd}#": "185", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 10
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "7": { "#{skillatkadd}#": "204", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 11
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "8": { "#{skillatkadd}#": "223", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 12
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "9": { "#{skillatkadd}#": "242", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 13
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "10": { "#{skillatkadd}#": "261", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 14
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "11": { "#{skillatkadd}#": "280", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 15
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "12": { "#{skillatkadd}#": "299", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 16
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "13": { "#{skillatkadd}#": "318", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 17
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "14": { "#{skillatkadd}#": "337", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 18
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "15": { "#{skillatkadd}#": "356", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 19
Duração do Círculo Mágico: 30 Seg.", "#{skillfactor}#": "100", "sp": "95" }, } }, "alchemist_combustion": { "id": "223", "ident": "alchemist_combustion", "name": "Combustion", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard10_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_10_0.mp4", "desc": "
[Mágico] - [Fogo]<\/div>
Destrói os inimigos ao preço de gastar dinheiro.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "32", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "220", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "55" }, "2": { "#{skillatkadd}#": "301", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "62" }, "3": { "#{skillatkadd}#": "382", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "69" }, "4": { "#{skillatkadd}#": "463", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "76" }, "5": { "#{skillatkadd}#": "544", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "83" }, "6": { "#{skillatkadd}#": "625", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "90" }, "7": { "#{skillatkadd}#": "706", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "97" }, "8": { "#{skillatkadd}#": "787", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "104" }, "9": { "#{skillatkadd}#": "868", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "111" }, "10": { "#{skillatkadd}#": "949", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "118" }, "11": { "#{skillatkadd}#": "1030", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "125" }, "12": { "#{skillatkadd}#": "1111", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "132" }, "13": { "#{skillatkadd}#": "1192", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "139" }, "14": { "#{skillatkadd}#": "1273", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "146" }, "15": { "#{skillatkadd}#": "1354", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "153" }, } }, "alchemist_dig": { "id": "225", "ident": "alchemist_dig", "name": "Dig", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard10_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_10_1.mp4", "desc": "
<\/div>
Escava o local em busca de minérios.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "24", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
1 Item Obtido", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
2 Itens Obtidos", "#{skillfactor}#": "100", "sp": "45" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
3 Itens Obtidos", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
4 Itens Obtidos", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
5 Itens Obtidos", "#{skillfactor}#": "100", "sp": "60" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
6 Itens Obtidos", "#{skillfactor}#": "100", "sp": "65" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
7 Itens Obtidos", "#{skillfactor}#": "100", "sp": "70" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
8 Itens Obtidos", "#{skillfactor}#": "100", "sp": "75" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
9 Itens Obtidos", "#{skillfactor}#": "100", "sp": "80" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
10 Itens Obtidos", "#{skillfactor}#": "100", "sp": "85" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
11 Itens Obtidos", "#{skillfactor}#": "100", "sp": "90" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
12 Itens Obtidos", "#{skillfactor}#": "100", "sp": "95" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
13 Itens Obtidos", "#{skillfactor}#": "100", "sp": "100" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
14 Itens Obtidos", "#{skillfactor}#": "100", "sp": "105" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Recebe materiais diferentes, dependendo do terreno. 
15 Itens Obtidos", "#{skillfactor}#": "100", "sp": "110" }, } }, "krivis_divine-stigma": { "id": "226", "ident": "krivis_divine-stigma", "name": "Divine Stigma", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric1_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_1_4.mp4", "desc": "
<\/div>
Marca um inimigo que ao ser morto, quem o matou ganhará bônus de SRT e INT.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "36", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +15
Duração do Efeito: 30 Seg.
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +22
Duração do Efeito: 30 Seg.
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +29
Duração do Efeito: 30 Seg.
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +36
Duração do Efeito: 30 Seg.
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +43
Duração do Efeito: 30 Seg.
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +50
Duração do Efeito: 30 Seg.
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +57
Duração do Efeito: 30 Seg.
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +64
Duração do Efeito: 30 Seg.
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +71
Duração do Efeito: 30 Seg.
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, INT: +78
Duração do Efeito: 30 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "58" }, } }, "krivis_melstis": { "id": "227", "ident": "krivis_melstis", "name": "Melstis", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric1_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_1_5.mp4", "desc": "
<\/div>
Cria um círculo mágico no chão que mantém os aprimoramentos de status buffs dos aliados por mais tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 15 Seg.
Consume 5% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 20 Seg.
Consume 5% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 25 Seg.
Consume 5% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 30 Seg.
Consume 5% SP por seg.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 35 Seg.
Consume 5% SP per Seg.", "#{skillfactor}#": "100", "sp": "0" }, } }, "alchemist_gem-roasting": { "id": "228", "ident": "alchemist_gem-roasting", "name": "Gem Roasting", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard10_2.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_10_2.mp4", "desc": "
<\/div>Cria uma loja temporaria onde voce podera aprimorar gemas para fortalecer equipamentos.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 1", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 2", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 3", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 4", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 5", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 6", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 7", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 8", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 9", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz a penalidade do Nv. da Gema 10", "#{skillfactor}#": "100", "sp": "0" }, } }, "alchemist_briquetting": { "id": "229", "ident": "alchemist_briquetting", "name": "Briquetting", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard10_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_10_3.mp4", "desc": "
<\/div>Combine dois itens para mesclar ou alterar efeitos. Os itens poderão perder seu potencial como também terem seus efeitos ampliados ou reduzidos.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -5% e 5%", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -5.5% e 5.5%", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -6% e 6%", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -6.5% e 6.5%", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -7% e 7%", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -7.5% e 7.5%", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -8% e 8%", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -8.5% e 8.5%", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -9% e 9%", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -9.5% e 9.5%", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -10% e 10%", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -10.5% e 10.5%", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -11% e 11%	", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -11.5% e 11.5%", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "A cada Min (a cada briquetagem), Ataque Maximo altera entre -12% e 12%", "#{skillfactor}#": "100", "sp": "0" }, } }, "priest_aspersion": { "id": "230", "ident": "priest_aspersion", "name": "Aspersion", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric2_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_2_0.mp4", "desc": "
[Mágico] - [Divino]<\/div>
Aumenta a defesa de dez aliados e causa dano aos inimigos.
Requer uma Água Benta (1).

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "98", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +20%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "119", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +22%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "26" }, "3": { "#{skillatkadd}#": "140", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +24%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "161", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +26%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "182", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +28%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "38" }, "6": { "#{skillatkadd}#": "203", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +30%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "42" }, "7": { "#{skillatkadd}#": "224", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +32%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "46" }, "8": { "#{skillatkadd}#": "245", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +34%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "50" }, "9": { "#{skillatkadd}#": "266", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +36%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "54" }, "10": { "#{skillatkadd}#": "287", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +38%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "58" }, "11": { "#{skillatkadd}#": "308", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +40%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "62" }, "12": { "#{skillatkadd}#": "329", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +42%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta	", "#{skillfactor}#": "100", "sp": "66" }, "13": { "#{skillatkadd}#": "350", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +44%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "70" }, "14": { "#{skillatkadd}#": "371", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +46%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "74" }, "15": { "#{skillatkadd}#": "392", "#{skillefect}#": "Dano do Atributo: 0%
Defesa Física: +48%
Alvos: 10
Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "78" }, } }, "alchemist_tincturing": { "id": "231", "ident": "alchemist_tincturing", "name": "Tincturing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard10_4.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_10_4.mp4", "desc": "
<\/div>Extrai fluídos derivado de ervas para criar variados tipos de poções.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Criar uma poção através de uma receita", "#{skillfactor}#": "100", "sp": "0" }, } }, "alchemist_magnum-opus": { "id": "232", "ident": "alchemist_magnum-opus", "name": "Magnum Opus", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard10_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_10_5.mp4", "desc": "
<\/div>Usa fluídos alquímicos na criação de novos itens.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "CombinaçÕes possíveis: 3X3", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "CombinaçÕes possíveis: 4X4", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "CombinaçÕes possíveis: 5X5", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "CombinaçÕes possíveis: 6X6", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "CombinaçÕes possíveis: 7X7", "#{skillfactor}#": "100", "sp": "0" }, } }, "priest_monstrance": { "id": "233", "ident": "priest_monstrance", "name": "Monstrance", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric2_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_2_1.mp4", "desc": "
<\/div>
Conjura um quadrado no chão que reduz a evasão e defesa do inimigo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "23", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 1
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(6 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 2
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(8 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 3
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(11 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 4
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(13 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 5
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(15 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 6
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(18 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 7
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(20 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 8
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(23 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 9
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(25 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 10
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(27 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 11
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(30 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 12
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(32 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "67" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 13
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(35 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 14
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(37 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Circulos Mágicos: 15
Aumenta DEX para os aliados
Evasão e Defesa do Inimigo: -(39 + SPR × 0.4)
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "79" }, } }, "alchemist_item-awakening": { "id": "234", "ident": "alchemist_item-awakening", "name": "Item Awakening", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_wizard10_6.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/skill_10_6.mp4", "desc": "
<\/div>
Inicia um masmorra de batalha. Se for completado, o item terá seu poder oculto revelado. Caso não seja completado o potencial do item é reduzido.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "600", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Cada arma tem um diferêncial
Masmorras e Efeitos Potenciais
Jogadores que podem entrar: 1", "#{skillfactor}#": "100", "sp": "420" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Cada arma tem um diferêncial
Masmorras e Efeitos Potenciais
Jogadores que podem entrar: 2", "#{skillfactor}#": "100", "sp": "520" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Cada arma tem um diferêncial
Masmorras e Efeitos Potenciais
Jogadores que podem entrar: 3", "#{skillfactor}#": "100", "sp": "620" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Cada arma tem um diferêncial
Masmorras e Efeitos Potenciais
Jogadores que podem entrar: 4", "#{skillfactor}#": "100", "sp": "720" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Cada arma tem um diferêncial
Masmorras e Efeitos Potenciais
Jogadores que podem entrar: 5", "#{skillfactor}#": "100", "sp": "820" }, } }, "priest_blessing": { "id": "235", "ident": "priest_blessing", "name": "Blessing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric2_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_2_2.mp4", "desc": "
<\/div>
Aumenta o poder de ataque de habilidades de aliados. Requer uma Água Benta.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +15
Número de Golpes: 10
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "26" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +19
Número de Golpes: 20
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "31" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +23
Número de Golpes: 30
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "36" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +27
Número de Golpes: 40
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "41" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +31
Número de Golpes: 50
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "46" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +35
Número de Golpes: 60
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "51" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +38
Número de Golpes: 70
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "56" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +42
Número de Golpes: 80
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "61" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +46
Número de Golpes: 90
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "66" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +50
Número de Golpes: 100
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "71" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +54
Número de Golpes: 110
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "76" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +58
Número de Golpes: 120
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "81" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +62
Número de Golpes: 130
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "86" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +66
Número de Golpes: 140
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "91" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano Adicional: +70
Número de Golpes: 150
Aliados Efetados: 2
Duração: 45 Seg.
Consume 1 Pó Sagrado", "#{skillfactor}#": "100", "sp": "96" }, } }, "priest_resurrection": { "id": "236", "ident": "priest_resurrection", "name": "Resurrection", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric2_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_2_3.mp4", "desc": "
<\/div>
Ressuscita um aliado caído em campo de batalha.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "100", "#{skillefect}#": "Tempo de Conjuração: 6 Seg.
HP recuperado após ressurreição: 5%", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "110", "#{skillefect}#": "Tempo de Conjuração: 5 Seg.
HP recuperado após ressurreição: 10%", "#{skillfactor}#": "100", "sp": "35" }, "3": { "#{skillatkadd}#": "120", "#{skillefect}#": "Tempo de Conjuração: 4 Seg.
HP recuperado após ressurreição: 15%", "#{skillfactor}#": "100", "sp": "40" }, "4": { "#{skillatkadd}#": "130", "#{skillefect}#": "Tempo de Conjuração: 3 Seg.
HP recuperado após ressurreição: 20%", "#{skillfactor}#": "100", "sp": "45" }, "5": { "#{skillatkadd}#": "140", "#{skillefect}#": "Tempo de Conjuração: 2 Seg.
HP recuperado após ressurreição: 25%", "#{skillfactor}#": "100", "sp": "50" }, } }, "priest_sacrament": { "id": "237", "ident": "priest_sacrament", "name": "Sacrament", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric2_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_2_4.mp4", "desc": "
<\/div>
Aumenta o poder de ataque dos aliados e adiciona o tipo divino aos ataques por um tempo.
Requer um Plantago [Gyslotis].

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "90", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +12
Dano Adicional: +12
Duração: 220 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "32" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +15
Dano Adicional: +15
Duração: 240 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "37" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +18
Dano Adicional: +18
Duração: 260 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "42" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +21
Dano Adicional: +21
Duração: 280 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "47" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +24
Dano Adicional: +24
Duração: 300 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "52" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +27
Dano Adicional: +27
Duração: 320 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "57" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +30
Dano Adicional: +30
Duração: 340 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "62" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +33
Dano Adicional: +33
Duração: 360 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "67" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +37
Dano Adicional: +37
Duração: 380 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "72" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Bonus de Ataque do Tipo Sagrado: +40
Dano Adicional: +40
Duração: 400 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "77" }, } }, "priest_revive": { "id": "238", "ident": "priest_revive", "name": "Revive", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric2_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_2_5.mp4", "desc": "
<\/div>
Marca o alvo, que caso caia em batalha morrer, voltará a vida.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 5%
Invincibility: 1 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 10%
Invincibility: 2 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 15%
Invincibility: 3 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 20%
Invincibility: 4 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 25%
Invincibility: 5 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 30%
Invincibility: 6 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 35%
Invincibility: 7 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 40%
Invincibility: 8 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 45%
Invincibility: 9 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: 50%
Invincibility: 10 Seg.
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "78" }, } }, "priest_exorcise": { "id": "239", "ident": "priest_exorcise", "name": "Exorcise", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric2_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_2_6.mp4", "desc": "
[Mágico] - [Divino]<\/div>
Conjura uma luz divina sobre o inimigo que causa dano contínuo por determinado tempo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "36", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "285", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "350", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "3": { "#{skillatkadd}#": "415", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "4": { "#{skillatkadd}#": "480", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "545", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "54" }, } }, "bokor_hexing": { "id": "240", "ident": "bokor_hexing", "name": "Hexing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric3_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_3_0.mp4", "desc": "
<\/div>
Joga uma maldição contra o inimigo diminuindo sua resistência mágica.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "9", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(12 + SPR X 0.3)
Hexing Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(16 + SPR X 0.3)
Hexing Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(19 + SPR X 0.3)
Hexing Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(22 + SPR X 0.3)
Hexing Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(25 + SPR X 0.3)
Hexing Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(28 + SPR X 0.3)
Hexing Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(32 + SPR X 0.3)
Hexing Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(35 + SPR X 0.3)
Hexing Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(38 + SPR X 0.3)
Hexing Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(41 + SPR X 0.3)
Hexing Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(44 + SPR X 0.3)
Hexing Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(48 + SPR X 0.3)
Hexing Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(51 + SPR X 0.3)
Hexing Duração: 27 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(54 + SPR X 0.3)
Hexing Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "95" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: -(57 + SPR X 0.3)
Hexing Duração: 29 Seg.", "#{skillfactor}#": "100", "sp": "100" }, } }, "bokor_effigy": { "id": "241", "ident": "bokor_effigy", "name": "Effigy", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric3_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_3_1.mp4", "desc": "
[Mágico] - [Sombrio]<\/div>
Desfere dano contra o inimigo sob influência da habilidade Maldição. O inimigo receberá dano crítico na terceira vez que for acertado por essa habilidade.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "2", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "170", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x1.6 ~ x2.3", "#{skillfactor}#": "100", "sp": "23" }, "2": { "#{skillatkadd}#": "202", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x1.67 ~ x2.39", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "234", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x1.74 ~ x2.48", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "266", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x1.81 ~ x2.57", "#{skillfactor}#": "100", "sp": "35" }, "5": { "#{skillatkadd}#": "298", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x1.88 ~ x2.66", "#{skillfactor}#": "100", "sp": "39" }, "6": { "#{skillatkadd}#": "330", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x1.95 ~ x2.75", "#{skillfactor}#": "100", "sp": "43" }, "7": { "#{skillatkadd}#": "362", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x2.02 ~ x2.84", "#{skillfactor}#": "100", "sp": "47" }, "8": { "#{skillatkadd}#": "394", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x2.09 ~ x2.93", "#{skillfactor}#": "100", "sp": "51" }, "9": { "#{skillatkadd}#": "426", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x2.16 ~ x3.02", "#{skillfactor}#": "100", "sp": "55" }, "10": { "#{skillatkadd}#": "458", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x2.23 ~ x3.11", "#{skillfactor}#": "100", "sp": "59" }, "11": { "#{skillatkadd}#": "490", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x2.3 ~ x3.2", "#{skillfactor}#": "100", "sp": "63" }, "12": { "#{skillatkadd}#": "522", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x2.37 ~ x3.29", "#{skillfactor}#": "100", "sp": "67" }, "13": { "#{skillatkadd}#": "554", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x2.44 ~ x3.38", "#{skillfactor}#": "100", "sp": "71" }, "14": { "#{skillatkadd}#": "586", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x2.51 ~ x3.47", "#{skillfactor}#": "100", "sp": "75" }, "15": { "#{skillatkadd}#": "618", "#{skillefect}#": "Dano do Atributo: 0%
Bônus no 3º ataque: x2.58 ~ x3.56", "#{skillfactor}#": "100", "sp": "79" }, } }, "bokor_tet-mamak-la": { "id": "242", "ident": "bokor_tet-mamak-la", "name": "Tet Mamak La", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric3_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_3_2.mp4", "desc": "
<\/div>
Comanda os zumbis para irem ao local designado.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "9", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "27" }, } }, "bokor_zombify": { "id": "243", "ident": "bokor_zombify", "name": "Zombify", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric3_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_3_3.mp4", "desc": "
<\/div>
Invoca zumbis do solo. Inimigos mortos nessa área também se tornam zumbis.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "54", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 10 
Máx. de Zombie invocados: 4", "#{skillfactor}#": "100", "sp": "32" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 15 
Máx. de Zombie invocados: 5", "#{skillfactor}#": "100", "sp": "37" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 20 
Máx. de Zombie invocados: 6", "#{skillfactor}#": "100", "sp": "42" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 25 
Máx. de Zombie invocados: 7", "#{skillfactor}#": "100", "sp": "47" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 30 
Máx. de Zombie invocados: 8", "#{skillfactor}#": "100", "sp": "52" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 35 
Máx. de Zombie invocados: 9", "#{skillfactor}#": "100", "sp": "57" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 40 
Máx. de Zombie invocados: 10", "#{skillfactor}#": "100", "sp": "62" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 45 
Máx. de Zombie invocados: 11", "#{skillfactor}#": "100", "sp": "67" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 50 
Máx. de Zombie invocados: 12", "#{skillfactor}#": "100", "sp": "72" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 55 
Máx. de Zombie invocados: 13", "#{skillfactor}#": "100", "sp": "77" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 60 
Máx. de Zombie invocados: 14", "#{skillfactor}#": "100", "sp": "82" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 65 
Máx. de Zombie invocados: 15", "#{skillfactor}#": "100", "sp": "87" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 70 
Máx. de Zombie invocados: 16", "#{skillfactor}#": "100", "sp": "92" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 75 
Máx. de Zombie invocados: 17", "#{skillfactor}#": "100", "sp": "97" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 80 
Máx. de Zombie invocados: 18", "#{skillfactor}#": "100", "sp": "102" }, } }, "bokor_mackangdal": { "id": "244", "ident": "bokor_mackangdal", "name": "Mackangdal", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric3_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_3_4.mp4", "desc": "
<\/div>
Joga um Talismã em um aliado. O aliado ficará invencível enquanto o efeito do Talismã permanecer. Os danos recebidos pelo aliado serão absorvidos e devolvidos ao inimigo no fim do efeito da habilidade.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "67", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "75" }, } }, "bokor_bwa-kayiman": { "id": "245", "ident": "bokor_bwa-kayiman", "name": "BWA kayiman", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric3_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_3_5.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Faz com que os zumbis se reúnam em uma área específica. Os inimigos que encostarem nos zumbis serão empurrados e receberão danos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "81", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "200", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "2": { "#{skillatkadd}#": "245", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "3": { "#{skillatkadd}#": "290", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "4": { "#{skillatkadd}#": "335", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "5": { "#{skillatkadd}#": "380", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "425", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "61" }, "7": { "#{skillatkadd}#": "470", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "67" }, "8": { "#{skillatkadd}#": "515", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "9": { "#{skillatkadd}#": "560", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "10": { "#{skillatkadd}#": "605", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "85" }, } }, "bokor_samediveve": { "id": "246", "ident": "bokor_samediveve", "name": "Samediveve", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric3_6.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_3_6.mp4", "desc": "
<\/div>
Coloca uma bandeira no chão. Os aliados próximos receberão bônus de velocidade de movimento e de vida HP máxima.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "51", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +298
Velocidade de Movimento: +4
Duração: 70 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +373
Velocidade de Movimento: +5
Duração: 80 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +447
Velocidade de Movimento: +6
Duração: 90 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +522
Velocidade de Movimento: +7
Duração: 100 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +597
Velocidade de Movimento: +8
Duração: 110 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +671
Velocidade de Movimento: +9
Duração: 120 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +746
Velocidade de Movimento: +10
Duração: 130 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +820
Velocidade de Movimento: +11
Duração: 140 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +895
Velocidade de Movimento: +12
Duração: 150 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "81" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. HP: +970
Velocidade de Movimento: +13
Duração: 160 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "87" }, } }, "bokor_ogounveve": { "id": "247", "ident": "bokor_ogounveve", "name": "OgounVeve", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric3_7.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_3_7.mp4", "desc": "
<\/div>
Coloca uma bandeira no chão. Os aliados próximos receberão bônus de força.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "51", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +(INT X 0.5 + 2)
Raio de Ataque em Área: +1
Duração: 70 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +(INT X 0.5 + 3)
Raio de Ataque em Área: +2
Duração: 80 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +(INT X 0.5 + 4)
Raio de Ataque em Área: +2
Duração: 90 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +(INT X 0.5 + 5)
Raio de Ataque em Área: +3
Duração: 100 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +(INT X 0.5 + 6)
Raio de Ataque em Área: +3
Duração: 110 Seg.
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "57" }, } }, "bokor_damballa": { "id": "248", "ident": "bokor_damballa", "name": "Damballa", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric3_8.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_3_8.mp4", "desc": "
[Mágico] - [Sombrio]<\/div>
Explode todos os zumbis desferindo dados massivos nos inimigos ao redor.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "22", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "485", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Alvos: 3", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "605", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Alvos: 6", "#{skillfactor}#": "100", "sp": "41" }, "3": { "#{skillatkadd}#": "725", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Alvos: 9", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "845", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Alvos: 12", "#{skillfactor}#": "100", "sp": "53" }, "5": { "#{skillatkadd}#": "965", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Alvos: 15", "#{skillfactor}#": "100", "sp": "59" }, } }, "dievdirbys_carve-vakarine": { "id": "249", "ident": "dievdirbys_carve-vakarine", "name": "Carve Vakarine", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric4_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_4_0.mp4", "desc": "
<\/div>
Esculpe uma estátua da Deusa Vakarine.
A estátua funcionará como um ponto de teletransporte e você poderá escolher um mapa para se teletransportar. Apenas mapas dos quais você ja passou podem ser escolhidos.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "95", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 1
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "22" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 2
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 3
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "32" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 4
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "37" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 5
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "42" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 6
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "47" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 7
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "52" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 8
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "57" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 9
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "62" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 10
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "67" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 11
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "72" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 12
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "77" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 13
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "82" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 14
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "87" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Número de Portais: 15
Duração: 30 Seg.
Consume 1 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "92" }, } }, "dievdirbys_statue-of-goddess-zemyna": { "id": "250", "ident": "dievdirbys_statue-of-goddess-zemyna", "name": "Statue of Goddess Zemyna", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric4_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_4_1.mp4", "desc": "

<\/div>
Esculpe uma estátua da Deusa Zemyna.
Os aliados próximos á estátua usarão menos pontos de mana SP em suas habilidades.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "48", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 4 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 30 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "33" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 6 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 35 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 8 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 40 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 10 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 45 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "51" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 12 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 50 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "57" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 14 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 55 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "63" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 16 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 60 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "69" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 18 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 65 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "75" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 20 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 70 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "81" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 22 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 75 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "87" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 24 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 80 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "93" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 26 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 85 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "99" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 28 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 90 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "105" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 30 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 95 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "111" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Reduz 32 SP
Reduz o tempo de recuperação SP 5 Seg.
Duração: 100 Seg.
Consume 1 Madeira de Pinho", "#{skillfactor}#": "100", "sp": "117" }, } }, "dievdirbys_statue-of-goddess-laima": { "id": "251", "ident": "dievdirbys_statue-of-goddess-laima", "name": "Statue of Goddess Laima", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric4_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_4_2.mp4", "desc": "
<\/div>
Esculpe uma estátua da Deusa Lamia.
Aumenta a quantidade de inimigos que os ataques dos aliados podem atingir.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "52", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 30 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "33" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 35 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 40 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 45 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "51" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 50 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "57" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 55 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "63" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 60 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "69" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 65 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "75" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 70 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "81" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 75 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "87" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 80 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "93" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 85 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "99" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 90 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "105" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 95 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "111" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Tempo de Recarga: -20% 
Velocidade de Movimento: -20 
Duração: 100 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "117" }, } }, "dievdirbys_carve-attack": { "id": "252", "ident": "dievdirbys_carve-attack", "name": "Carve Attack", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric4_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_4_3.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Ataca o inimigo com uma faca de entalhe.
Essa habilidade tem bônus de dano contra inimigos de tipo Planta e é obtido material para esculpir estátuas quando o alvo é eliminado.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "24", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 5%", "#{skillfactor}#": "100", "sp": "29" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 10%", "#{skillfactor}#": "100", "sp": "34" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 15%", "#{skillfactor}#": "100", "sp": "39" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 20%", "#{skillfactor}#": "100", "sp": "44" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 25%", "#{skillfactor}#": "100", "sp": "49" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 30%", "#{skillfactor}#": "100", "sp": "54" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 35%", "#{skillfactor}#": "100", "sp": "59" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 40%", "#{skillfactor}#": "100", "sp": "64" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 45%", "#{skillfactor}#": "100", "sp": "69" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 50%", "#{skillfactor}#": "100", "sp": "74" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 55%", "#{skillfactor}#": "100", "sp": "79" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 60%", "#{skillfactor}#": "100", "sp": "84" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 65%", "#{skillfactor}#": "100", "sp": "89" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 70%", "#{skillfactor}#": "100", "sp": "94" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Danos adicionais a Monstros tipo planta : +100
Chance de Dropar Materiais para Estátua: 75%", "#{skillfactor}#": "100", "sp": "99" }, } }, "dievdirbys_carve-owl": { "id": "253", "ident": "dievdirbys_carve-owl", "name": "Carve Owl", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric4_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_4_4.mp4", "desc": "
[Mágico] - [Fogo]<\/div>
Esculpe uma estátua de uma coruja de Giltiné.
A coruja atacará os inimigos que estiverem a frente dela.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "105", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "205", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 50
Duração: 25 Seg.
Consume 2 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "257", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 60
Duração: 30 Seg.
Consume 2 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "43" }, "3": { "#{skillatkadd}#": "309", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 70
Duração: 35 Seg.
Consume 2 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "49" }, "4": { "#{skillatkadd}#": "361", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 80
Duração: 40 Seg.
Consume 2 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "413", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 90
Duração: 45 Seg.
Consume 2 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "61" }, "6": { "#{skillatkadd}#": "465", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 100
Duração: 50 Seg.
Consume 2 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "67" }, "7": { "#{skillatkadd}#": "517", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 110
Duração: 55 Seg.
Consume 2 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "73" }, "8": { "#{skillatkadd}#": "569", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 120
Duração: 60 Seg.
Consume 2 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "79" }, "9": { "#{skillatkadd}#": "621", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 130
Duração: 65 Seg.
Consume 2 Madeira de carvalho", "#{skillfactor}#": "100", "sp": "85" }, "10": { "#{skillatkadd}#": "673", "#{skillefect}#": "Dano do Atributo: 0%
Número de Bloqueios: 140
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "91" }, } }, "dievdirbys_carve-world-tree": { "id": "254", "ident": "dievdirbys_carve-world-tree", "name": "Carve World Tree", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric4_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_4_5.mp4", "desc": "
<\/div>
Esculpe uma estátua da Austras Koks. Todos os inimigos em volta receberão efeito Silenciado incapacitando-os de usar qualquer habilidade.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "92", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "39" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "45" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "51" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 24 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "57" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 27 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "63" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "69" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 33 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "75" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 36 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "81" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 39 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "87" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 42 Seg.
Consume 1 cinzas de madeira", "#{skillfactor}#": "100", "sp": "93" }, } }, "dievdirbys_statue-of-goddess-ausrine": { "id": "255", "ident": "dievdirbys_statue-of-goddess-ausrine", "name": "Statue of Goddess Ausrine", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric4_6.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_4_6.mp4", "desc": "
<\/div>
Esculpe uma estátua da Deusa Ausrine.
Quando os aliados dão três 3 voltas na estátua eles ganham um bônus de dano temporário.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "90", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração [Benção das Deusas]: 10 Seg.
Duração: 30 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração [Benção das Deusas]: 12 Seg.
Duração: 30 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração [Benção das Deusas]: 14 Seg.
Duração: 30 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração [Benção das Deusas]: 16 Seg.
Duração: 30 Seg.
Consume 1 madeira de cedro	", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração [Benção das Deusas]: 18 Seg.
Duração: 30 Seg.
Consume 1 madeira de cedro", "#{skillfactor}#": "100", "sp": "64" }, } }, "sadhu_out-of-body": { "id": "256", "ident": "sadhu_out-of-body", "name": "Out of Body", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric5_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_5_0.mp4", "desc": "
<\/div>
Cria uma projeção astral de seu personagem. A projeção pode andar livremente dentro de um raio próximo ao Espiritualista.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 150", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 160", "#{skillfactor}#": "100", "sp": "48" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 170", "#{skillfactor}#": "100", "sp": "54" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 180", "#{skillfactor}#": "100", "sp": "60" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 190", "#{skillfactor}#": "100", "sp": "66" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 200", "#{skillfactor}#": "100", "sp": "72" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 210", "#{skillfactor}#": "100", "sp": "78" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 220", "#{skillfactor}#": "100", "sp": "84" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 230", "#{skillfactor}#": "100", "sp": "90" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 240", "#{skillfactor}#": "100", "sp": "96" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 250", "#{skillfactor}#": "100", "sp": "102" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 260", "#{skillfactor}#": "100", "sp": "108" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 270", "#{skillfactor}#": "100", "sp": "114" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 280", "#{skillfactor}#": "100", "sp": "120" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Alcance fora do corpo: 290", "#{skillfactor}#": "100", "sp": "126" }, } }, "sadhu_prakriti": { "id": "257", "ident": "sadhu_prakriti", "name": "Prakriti", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric5_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_5_1.mp4", "desc": "
<\/div>
O corpo do Espiritualista volta rapidamente para onde a projeção estiver.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "9", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "20" }, } }, "sadhu_possession": { "id": "258", "ident": "sadhu_possession", "name": "Possession", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric5_2.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_5_2.mp4", "desc": "
[Mágico] - [Divino]<\/div>
Imobiliza o alvo por alguns segundos desferindo dano.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "284", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "355", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "3": { "#{skillatkadd}#": "426", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "497", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "5": { "#{skillatkadd}#": "568", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "6": { "#{skillatkadd}#": "639", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "7": { "#{skillatkadd}#": "710", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "8": { "#{skillatkadd}#": "781", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "77" }, "9": { "#{skillatkadd}#": "852", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "83" }, "10": { "#{skillatkadd}#": "923", "#{skillefect}#": "Dano do Atributo: 0%
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "89" }, } }, "sadhu_vashita-siddhi": { "id": "259", "ident": "sadhu_vashita-siddhi", "name": "Vashita Siddhi", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric5_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_5_3.mp4", "desc": "
<\/div>
Diminui a Força, Vigor e Inteligência, Espírito e Agilidade do alvo por determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "50", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -5
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -10
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -15
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -20
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -25
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -30
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -35
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -40
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -45
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -50
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -55
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -60
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -65
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -70
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "STR, CON, INT, SPR, DEX: -75
Consume SP por seg.
Máx. Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, } }, "sadhu_astral-body-explosion": { "id": "260", "ident": "sadhu_astral-body-explosion", "name": "Astral Body Explosion", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric5_4.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_5_4.mp4", "desc": "
[Mágico] - [Divino]<\/div>
Detona a projeção em uma explosão causando danos aos inimigos próximos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "300", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "370", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "51" }, "3": { "#{skillatkadd}#": "440", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "57" }, "4": { "#{skillatkadd}#": "510", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "63" }, "5": { "#{skillatkadd}#": "580", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "69" }, "6": { "#{skillatkadd}#": "650", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "75" }, "7": { "#{skillatkadd}#": "720", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "81" }, "8": { "#{skillatkadd}#": "790", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "87" }, "9": { "#{skillatkadd}#": "860", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "93" }, "10": { "#{skillatkadd}#": "930", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "99" }, "11": { "#{skillatkadd}#": "1000", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "105" }, "12": { "#{skillatkadd}#": "1070", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "111" }, "13": { "#{skillatkadd}#": "1140", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "117" }, "14": { "#{skillatkadd}#": "1210", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "123" }, "15": { "#{skillatkadd}#": "1280", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "129" }, } }, "sadhu_transmitprana": { "id": "261", "ident": "sadhu_transmitprana", "name": "TransmitPrana", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric5_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_5_5.mp4", "desc": "
<\/div>
Transfere Inteligência ao alvo selecionado.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "176", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Transfere 10 de INT", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Transfere 20 de INT", "#{skillfactor}#": "100", "sp": "43" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Transfere 30 de INT", "#{skillfactor}#": "100", "sp": "49" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Transfere 40 de INT", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Transfere 50 de INT", "#{skillfactor}#": "100", "sp": "61" }, } }, "paladin_smite": { "id": "262", "ident": "paladin_smite", "name": "Smite", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric6_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_6_0.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Desfere um golpe esmagador causando dano massivo aos inimigos próximos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "18", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "275", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "32" }, "2": { "#{skillatkadd}#": "344", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "37" }, "3": { "#{skillatkadd}#": "413", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "42" }, "4": { "#{skillatkadd}#": "482", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "47" }, "5": { "#{skillatkadd}#": "551", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "52" }, "6": { "#{skillatkadd}#": "620", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "57" }, "7": { "#{skillatkadd}#": "689", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "62" }, "8": { "#{skillatkadd}#": "758", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "67" }, "9": { "#{skillatkadd}#": "827", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "72" }, "10": { "#{skillatkadd}#": "896", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "77" }, "11": { "#{skillatkadd}#": "965", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "82" }, "12": { "#{skillatkadd}#": "1034", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "87" }, "13": { "#{skillatkadd}#": "1103", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "92" }, "14": { "#{skillatkadd}#": "1172", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "97" }, "15": { "#{skillatkadd}#": "1241", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 3", "#{skillfactor}#": "100", "sp": "102" }, } }, "paladin_restoration": { "id": "263", "ident": "paladin_restoration", "name": "Restoration", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric6_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_6_1.mp4", "desc": "
<\/div>
Conjura uma aura regenerativa que aumenta a restauração de pontos de vida HP dos aliados próximos por determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "150", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +100
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +117
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +134
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +151
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +168
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +185
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +202
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +219
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "77" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +235
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "83" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +252
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "89" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +269
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "95" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +286
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "101" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +303
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +320
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "113" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Recuperação de HP: +337
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "119" }, } }, "paladin_resist-elements": { "id": "264", "ident": "paladin_resist-elements", "name": "Resist Elements", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric6_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_6_2.mp4", "desc": "
<\/div>
Aumenta a resistência elemental à qualquer tipo de elemento, do alvo designado por determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "180", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +24
Chance de Anular: 1%
Defesa Mágica do inimigo: -30
Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +30
Chance de Anular: 2%
Defesa Mágica do inimigo: -35
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +36
Chance de Anular: 3%
Defesa Mágica do inimigo: -40
Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "49" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +42
Chance de Anular: 4%
Defesa Mágica do inimigo: -45
Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +49
Chance de Anular: 5%
Defesa Mágica do inimigo: -50
Duração: 85 Seg.", "#{skillfactor}#": "100", "sp": "61" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +55
Chance de Anular: 6%
Defesa Mágica do inimigo: -55
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "67" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +61
Chance de Anular: 7%
Defesa Mágica do inimigo: -60
Duração: 95 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +68
Chance de Anular: 8%
Defesa Mágica do inimigo: -65
Duração: 100 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +74
Chance de Anular: 9%
Defesa Mágica do inimigo: -70
Duração: 105 Seg.	", "#{skillfactor}#": "100", "sp": "85" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +80
Chance de Anular: 10%
Defesa Mágica do inimigo: -75
Duração: 110 Seg.	", "#{skillfactor}#": "100", "sp": "91" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +87
Chance de Anular: 11%
Defesa Mágica do inimigo: -80
Duração: 115 Seg.	", "#{skillfactor}#": "100", "sp": "97" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +93
Chance de Anular: 12%
Defesa Mágica do inimigo: -85
Duração: 120 Seg.", "#{skillfactor}#": "100", "sp": "103" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +99
Chance de Anular: 13%
Defesa Mágica do inimigo: -90
Duração: 125 Seg.", "#{skillfactor}#": "100", "sp": "109" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +105
Chance de Anular: 14%
Defesa Mágica do inimigo: -95
Duração: 130 Seg.", "#{skillfactor}#": "100", "sp": "115" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Resistência a Propriedade: +112
Chance de Anular: 15%
Defesa Mágica do inimigo: -100
Duração: 135 Seg.", "#{skillfactor}#": "100", "sp": "121" }, } }, "paladin_turn-undead": { "id": "265", "ident": "paladin_turn-undead", "name": "Turn Undead", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric6_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_6_3.mp4", "desc": "
<\/div>
Quando essa habilidade é usada há uma chance de qualquer um dos inimigos que seja do tipo mutante ou demônio serem destruídos instantaneamente.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "100", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 4", "#{skillfactor}#": "100", "sp": "38" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 5", "#{skillfactor}#": "100", "sp": "44" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 6", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 7", "#{skillfactor}#": "100", "sp": "56" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 8", "#{skillfactor}#": "100", "sp": "62" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 9", "#{skillfactor}#": "100", "sp": "68" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 10", "#{skillfactor}#": "100", "sp": "74" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 11", "#{skillfactor}#": "100", "sp": "80" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 12", "#{skillfactor}#": "100", "sp": "86" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 13", "#{skillfactor}#": "100", "sp": "92" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 14", "#{skillfactor}#": "100", "sp": "98" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 15", "#{skillfactor}#": "100", "sp": "104" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 16", "#{skillfactor}#": "100", "sp": "110" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 17", "#{skillfactor}#": "100", "sp": "116" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Alvos: 18", "#{skillfactor}#": "100", "sp": "122" }, } }, "paladin_conversion": { "id": "266", "ident": "paladin_conversion", "name": "Conversion", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric6_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_6_4.mp4", "desc": "
<\/div>
Cria um círculo mágico de conversão na área. Os inimigos que estiverem dentro do círculo têm a chance de se converterem e atacarem outros inimigos durante determinante tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 11 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 12 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 13 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 14 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 15 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 16 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 17 Seg.", "#{skillfactor}#": "100", "sp": "76" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 18 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 19 Seg.", "#{skillfactor}#": "100", "sp": "88" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração do Círculo Mágico: 20 Seg.", "#{skillfactor}#": "100", "sp": "94" }, } }, "paladin_barrier": { "id": "267", "ident": "paladin_barrier", "name": "Barrier", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric6_5.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_6_5.mp4", "desc": "
<\/div>
Cria uma barreira divina que empurra os inimigos para fora e os impede de entrar na área por determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "135", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(50 + SPR)
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(70 + SPR)
Duração: 52 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(90 + SPR)
Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(110 + SPR)
Duração: 57 Seg.	", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(130 + SPR)
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "73" }, } }, "monk_iron-skin": { "id": "268", "ident": "monk_iron-skin", "name": "Iron Skin", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric7_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_7_0.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Faz com que a pele fique dura como aço temperado, repelindo ataques de monstros e causando dano.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "100", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 60% do ataque físico
Máx. Duração: 5 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 70% do ataque físico
Máx. Duração: 6 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 80% do ataque físico
Máx. Duração: 7 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 90% do ataque físico
Máx. Duração: 8 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 100% do ataque físico
Máx. Duração: 9 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 110% do ataque físico
Máx. Duração: 10 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 120% do ataque físico
Máx. Duração: 11 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "65" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 130% do ataque físico
Máx. Duração: 12 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 140% do ataque físico
Máx. Duração: 13 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 150% do ataque físico
Máx. Duração: 14 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "80" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 160% do ataque físico
Máx. Duração: 15 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "85" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 170% do ataque físico
Máx. Duração: 16 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "90" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 180% do ataque físico
Máx. Duração: 17 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "95" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 190% do ataque físico
Máx. Duração: 18 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "100" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Reflete 200% do ataque físico
Máx. Duração: 19 Seg.
Não bloquea magia e ataque de longo alcance", "#{skillfactor}#": "100", "sp": "105" }, } }, "monk_double-punch": { "id": "269", "ident": "monk_double-punch", "name": "Double Punch", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric7_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_7_1.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Envolve o punho de energia que ao socar causa dano duplo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "311", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "376", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "441", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "506", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "571", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "636", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "701", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "766", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "831", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "896", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "961", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "1026", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "1091", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "1156", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "1221", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Stamina", "#{skillfactor}#": "100", "sp": "0" }, } }, "monk_palm-strike": { "id": "270", "ident": "monk_palm-strike", "name": "Palm Strike", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric7_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_7_2.mp4", "desc": "
[Físico] - [Perfurante]<\/div>
Envolve a palma da mão de energia, que ao atacar causa dano lançando o inimigo para longe.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "521", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "619", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "35" }, "3": { "#{skillatkadd}#": "717", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "40" }, "4": { "#{skillatkadd}#": "815", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "45" }, "5": { "#{skillatkadd}#": "913", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "50" }, "6": { "#{skillatkadd}#": "1011", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "55" }, "7": { "#{skillatkadd}#": "1109", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "1207", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "65" }, "9": { "#{skillatkadd}#": "1305", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "70" }, "10": { "#{skillatkadd}#": "1403", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "75" }, "11": { "#{skillatkadd}#": "1501", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "80" }, "12": { "#{skillatkadd}#": "1599", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "85" }, "13": { "#{skillatkadd}#": "1697", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "90" }, "14": { "#{skillatkadd}#": "1795", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "95" }, "15": { "#{skillatkadd}#": "1893", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 6", "#{skillfactor}#": "100", "sp": "100" }, } }, "monk_hand-knife": { "id": "271", "ident": "monk_hand-knife", "name": "Hand Knife", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric7_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_7_3.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Envolve a palma da mão com energia que ao atacar causa dando massivo no alvo a ponto de lançá-lo ao alto.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "462", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "28" }, "2": { "#{skillatkadd}#": "557", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "32" }, "3": { "#{skillatkadd}#": "652", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "36" }, "4": { "#{skillatkadd}#": "747", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "40" }, "5": { "#{skillatkadd}#": "842", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "44" }, "6": { "#{skillatkadd}#": "937", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "48" }, "7": { "#{skillatkadd}#": "1032", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "52" }, "8": { "#{skillatkadd}#": "1127", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "56" }, "9": { "#{skillatkadd}#": "1222", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "60" }, "10": { "#{skillatkadd}#": "1317", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "64" }, "11": { "#{skillatkadd}#": "1412", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "68" }, "12": { "#{skillatkadd}#": "1507", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "72" }, "13": { "#{skillatkadd}#": "1602", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "76" }, "14": { "#{skillatkadd}#": "1697", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "80" }, "15": { "#{skillatkadd}#": "1792", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "84" }, } }, "monk_one-inch-punch": { "id": "272", "ident": "monk_one-inch-punch", "name": "One Inch Punch", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric7_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_7_4.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Concentra energia no punho para desenvolver um golpe rápido e próximo ao monstro.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "717", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "32" }, "2": { "#{skillatkadd}#": "869", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "3": { "#{skillatkadd}#": "1021", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "40" }, "4": { "#{skillatkadd}#": "1173", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "5": { "#{skillatkadd}#": "1325", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "6": { "#{skillatkadd}#": "1477", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "7": { "#{skillatkadd}#": "1629", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "56" }, "8": { "#{skillatkadd}#": "1781", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "9": { "#{skillatkadd}#": "1933", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "10": { "#{skillatkadd}#": "2085", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "68" }, } }, "monk_energy-blast": { "id": "273", "ident": "monk_energy-blast", "name": "Energy Blast", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric7_5.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_7_5.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Concentra energia em ambas mão que ao juntá-las lança um raio de energia poderoso causando dano massivo e constante ao alvo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "380", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "75" }, "2": { "#{skillatkadd}#": "465", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "84" }, "3": { "#{skillatkadd}#": "550", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "93" }, "4": { "#{skillatkadd}#": "635", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "102" }, "5": { "#{skillatkadd}#": "720", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "111" }, "6": { "#{skillatkadd}#": "805", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "120" }, "7": { "#{skillatkadd}#": "890", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "129" }, "8": { "#{skillatkadd}#": "975", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "138" }, "9": { "#{skillatkadd}#": "1060", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "147" }, "10": { "#{skillatkadd}#": "1145", "#{skillefect}#": "Dano do Atributo: 0%
Consume 30 SP por seg.", "#{skillfactor}#": "100", "sp": "156" }, } }, "monk_god-finger-flicking": { "id": "274", "ident": "monk_god-finger-flicking", "name": "God Finger Flicking", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric7_6.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_7_6.mp4", "desc": "
[Físico] - [Golpe]<\/div>
Usa uma moeda para lançá-la em alta velocidade usando os dedos.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "742", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "922", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "1102", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "1282", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "1462", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "1642", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "1822", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "65" }, "8": { "#{skillatkadd}#": "2002", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "2182", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "2362", "#{skillefect}#": "Dano do Atributo: 0%
Consume 100 Prata [Silver]", "#{skillfactor}#": "100", "sp": "80" }, } }, "monk_golden-bell-shield": { "id": "275", "ident": "monk_golden-bell-shield", "name": "Golden Bell Shield", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric7_7.png", "circle": "3", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_7_7.mp4", "desc": "
<\/div>
Conjura um escudo em si próprio que durante determinado tempo deixa o Monge inatingível.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "180", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "7", "#{skillefect}#": "Máx. Duração: 4 Seg.
Capaz de bloquear a magia e projéteis de longo alcance", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "7", "#{skillefect}#": "Máx. Duração: 5 Seg.
Capaz de bloquear a magia e projéteis de longo alcance", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "7", "#{skillefect}#": "Máx. Duração: 6 Seg.
Capaz de bloquear a magia e projéteis de longo alcance", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "7", "#{skillefect}#": "Máx. Duração: 7 Seg.
Capaz de bloquear a magia e projéteis de longo alcance", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "7", "#{skillefect}#": "Máx. Duração: 8 Seg.
Capaz de bloquear a magia e projéteis de longo alcance", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "7", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "70" }, "7": { "#{skillatkadd}#": "7", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "76" }, "8": { "#{skillatkadd}#": "7", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "82" }, "9": { "#{skillatkadd}#": "7", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "88" }, "10": { "#{skillatkadd}#": "7", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "94" }, } }, "pardoner_simony": { "id": "276", "ident": "pardoner_simony", "name": "Simony", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric8_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_8_0.mp4", "desc": "
<\/div>
Cria um pergaminho que permite o uso de habilidades sejam feitas sem o "custo" normal que ela tenha.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Pergaminhos desaparecem após o uso.", "#{skillfactor}#": "100", "sp": "0" }, } }, "pardoner_indulgentia": { "id": "277", "ident": "pardoner_indulgentia", "name": "Indulgentia", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric8_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_8_1.mp4", "desc": "
<\/div>
Ritual que diminui algum estado do alvo possivelmente causando dano no processo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "398", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 4 inimigos
Curas todo do Grupo [Party]
Cura 4 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "483", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 5 inimigos
Curas todo do Grupo [Party]
Cura 5 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "568", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 6 inimigos
Curas todo do Grupo [Party]
Cura 6 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "653", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 7 inimigos
Curas todo do Grupo [Party]
Cura 7 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "738", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 8 inimigos
Curas todo do Grupo [Party]
Cura 8 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "73" }, "6": { "#{skillatkadd}#": "823", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 9 inimigos
Curas todo do Grupo [Party]
Cura 9 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "908", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 10 inimigos
Curas todo do Grupo [Party]
Cura 10 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "87" }, "8": { "#{skillatkadd}#": "993", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 11 inimigos
Curas todo do Grupo [Party]
Cura 11 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "94" }, "9": { "#{skillatkadd}#": "1078", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 12 inimigos
Curas todo do Grupo [Party]
Cura 12 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "101" }, "10": { "#{skillatkadd}#": "1163", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 13 inimigos
Curas todo do Grupo [Party]
Cura 13 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "108" }, "11": { "#{skillatkadd}#": "1248", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 14 inimigos
Curas todo do Grupo [Party]
Cura 14 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "115" }, "12": { "#{skillatkadd}#": "1333", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 15 inimigos
Curas todo do Grupo [Party]
Cura 15 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "122" }, "13": { "#{skillatkadd}#": "1418", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 16 inimigos
Curas todo do Grupo [Party]
Cura 16 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "129" }, "14": { "#{skillatkadd}#": "1503", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 17 inimigos
Curas todo do Grupo [Party]
Cura 17 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "136" }, "15": { "#{skillatkadd}#": "1588", "#{skillefect}#": "Dano do Atributo: 0%
Ataca 18 inimigos
Curas todo do Grupo [Party]
Cura 18 aliados
Consume 500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "143" }, } }, "pardoner_discern-evil": { "id": "278", "ident": "pardoner_discern-evil", "name": "Discern Evil", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric8_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_8_2.mp4", "desc": "
<\/div>
Mantém por mais tempo o efeito nocivo que esteja sobre o alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +2 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +4 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +6 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +8 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +10 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +12 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +14 Seg.", "#{skillfactor}#": "100", "sp": "85" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +16 Seg.", "#{skillfactor}#": "100", "sp": "92" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +18 Seg.", "#{skillfactor}#": "100", "sp": "99" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +20 Seg.", "#{skillfactor}#": "100", "sp": "106" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +22 Seg.", "#{skillfactor}#": "100", "sp": "113" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +24 Seg.", "#{skillfactor}#": "100", "sp": "120" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +26 Seg.", "#{skillfactor}#": "100", "sp": "127" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +28 Seg.", "#{skillfactor}#": "100", "sp": "134" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: +30 Seg.", "#{skillfactor}#": "100", "sp": "141" }, } }, "pardoner_spell-shop": { "id": "279", "ident": "pardoner_spell-shop", "name": "Spell Shop", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric8_3.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_8_3.mp4", "desc": "
<\/div>
Cria uma loja temporária que vende itens benéficos buffs.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Additional Duração: 7 min.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Additional Duração: 14 min.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Additional Duração: 21 min.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Additional Duração: 28 min.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Additional Duração: 35 min.", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "0" }, } }, "pardoner_oblation": { "id": "280", "ident": "pardoner_oblation", "name": "Oblation", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric8_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_8_4.mp4", "desc": "
<\/div>
Cria uma urna de oferendas em torno de uma estátua de Lamia.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 100", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 200", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 300", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 400", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 500", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 600", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 700", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 800", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 900", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. de Compras: 1000", "#{skillfactor}#": "100", "sp": "0" }, } }, "druid_telepath": { "id": "281", "ident": "druid_telepath", "name": "Telepath", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric9_0.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_9_0.mp4", "desc": "
<\/div>
Faz com que controle o movimento do monstro alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "55" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "95" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "103" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "111" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "119" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "127" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "135" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "143" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "151" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "159" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "167" }, } }, "druid_carnivory": { "id": "282", "ident": "druid_carnivory", "name": "Carnivory", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric9_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_9_1.mp4", "desc": "
<\/div>
Se um monstro estiver sobre plantas, o Druida poderá usar essa habilidade que faz com que as plantas causem dano ao alvo.

", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "645", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 22
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "778", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 24
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "911", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 26
Duração: 10 Seg.	", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "1044", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 28
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "1177", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 30
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "6": { "#{skillatkadd}#": "1310", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 32
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "1443", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 34
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "8": { "#{skillatkadd}#": "1576", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 36
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "94" }, "9": { "#{skillatkadd}#": "1709", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 38
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "101" }, "10": { "#{skillatkadd}#": "1842", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 40
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "11": { "#{skillatkadd}#": "1975", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 42
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "115" }, "12": { "#{skillatkadd}#": "2108", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 44
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "122" }, "13": { "#{skillatkadd}#": "2241", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 46
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "129" }, "14": { "#{skillatkadd}#": "2374", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 48
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "136" }, "15": { "#{skillatkadd}#": "2507", "#{skillefect}#": "Dano do Atributo: 0%
Número de Golpes: 50
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "143" }, } }, "druid_shape-shifiting": { "id": "283", "ident": "druid_shape-shifiting", "name": "Shape Shifiting", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric9_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_9_2.mp4", "desc": "
<\/div>
Se transforma temporariamente no monstro alvo, caso ele seja do tipo planta, animal ou inseto. Após se transformar só é possível usar ataques básicos.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 60 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 70 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 80 Seg.", "#{skillfactor}#": "100", "sp": "61" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 90 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 100 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 110 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 120 Seg.", "#{skillfactor}#": "100", "sp": "89" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 130 Seg.", "#{skillfactor}#": "100", "sp": "96" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 140 Seg.", "#{skillfactor}#": "100", "sp": "103" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 150 Seg.", "#{skillfactor}#": "100", "sp": "110" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 160 Seg.", "#{skillfactor}#": "100", "sp": "117" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 170 Seg.", "#{skillfactor}#": "100", "sp": "124" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 180 Seg.", "#{skillfactor}#": "100", "sp": "131" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 190 Seg.", "#{skillfactor}#": "100", "sp": "138" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 200 Seg.", "#{skillfactor}#": "100", "sp": "145" }, } }, "druid_transform": { "id": "284", "ident": "druid_transform", "name": "Transform", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric9_3.png", "circle": "2", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_9_3.mp4", "desc": "
<\/div>
Se transforma no último monstro usado pela habilidade Trocar de Forma.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 60 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 70 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 80 Seg.", "#{skillfactor}#": "100", "sp": "61" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 90 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 100 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 110 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 120 Seg.", "#{skillfactor}#": "100", "sp": "89" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 130 Seg.", "#{skillfactor}#": "100", "sp": "96" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 140 Seg.", "#{skillfactor}#": "100", "sp": "103" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Capaz de usar a habilidade do monstro
Duração Máx.: 150 Seg.", "#{skillfactor}#": "100", "sp": "110" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "117" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "124" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "131" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "138" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "145" }, } }, "druid_sterea-troph": { "id": "285", "ident": "druid_sterea-troph", "name": "Sterea Troph", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric9_4.png", "circle": "2", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_9_4.mp4", "desc": "
<\/div>
Faz com as que as plantas do alvo designado protejam e impeçam os monstros de atacar o Druida e seus aliados durante determinado tempo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "94" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "101" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "115" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "122" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "129" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "136" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "143" }, } }, "druid_chortasmata": { "id": "286", "ident": "druid_chortasmata", "name": "Chortasmata", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric9_5.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_9_5.mp4", "desc": "
<\/div>
Cria uma área em que monstros que estejam neste local tenham seu tipo mudado para Planta.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "68" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "76" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "92" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "116" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "124" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "132" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "140" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "148" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "156" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "164" }, } }, "oracle_prophecy": { "id": "287", "ident": "oracle_prophecy", "name": "Prophecy", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/icon_cler_prophecy.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "

[Efeito] - [Bonus]<\/div>Protege seu grupo de debuffs por um curto período de tempo. A quantidade de debuffs que você fica protegido depende do nível da habilidade.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 10 Seg.
Aplicado 2 vezes", "#{skillfactor}#": "100", "sp": "65" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 15 Seg.
Aplicado 4 vezes", "#{skillfactor}#": "100", "sp": "70" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.
Aplicado 6 vezes", "#{skillfactor}#": "100", "sp": "75" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.
Aplicado 8 vezes", "#{skillfactor}#": "100", "sp": "80" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Aplicado 10 vezes", "#{skillfactor}#": "100", "sp": "85" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 35 Seg.
Aplicado 12 vezes", "#{skillfactor}#": "100", "sp": "90" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 40 Seg.
Aplicado 14 vezes", "#{skillfactor}#": "100", "sp": "95" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 45 Seg.
Aplicado 16 vezes", "#{skillfactor}#": "100", "sp": "100" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.
Aplicado 18 vezes", "#{skillfactor}#": "100", "sp": "105" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 55 Seg.
Aplicado 20 vezes", "#{skillfactor}#": "100", "sp": "110" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Aplicado 22 vezes", "#{skillfactor}#": "100", "sp": "115" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 65 Seg.
Aplicado 24 vezes", "#{skillfactor}#": "100", "sp": "120" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 70 Seg.
Aplicado 26 vezes", "#{skillfactor}#": "100", "sp": "125" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 75 Seg.
Aplicado 28 vezes", "#{skillfactor}#": "100", "sp": "130" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 80 Seg.
Aplicado 30 times", "#{skillfactor}#": "100", "sp": "135" }, } }, "oracle_arcane-energy": { "id": "288", "ident": "oracle_arcane-energy", "name": "Arcane Energy", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric10_1.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_10_1.mp4", "desc": "
<\/div>
Aumenta o SP e a Stamina do alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "49", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +3%
Máx. STA: +9
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "37" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +6%
Máx. STA: +13
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "43" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +9%
Máx. STA: +17
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "49" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +12%
Máx. STA: +21
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +15%
Máx. STA: +25
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "61" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +18%
Máx. STA: +29
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "67" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +21%
Máx. STA: +33
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "73" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +24%
Máx. STA: +37
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "79" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +27%
Máx. STA: +41
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "85" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +30%
Máx. STA: +45
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "91" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +33%
Máx. STA: +49
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "97" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +36%
Máx. STA: +53
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "103" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +39%
Máx. STA: +57
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "109" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +42%
Máx. STA: +61
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "115" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. SP: +45%
Máx. STA: +65
Duração: 30 min.", "#{skillfactor}#": "100", "sp": "121" }, } }, "oracle_change": { "id": "289", "ident": "oracle_change", "name": "Change", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric10_2.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_10_2.mp4", "desc": "
<\/div>
Muda o monstro alvo em algum outro do mesmo level.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -1 ~ +1", "#{skillfactor}#": "100", "sp": "38" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -2 ~ +2", "#{skillfactor}#": "100", "sp": "44" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -3 ~ +3", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -4 ~ +4", "#{skillfactor}#": "100", "sp": "56" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -5 ~ +5", "#{skillfactor}#": "100", "sp": "62" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -6 ~ +6", "#{skillfactor}#": "100", "sp": "68" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -7 ~ +7", "#{skillfactor}#": "100", "sp": "74" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -8 ~ +8", "#{skillfactor}#": "100", "sp": "80" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -9 ~ +9", "#{skillfactor}#": "100", "sp": "86" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -10 ~ +10", "#{skillfactor}#": "100", "sp": "92" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -11 ~ +11", "#{skillfactor}#": "100", "sp": "98" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -12 ~ +12", "#{skillfactor}#": "100", "sp": "104" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -13 ~ +13", "#{skillfactor}#": "100", "sp": "110" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -14 ~ +14", "#{skillfactor}#": "100", "sp": "116" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível do Alvo: -15 ~ +15", "#{skillfactor}#": "100", "sp": "122" }, } }, "oracle_clairvoyance": { "id": "290", "ident": "oracle_clairvoyance", "name": "Clairvoyance", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric10_3.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_10_3.mp4", "desc": "
<\/div>
Permite ao Oráculo prever qual será a recompensa que o monstro-alvo deixará cair com sua morte.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplicada instantaneamente
depois de usar redefinição", "#{skillfactor}#": "100", "sp": "55" }, } }, "oracle_counter-spell": { "id": "291", "ident": "oracle_counter-spell", "name": "Counter Spell", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric10_4.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_10_4.mp4", "desc": "
<\/div>
Anula todos efeitos e habilidades mágicas ao redor.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "124", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 5", "#{skillfactor}#": "100", "sp": "65" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 7", "#{skillfactor}#": "100", "sp": "75" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 9", "#{skillfactor}#": "100", "sp": "85" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 11", "#{skillfactor}#": "100", "sp": "95" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 13", "#{skillfactor}#": "100", "sp": "105" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 15", "#{skillfactor}#": "100", "sp": "115" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 17", "#{skillfactor}#": "100", "sp": "125" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 19", "#{skillfactor}#": "100", "sp": "135" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 21", "#{skillfactor}#": "100", "sp": "145" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 23", "#{skillfactor}#": "100", "sp": "155" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 25", "#{skillfactor}#": "100", "sp": "165" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 27", "#{skillfactor}#": "100", "sp": "175" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 29", "#{skillfactor}#": "100", "sp": "185" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 31", "#{skillfactor}#": "100", "sp": "195" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove círculos mágicos próximos 
Duração Máx.: 30 Seg.
Alvos: 33", "#{skillfactor}#": "100", "sp": "205" }, } }, "oracle_forecast": { "id": "292", "ident": "oracle_forecast", "name": "Forecast", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric10_5.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_10_5.mp4", "desc": "
<\/div>
Permite ao Oráculo prever os ataques do monstro-alvo.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "53" }, } }, "oracle_resetting": { "id": "293", "ident": "oracle_resetting", "name": "Resetting", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric10_6.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_10_6.mp4", "desc": "
<\/div>
Altera a recompensa do monstro para alguma outra possível. Caso a recompensa inicial seja alguma do tipo rara a habilidade emitirá um aviso.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "300", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "58" }, } }, "oracle_death-sentence": { "id": "294", "ident": "oracle_death-sentence", "name": "Death Sentence", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_cleric10_7.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/skill_10_7.mp4", "desc": "
<\/div>
O monstro-alvo é condenado a morte para quando a contagem regressiva chegar a 0, ele ser destruído.

", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "600", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 56 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 52 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 48 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 44 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "96" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 36 Seg.", "#{skillfactor}#": "100", "sp": "105" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 32 Seg.", "#{skillfactor}#": "100", "sp": "114" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "123" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "132" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "141" }, } }, "sapper_stake-stockades": { "id": "295", "ident": "sapper_stake-stockades", "name": "Stake Stockades", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_archer_StakeStockades.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/skill_3_7.mp4", "desc": "
[Físico] - [Perfurante]<\/div>Instale uma armadilha defensiva de espinho que causará dano nos inimigos que se aproximarem", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "39", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "92", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "25" }, "2": { "#{skillatkadd}#": "115", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "29" }, "3": { "#{skillatkadd}#": "138", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "33" }, "4": { "#{skillatkadd}#": "161", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "37" }, "5": { "#{skillatkadd}#": "184", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "41" }, "6": { "#{skillatkadd}#": "207", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "45" }, "7": { "#{skillatkadd}#": "230", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "49" }, "8": { "#{skillatkadd}#": "253", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "53" }, "9": { "#{skillatkadd}#": "276", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "57" }, "10": { "#{skillatkadd}#": "299", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "61" }, "11": { "#{skillatkadd}#": "322", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "65" }, "12": { "#{skillatkadd}#": "345", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "69" }, "13": { "#{skillatkadd}#": "368", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "73" }, "14": { "#{skillatkadd}#": "391", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "77" }, "15": { "#{skillatkadd}#": "414", "#{skillefect}#": "Dano do Atributo: 0%
3 ataques sucessivos", "#{skillfactor}#": "100", "sp": "81" }, } }, "fencer_attaque-composee": { "id": "296", "ident": "fencer_attaque-composee", "name": "Attaque Composee", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_attaquecomposee.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_AttaqueComposee.mp4", "desc": "
[Físico] - [Perfurante]<\/div>Lança seu florete a frente num movimento causando dano ao alvo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'FloreteEscudoAdaga', "levellist": { "1": { "#{skillatkadd}#": "242", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "36" }, "2": { "#{skillatkadd}#": "283", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "324", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "365", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "406", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "52" }, "6": { "#{skillatkadd}#": "447", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "7": { "#{skillatkadd}#": "488", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "529", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "64" }, "9": { "#{skillatkadd}#": "570", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "68" }, "10": { "#{skillatkadd}#": "611", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "72" }, } }, "fencer_attaque-coquille": { "id": "297", "ident": "fencer_attaque-coquille", "name": "Attaque Coquille", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_attaquecoquille.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_ataque_choncha.mp4", "desc": "
[Físico] - [Golpe]<\/div>Ataca o inimigo usando o 'guarda-mão' do florete. Por um certo tempo a resistência inimigo contra florete é ignorada.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "8", "element": "none", "reqstance": 'FloreteEscudoAdaga', "levellist": { "1": { "#{skillatkadd}#": "751", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "31" }, "2": { "#{skillatkadd}#": "910", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "35" }, "3": { "#{skillatkadd}#": "1069", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "39" }, "4": { "#{skillatkadd}#": "1228", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "43" }, "5": { "#{skillatkadd}#": "1387", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "47" }, "6": { "#{skillatkadd}#": "1546", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "51" }, "7": { "#{skillatkadd}#": "1705", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "55" }, "8": { "#{skillatkadd}#": "1864", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "59" }, "9": { "#{skillatkadd}#": "2023", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "63" }, "10": { "#{skillatkadd}#": "2182", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "67" }, "11": { "#{skillatkadd}#": "2341", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "71" }, "12": { "#{skillatkadd}#": "2500", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "75" }, "13": { "#{skillatkadd}#": "2659", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "79" }, "14": { "#{skillatkadd}#": "2818", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "83" }, "15": { "#{skillatkadd}#": "2977", "#{skillefect}#": "Dano do Atributo: [?]%
Duração: [?] Seg.", "#{skillfactor}#": "100", "sp": "87" }, } }, "fencer_esquive-toucher": { "id": "298", "ident": "fencer_esquive-toucher", "name": "Esquive Toucher", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_esquivetoucher.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_esquiva_toucher.mp4", "desc": "
[Físico] - [Perfurante]<\/div>Um ataque complexo que evita ataques inimigos enquanto move-se rapidamente para a frente, atacando continuamente ao mesmo tempo que se esquiva.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'FloreteEscudoAdaga', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +10%", "#{skillfactor}#": "100", "sp": "43" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +20%", "#{skillfactor}#": "100", "sp": "47" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +30%", "#{skillfactor}#": "100", "sp": "51" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +40%", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +50%", "#{skillfactor}#": "100", "sp": "59" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +60%", "#{skillfactor}#": "100", "sp": "63" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +70%", "#{skillfactor}#": "100", "sp": "67" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +80%", "#{skillfactor}#": "100", "sp": "71" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +90%", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +100%", "#{skillfactor}#": "100", "sp": "79" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +110%", "#{skillfactor}#": "100", "sp": "83" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +120%", "#{skillfactor}#": "100", "sp": "87" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +130%", "#{skillfactor}#": "100", "sp": "91" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +140%", "#{skillfactor}#": "100", "sp": "95" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +150%", "#{skillfactor}#": "100", "sp": "99" }, } }, "fencer_flanconnade": { "id": "299", "ident": "fencer_flanconnade", "name": "Flanconnade", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_flanconnade.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_flanconnade.mp4", "desc": "
[Físico] - [Perfurante]<\/div>Um movimento complexo com o florete atacando por baixo e lançando o inimigo para o alto.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'FloreteEscudoAdaga', "levellist": { "1": { "#{skillatkadd}#": "320", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "382", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "47" }, "3": { "#{skillatkadd}#": "444", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "506", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "57" }, "5": { "#{skillatkadd}#": "568", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "62" }, "6": { "#{skillatkadd}#": "630", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "67" }, "7": { "#{skillatkadd}#": "692", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "72" }, "8": { "#{skillatkadd}#": "754", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "9": { "#{skillatkadd}#": "816", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "82" }, "10": { "#{skillatkadd}#": "878", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "87" }, "11": { "#{skillatkadd}#": "940", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "92" }, "12": { "#{skillatkadd}#": "1002", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "97" }, "13": { "#{skillatkadd}#": "1064", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "102" }, "14": { "#{skillatkadd}#": "1126", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "107" }, "15": { "#{skillatkadd}#": "1188", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "112" }, } }, "fencer_lunge": { "id": "300", "ident": "fencer_lunge", "name": "Lunge", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_lunge.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_estocada.mp4", "desc": "
[Físico] - [Perfurante]<\/div>Impulsa o florete lançando-se contra o inimigo. A Esquiva é aumentada, tornando-se menos vulnerável a danos cortantes.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "14", "element": "none", "reqstance": 'FloreteEscudoAdaga', "levellist": { "1": { "#{skillatkadd}#": "312", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +10%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "2": { "#{skillatkadd}#": "381", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +20%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "36" }, "3": { "#{skillatkadd}#": "450", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +30%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "4": { "#{skillatkadd}#": "519", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +40%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "5": { "#{skillatkadd}#": "588", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +50%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "6": { "#{skillatkadd}#": "657", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +60%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "7": { "#{skillatkadd}#": "726", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +70%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "8": { "#{skillatkadd}#": "795", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +80%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "9": { "#{skillatkadd}#": "864", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +90%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "10": { "#{skillatkadd}#": "933", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +100%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "11": { "#{skillatkadd}#": "1002", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +110%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "12": { "#{skillatkadd}#": "1071", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +120%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "13": { "#{skillatkadd}#": "1140", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +130%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "14": { "#{skillatkadd}#": "1209", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +140%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "15": { "#{skillatkadd}#": "1278", "#{skillefect}#": "Dano do Atributo: 0%
Taxa Evasão: +150%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "75" }, } }, "fencer_preparation": { "id": "301", "ident": "fencer_preparation", "name": "Preparation", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_preparation.png", "circle": "2", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_Preparation.mp4", "desc": "
[Efeito] - [Bonus]<\/div>Move seu florete em pequenos movimentos circulares, pronto para desviar e contra-atacar. O próximo ataque Perfurante após o uso desta habilidade acertará duas vezes.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'FloreteEscudoAdaga', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 4 Seg.
+55% de bloqueio durante a duração da habilidade
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 5 Seg.
+60% de bloqueio durante a duração da habilidade
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 6 Seg.
+65% de bloqueio durante a duração da habilidade
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 7 Seg.
+70% de bloqueio durante a duração da habilidade
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Máx. Duração: 8 Seg.
+75% de bloqueio durante a duração da habilidade
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "70" }, } }, "fencer_sept-etoiles": { "id": "302", "ident": "fencer_sept-etoiles", "name": "Sept Etoiles", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_septetoiles.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/fencer_sete_estrelas.mp4", "desc": "
[Físico] - [Perfurante]<\/div>Perfura o inimigo continuamente.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "29", "element": "none", "reqstance": 'FloreteEscudoAdaga', "levellist": { "1": { "#{skillatkadd}#": "132", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "160", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "47" }, "3": { "#{skillatkadd}#": "188", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "216", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "57" }, "5": { "#{skillatkadd}#": "244", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "62" }, "6": { "#{skillatkadd}#": "272", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "67" }, "7": { "#{skillatkadd}#": "300", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "72" }, "8": { "#{skillatkadd}#": "328", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "9": { "#{skillatkadd}#": "356", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "82" }, "10": { "#{skillatkadd}#": "384", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "87" }, "11": { "#{skillatkadd}#": "412", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "92" }, "12": { "#{skillatkadd}#": "440", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "97" }, "13": { "#{skillatkadd}#": "468", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "102" }, "14": { "#{skillatkadd}#": "496", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "107" }, "15": { "#{skillatkadd}#": "524", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "112" }, } }, "highlander_sky-liner": { "id": "303", "ident": "highlander_sky-liner", "name": "Sky Liner", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/icon_swordman_skyline.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/SkyLiner.mp4", "desc": "
[Físico] - [Cortante]<\/div>Um corte horizontal. Causa um acerto extra se o inimigo estiver sofrendo com Corte em Cruz Sangria", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "23", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "180", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "8" }, "2": { "#{skillatkadd}#": "227", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "9" }, "3": { "#{skillatkadd}#": "274", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "10" }, "4": { "#{skillatkadd}#": "321", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "11" }, "5": { "#{skillatkadd}#": "368", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "12" }, "6": { "#{skillatkadd}#": "415", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "13" }, "7": { "#{skillatkadd}#": "462", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "14" }, "8": { "#{skillatkadd}#": "509", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "15" }, "9": { "#{skillatkadd}#": "556", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "16" }, "10": { "#{skillatkadd}#": "603", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "17" }, } }, "highlander_cross-cut": { "id": "304", "ident": "highlander_cross-cut", "name": "Cross Cut", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/icon_swordman_crosscut.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/CrossCut.mp4", "desc": "
[Físico] - [Cortante]<\/div>Um corte em cruz que causa dois acertos. Faz com que o inimigo sangre por alguns segundos.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "28", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "195", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "8" }, "2": { "#{skillatkadd}#": "245", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "9" }, "3": { "#{skillatkadd}#": "295", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "10" }, "4": { "#{skillatkadd}#": "345", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "11" }, "5": { "#{skillatkadd}#": "395", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "12" }, "6": { "#{skillatkadd}#": "445", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "13" }, "7": { "#{skillatkadd}#": "495", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "14" }, "8": { "#{skillatkadd}#": "545", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "15" }, "9": { "#{skillatkadd}#": "595", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "16" }, "10": { "#{skillatkadd}#": "645", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "17" }, } }, "highlander_vertical-slash": { "id": "305", "ident": "highlander_vertical-slash", "name": "Vertical Slash", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/icon_swordman_verticalslash.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/VerticalSlash.mp4", "desc": "
[Físico] - [Cortante]<\/div>Um único corte vertical. Causa dano extra se o inimigo estiver sofrendo de Pancada na Cabeça - Destruição de Armadura debuff", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "335", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "8" }, "2": { "#{skillatkadd}#": "410", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "9" }, "3": { "#{skillatkadd}#": "485", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "10" }, "4": { "#{skillatkadd}#": "560", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "11" }, "5": { "#{skillatkadd}#": "635", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 1", "#{skillfactor}#": "100", "sp": "12" }, } }, "barbarian_seism": { "id": "306", "ident": "barbarian_seism", "name": "Seism", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/seism.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "", "desc": "
[Físico] - [Cortante]<\/div>Todos os ataques inimigos serão cancelados devido a um tremor no chão. Há chances de que os inimigos também sejam atordoados.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "22", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "495", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "25" }, "2": { "#{skillatkadd}#": "634", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "28" }, "3": { "#{skillatkadd}#": "773", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "31" }, "4": { "#{skillatkadd}#": "912", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "34" }, "5": { "#{skillatkadd}#": "1051", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "37" }, "6": { "#{skillatkadd}#": "1190", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "40" }, "7": { "#{skillatkadd}#": "1329", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "43" }, "8": { "#{skillatkadd}#": "1468", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "46" }, "9": { "#{skillatkadd}#": "1607", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "49" }, "10": { "#{skillatkadd}#": "1746", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 5", "#{skillfactor}#": "100", "sp": "52" }, } }, "peltasta_umbro-thrust": { "id": "307", "ident": "peltasta_umbro-thrust", "name": "Umbro Thrust", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/umbothrust.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/UmboThrust.mp4", "desc": "
[Físico] - [Golpe]<\/div>Use a ponta no escudo para atacar o inimigo. Inimigo pode perder temporariamente os efeitos protetores.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'Espada 1MãoLança 1MãoEscudoFlorete', "levellist": { "1": { "#{skillatkadd}#": "322", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "14" }, "2": { "#{skillatkadd}#": "407", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "16" }, "3": { "#{skillatkadd}#": "492", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "18" }, "4": { "#{skillatkadd}#": "577", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "20" }, "5": { "#{skillatkadd}#": "662", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2", "#{skillfactor}#": "100", "sp": "22" }, } }, "hoplite_spear-lunge": { "id": "308", "ident": "hoplite_spear-lunge", "name": "Spear Lunge", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/spearlunge.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "", "desc": "
[Físico] - [Perfurante]<\/div>Causando danos em um inimigo a frente e empurrando e torna-o vulnerável a ataques de perfurantes.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "24", "element": "none", "reqstance": 'Lança 1MãoLança 2Mãos', "levellist": { "1": { "#{skillatkadd}#": "236", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "14" }, "2": { "#{skillatkadd}#": "299", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "17" }, "3": { "#{skillatkadd}#": "362", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "20" }, "4": { "#{skillatkadd}#": "425", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "23" }, "5": { "#{skillatkadd}#": "488", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "26" }, "6": { "#{skillatkadd}#": "551", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "29" }, "7": { "#{skillatkadd}#": "614", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "32" }, "8": { "#{skillatkadd}#": "677", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "35" }, "9": { "#{skillatkadd}#": "740", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "38" }, "10": { "#{skillatkadd}#": "803", "#{skillefect}#": "Dano do Atributo 0%
Duração 6 Secs", "#{skillfactor}#": "100", "sp": "41" }, } }, "rodelero_shield-shoving": { "id": "309", "ident": "rodelero_shield-shoving", "name": "Shield Shoving", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/shieldshoving.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Físico] - [Golpe]<\/div>Perturbar a ação do inimigo usando o escudo. Atacados o inimigo recuar e não pode fazer qualquer coisa temporariamente.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'Espada 1MãoLança 1MãoEscudoFlorete', "levellist": { "1": { "#{skillatkadd}#": "172", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "17" }, "2": { "#{skillatkadd}#": "224", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "19" }, "3": { "#{skillatkadd}#": "276", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "21" }, "4": { "#{skillatkadd}#": "328", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "23" }, "5": { "#{skillatkadd}#": "380", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "25" }, "6": { "#{skillatkadd}#": "432", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "7": { "#{skillatkadd}#": "484", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "29" }, "8": { "#{skillatkadd}#": "536", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "31" }, "9": { "#{skillatkadd}#": "588", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "10": { "#{skillatkadd}#": "640", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "11": { "#{skillatkadd}#": "692", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "37" }, "12": { "#{skillatkadd}#": "744", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "39" }, "13": { "#{skillatkadd}#": "796", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "14": { "#{skillatkadd}#": "848", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "15": { "#{skillatkadd}#": "900", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1.5 Seg.", "#{skillfactor}#": "100", "sp": "45" }, } }, "rodelero_shield-bash": { "id": "310", "ident": "rodelero_shield-bash", "name": "Shield Bash", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/shieldbash.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "", "desc": "
[Físico] - [Golpe]<\/div>Ataca com o escudo. Os pontos de status do inimigo vão se misturar temporariamente.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'Espada 1MãoLança 1MãoEscudoFlorete', "levellist": { "1": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "76" }, "2": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "77" }, "3": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "4": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "5": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "6": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "81" }, "7": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "8": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "83" }, "9": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "10": { "#{skillatkadd}#": "372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "85" }, } }, "rodelero_high-kick": { "id": "311", "ident": "rodelero_high-kick", "name": "High Kick", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/highkick.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "", "desc": "
[Físico] - [Golpe]<\/div>Chuta um inimigo para causar dano. O inimigo atacado receberá dano adicional de ataque tipo [Golpe] temporariamente. ", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "695", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 0 Seg.", "#{skillfactor}#": "100", "sp": "24" }, "2": { "#{skillatkadd}#": "846", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 0 Seg.", "#{skillfactor}#": "100", "sp": "27" }, "3": { "#{skillatkadd}#": "997", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 0 Seg.", "#{skillfactor}#": "100", "sp": "30" }, "4": { "#{skillatkadd}#": "1148", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 0 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "5": { "#{skillatkadd}#": "1299", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 0 Seg.", "#{skillfactor}#": "100", "sp": "36" }, } }, "corsair_hexen-dropper": { "id": "312", "ident": "corsair_hexen-dropper", "name": "Hexen Dropper", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/hexendropper.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "", "desc": "
[Físico] - [Perfurante]<\/div>Um ataque de perfurações rápidas, usando sua arma e sub-arma.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "28", "element": "none", "reqstance": 'Espada 1MãoLança 1MãoEscudoFloreteAdaga', "levellist": { "1": { "#{skillatkadd}#": "289", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "29" }, "2": { "#{skillatkadd}#": "351", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "32" }, "3": { "#{skillatkadd}#": "413", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "35" }, "4": { "#{skillatkadd}#": "475", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "38" }, "5": { "#{skillatkadd}#": "537", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "6": { "#{skillatkadd}#": "599", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "44" }, "7": { "#{skillatkadd}#": "661", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "47" }, "8": { "#{skillatkadd}#": "723", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "50" }, "9": { "#{skillatkadd}#": "785", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "53" }, "10": { "#{skillatkadd}#": "847", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, } }, "centurion_special-force-formation": { "id": "313", "ident": "centurion_special-force-formation", "name": "Special Force Formation", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/specialforceformation.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Cria uma formação que traz os membros do esquadrão juntos. O tempo de cooldown habilidade dos membros do esquadrão que entraram na formação será reduzido pela metade. Duração vai aumentar com Nível de Habilidade, e o número de membros no esquadrão.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "29" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "32" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "35" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "38" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "41" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "44" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "47" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "50" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "53" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "56" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "59" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "62" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "65" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "68" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "71" }, } }, "wugushi_zhendu": { "id": "314", "ident": "wugushi_zhendu", "name": "Zhendu", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/icon_arch_zhendu.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
<\/div>Encanta as armas de todos no grupo com a propriedade VENENO. O próximo dano físico em um inimigo vai infringir dano contínuo de veneno", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 7 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 9 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 11 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "52" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 13 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "58" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 15 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 17 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "70" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 19 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "76" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 21 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "82" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 23 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "88" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 25 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "94" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 27 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "100" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 29 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "106" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 31 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "112" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 33 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "118" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Envenenamento: 35 Seg.
Consume 8 Potes de Veneno", "#{skillfactor}#": "100", "sp": "124" }, } }, "scout_split-arrow": { "id": "315", "ident": "scout_split-arrow", "name": "Split Arrow", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/icon_arch_splitarrow.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "", "desc": "
[Físico] - [Penetrante]<\/div>Atira no inimigo com uma flecha violenta. Se o ataque for bem sucedido, a flecha vai se dividir em duas e causar dano a diferentes inimigos.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "332", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 200%", "#{skillfactor}#": "100", "sp": "17" }, "2": { "#{skillatkadd}#": "407", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 200%", "#{skillfactor}#": "100", "sp": "22" }, "3": { "#{skillatkadd}#": "482", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 200%", "#{skillfactor}#": "100", "sp": "27" }, "4": { "#{skillatkadd}#": "557", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 200%", "#{skillfactor}#": "100", "sp": "32" }, "5": { "#{skillatkadd}#": "632", "#{skillefect}#": "Dano do Atributo: 0%
Chance de Ricochetear a Flecha 200%", "#{skillfactor}#": "100", "sp": "37" }, } }, "pyromancer_flame-ground": { "id": "316", "ident": "pyromancer_flame-ground", "name": "Flame Ground", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_wizar_flame_ground.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Magico] - [Fogo]<\/div>Cria um circulo de chamas na área selecionada que causa dano de propriedade [Fogo] aos inimigos que atravessam o circulo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "54", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "67", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "44" }, "3": { "#{skillatkadd}#": "80", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "4": { "#{skillatkadd}#": "93", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "5": { "#{skillatkadd}#": "106", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "6": { "#{skillatkadd}#": "119", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "132", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "89" }, "8": { "#{skillatkadd}#": "145", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "98" }, "9": { "#{skillatkadd}#": "158", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "10": { "#{skillatkadd}#": "171", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "116" }, "11": { "#{skillatkadd}#": "184", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 26 Seg.", "#{skillfactor}#": "100", "sp": "125" }, "12": { "#{skillatkadd}#": "197", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 27 Seg.", "#{skillfactor}#": "100", "sp": "134" }, "13": { "#{skillatkadd}#": "210", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "143" }, "14": { "#{skillatkadd}#": "223", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 29 Seg.", "#{skillfactor}#": "100", "sp": "152" }, "15": { "#{skillatkadd}#": "236", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "161" }, } }, "cryomancer_frost-pillar": { "id": "317", "ident": "cryomancer_frost-pillar", "name": "Frost Pillar", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_wizar_attractpillar.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "", "desc": "
[Magico] - [Gelo]<\/div>Cria uma pilastra de gelo que puxa os inimigos em direção a ela e os congela.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "49", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Congelar: 1%
Ice Tree Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Congelar: 1%
Ice Tree Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "41" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Congelar: 1%
Ice Tree Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "47" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Congelar: 1%
Ice Tree Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "53" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de Congelar: 1%
Ice Tree Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "59" }, } }, "elementalist_freezing-sphere": { "id": "318", "ident": "elementalist_freezing-sphere", "name": "Freezing Sphere", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_wizar_freezing_sphere.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "", "desc": "
[Magico] - [Gelo]<\/div>Lança uma esfera de gelo que causa dano ao inimigo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "292", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "2": { "#{skillatkadd}#": "364", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "47" }, "3": { "#{skillatkadd}#": "436", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "4": { "#{skillatkadd}#": "508", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "63" }, "5": { "#{skillatkadd}#": "580", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "71" }, "6": { "#{skillatkadd}#": "652", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "79" }, "7": { "#{skillatkadd}#": "724", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "87" }, "8": { "#{skillatkadd}#": "796", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "95" }, "9": { "#{skillatkadd}#": "868", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "103" }, "10": { "#{skillatkadd}#": "940", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "111" }, } }, "elementalist_frost-cloud": { "id": "319", "ident": "elementalist_frost-cloud", "name": "Frost Cloud", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_wizar_frost_cloud.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "", "desc": "
[Magico] - [Gelo]<\/div>Cria um circulo de gelo na área selecionada, que causa dano de propriedade gelo aos inimigos que atravessa o círculo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "319", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "2": { "#{skillatkadd}#": "398", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "3": { "#{skillatkadd}#": "477", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "4": { "#{skillatkadd}#": "556", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "99" }, "5": { "#{skillatkadd}#": "635", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "111" }, } }, "necromancer_corpse-tower": { "id": "320", "ident": "necromancer_corpse-tower", "name": "Corpse Tower", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_wizar_corpsetower.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "", "desc": "
[Magico] - [Sombrio]<\/div>Cria uma torre de carne que dispara tiros de propriedade [Veneno] nos inimigos próximos.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "50", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 35 Seg.
Número de Bloqueios: 40
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "48" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 40 Seg.
Número de Bloqueios: 50
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "55" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 45 Seg.
Número de Bloqueios: 60
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "62" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.
Número de Bloqueios: 70
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "69" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 55 Seg.
Número de Bloqueios: 80
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "76" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Número de Bloqueios: 90
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "83" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 65 Seg.
Número de Bloqueios: 100
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "90" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 70 Seg.
Número de Bloqueios: 110
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "97" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 75 Seg.
Número de Bloqueios: 120
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "104" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 80 Seg.
Número de Bloqueios: 130
Consume 7 cadáveres", "#{skillfactor}#": "100", "sp": "111" }, } }, "necromancer_raise-dead": { "id": "321", "ident": "necromancer_raise-dead", "name": "Raise Dead", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_wizar_raisedead.png", "circle": "2", "ranklevel": "5", "maxlevel": "5", "video": "", "desc": "
[Magico] - [Sombrio]<\/div>Cria um soldado esqueleto. O número de esqueletos invocados depende do nível da habilidade", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca 1 Soldado Esqueleto
Consume 2 cadáveres
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "69" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca 2 Soldados Esqueletos
Consume 4 cadáveres
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "80" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca 3 Soldados Esqueletos
Consume 6 cadáveres
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "91" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca 4 Soldados Esqueletos
Consume 8 cadáveres
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "102" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Invoca 5 Soldados Esqueletos
Consume 10 cadáveres
Máx. Level: 5", "#{skillfactor}#": "100", "sp": "113" }, } }, "priest_mass-heal": { "id": "322", "ident": "priest_mass-heal", "name": "Mass Heal", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/icon_cler_massheal.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Cura qualquer membro do grupo que esteja próximo.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 10% do HP Máx.
Recuperação de HP Adicional: (100 + INT + SPR + 0)", "#{skillfactor}#": "100", "sp": "30" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 12% do HP Máx.
Recuperação de HP Adicional: (100 + INT + SPR + 35)", "#{skillfactor}#": "100", "sp": "34" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 14% do HP Máx.
Recuperação de HP Adicional: (100 + INT + SPR + 70)", "#{skillfactor}#": "100", "sp": "38" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 16% do HP Máx.
Recuperação de HP Adicional: (100 + INT + SPR + 105)", "#{skillfactor}#": "100", "sp": "42" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 18% do HP Máx.
Recuperação de HP Adicional: (100 + INT + SPR + 140)", "#{skillfactor}#": "100", "sp": "46" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 20% do HP Máx.
Recuperação de HP Adicional: (100 + INT + SPR + 175)", "#{skillfactor}#": "100", "sp": "50" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 22% do HP Máx.
Recuperação de HP Adicional: (100 + INT + SPR + 210)", "#{skillfactor}#": "100", "sp": "54" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 24% do HP Máx.
Recuperação de HP Adicional: (100 + INT + SPR + 245)", "#{skillfactor}#": "100", "sp": "58" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 26% do HP Máx.
Recuperação de HP Adicional: (100 + INT + SPR + 280)", "#{skillfactor}#": "100", "sp": "62" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Restaura 28% do HP Máx.", "#{skillfactor}#": "100", "sp": "66" }, } }, "priest_stone-skin": { "id": "323", "ident": "priest_stone-skin", "name": "Stone Skin", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/icon_cler_stoneskin.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Aumenta a Defesa do grupo.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +(80 + SPR × 4)
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "33" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +(160 + SPR × 4)
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "38" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +(240 + SPR × 4)
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "43" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +(320 + SPR × 4)
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Bloqueio: +(400 + SPR × 4)
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "53" }, } }, "paladin_conviction": { "id": "324", "ident": "paladin_conviction", "name": "Conviction", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/icon_cler_conviction.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "", "desc": "
[Físico] - [Golpe]<\/div>Ataca um inimigo e diminui sua resistência elemental. A resistência ao fogo, gelo, eletricidade, veneno do inimigo que recebeu o ataque vai diminuir.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "26", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "321", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2
Todas as Resistência a Propriedade: -20", "#{skillfactor}#": "100", "sp": "41" }, "2": { "#{skillatkadd}#": "388", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2
Todas as Resistência a Propriedade: -40", "#{skillfactor}#": "100", "sp": "47" }, "3": { "#{skillatkadd}#": "455", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2
Todas as Resistência a Propriedade: -60", "#{skillfactor}#": "100", "sp": "53" }, "4": { "#{skillatkadd}#": "522", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2
Todas as Resistência a Propriedade: -80", "#{skillfactor}#": "100", "sp": "59" }, "5": { "#{skillatkadd}#": "589", "#{skillefect}#": "Dano do Atributo: 0%
Raio de Ataque em Área: 2
Todas as Resistência a Propriedade: -100", "#{skillfactor}#": "100", "sp": "65" }, } }, "pardoner_increase-magic-defense": { "id": "325", "ident": "pardoner_increase-magic-defense", "name": "Increase Magic Defense", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/icon_cler_increasemagicdef.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Temporariamente aumenta a sua defesa mágica e seus membros do grupo.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "87", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(50 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(65 + SPR)
Duração: 45 Seg.	", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(80 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(95 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(110 + SPR)
Duração: 45 Seg.	", "#{skillfactor}#": "100", "sp": "73" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(125 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(140 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(155 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "94" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(170 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "101" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(185 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(200 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "115" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(215 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "122" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(230 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "129" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(245 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "136" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Defesa Mágica: +(260 + SPR)
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "143" }, } }, "dragoon_dragon-soar": { "id": "326", "ident": "dragoon_dragon-soar", "name": "Dragon Soar", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/dragoon_dragon_soar.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/dragoon_dragon_soar.mp4", "desc": "
[Físico] - [Cortante]<\/div>Salta enquanto balançando sua lança para cima. Inimigos atingidos com esta habilidade são lançado para o ar.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "24", "element": "none", "reqstance": 'Lança 1MãoLança 2Mãos', "levellist": { "1": { "#{skillatkadd}#": "215", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "272", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "329", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "386", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "443", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "500", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "557", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "614", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "671", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "728", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "785", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "842", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "899", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "956", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "1013", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, } }, "dragoon_dragontooth": { "id": "327", "ident": "dragoon_dragontooth", "name": "Dragontooth", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/dragoon_dragontooth.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/dragoon_dragontooth.mp4", "desc": "
[Físico] - [Penetrante]<\/div>Gira sua lança usando a força centrífuga para atacar um inimigo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'Lança 1MãoLança 2Mãos', "levellist": { "1": { "#{skillatkadd}#": "287", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "322", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "357", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "392", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "427", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "462", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "497", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "532", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "567", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "602", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "637", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "672", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "707", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "742", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "777", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, } }, "dragoon_serpentine": { "id": "328", "ident": "dragoon_serpentine", "name": "Serpentine", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/dragoon_serpentine.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/dragoon_serpentine.mp4", "desc": "
[Físico] - [Penetrante]<\/div>Use sua lança para causar dano continuo aos inimigos a sua frente.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "27", "element": "none", "reqstance": 'Lança 1MãoLança 2Mãos', "levellist": { "1": { "#{skillatkadd}#": "329", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "368", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "407", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "446", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "485", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "524", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "563", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "602", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "641", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "680", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "719", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "758", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "797", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "836", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "875", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, } }, "dragoon_gae-bulg": { "id": "329", "ident": "dragoon_gae-bulg", "name": "Gae Bulg", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/dragoon_gae_bulg.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/dragoon_gae_bulg.mp4", "desc": "
[Físico] - [Penetrante]<\/div>Atacar vários inimigos dentro de um raio ao atirar sua lança. inimigos atingidos ficam temporariamente mais fracos contra ataques físicos. A lança arremessada deve ser recolhida para usá-la novamente.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'Lança 1MãoLança 2Mãos', "levellist": { "1": { "#{skillatkadd}#": "1523", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 5.5 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "1760", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 6 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "1997", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 6.5 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "2234", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 7 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "2471", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 7.5 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "2708", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 8 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "2945", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 8.5 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "3182", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 9 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "3419", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 9.5 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "3656", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "3893", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 10.5 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "4130", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 11 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "4367", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 11.5 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "4604", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 12 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "4841", "#{skillefect}#": "Dano do Atributo: 0%
Duração do Estado de Doença: 12.5 Seg.", "#{skillfactor}#": "100", "sp": "0" }, } }, "plague_doctor_healing-factor": { "id": "330", "ident": "plague_doctor_healing-factor", "name": "HEALING FACTOR", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/healing_factor.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Temporariamente convoca um círculo mágico que concede uma grande taxa de recuperação de HP. Este círculo mágico regenera rapidamente o personagem ou seus aliados saúde de volta para o ponto em que o círculo foi ativado e sofrido algum tipo de dano.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.
Recuperação de HP: 60", "#{skillfactor}#": "100", "sp": "72" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.
Recuperação de HP: 70", "#{skillfactor}#": "100", "sp": "72" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Recuperação de HP: 80", "#{skillfactor}#": "100", "sp": "72" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 35 Seg.
Recuperação de HP: 90", "#{skillfactor}#": "100", "sp": "72" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 40 Seg.
Recuperação de HP: 100", "#{skillfactor}#": "100", "sp": "72" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 45 Seg.
Recuperação de HP: 110", "#{skillfactor}#": "100", "sp": "72" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.
Recuperação de HP: 120", "#{skillfactor}#": "100", "sp": "72" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 55 Seg.
Recuperação de HP: 130", "#{skillfactor}#": "100", "sp": "72" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Recuperação de HP: 140", "#{skillfactor}#": "100", "sp": "72" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 65 Seg.
Recuperação de HP: 150", "#{skillfactor}#": "100", "sp": "72" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 70 Seg.
Recuperação de HP: 160", "#{skillfactor}#": "100", "sp": "72" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 75 Seg.
Recuperação de HP: 170", "#{skillfactor}#": "100", "sp": "72" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 80 Seg.
Recuperação de HP: 180", "#{skillfactor}#": "100", "sp": "72" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 85 Seg.
Recuperação de HP: 190", "#{skillfactor}#": "100", "sp": "72" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 90 Seg.
Recuperação de HP: 200", "#{skillfactor}#": "100", "sp": "72" }, } }, "plague_doctor_incineration": { "id": "331", "ident": "plague_doctor_incineration", "name": "INCINERATION", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/incineration.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Magico] - [Fogo]<\/div>Incinera os inimigos com doenças de condição. A duração da incineração aumenta dependendo do número de doenças de condição sobre o inimigo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "1051", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 1 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "2": { "#{skillatkadd}#": "1176", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 2 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "3": { "#{skillatkadd}#": "1301", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 3 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "4": { "#{skillatkadd}#": "1426", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 4 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "5": { "#{skillatkadd}#": "1551", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "6": { "#{skillatkadd}#": "1676", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 6 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "7": { "#{skillatkadd}#": "1801", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "8": { "#{skillatkadd}#": "1926", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 8 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "9": { "#{skillatkadd}#": "2051", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 9 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "10": { "#{skillatkadd}#": "2176", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "11": { "#{skillatkadd}#": "2301", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "12": { "#{skillatkadd}#": "2426", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "13": { "#{skillatkadd}#": "2551", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "14": { "#{skillatkadd}#": "2676", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "107" }, "15": { "#{skillatkadd}#": "2801", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "107" }, } }, "plague_doctor_bloodletting": { "id": "332", "ident": "plague_doctor_bloodletting", "name": "BLOODLETTING", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/bloodletting.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Faz o personagem ou seus aliados sangrarem para impedir temporariamente a obtenção de doenças de condição. Enquanto sangra, o alvo torna-se invulnerável a doenças de condição abaixo de Rank 2°.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 35 Seg.
HP: -5	60", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 40 Seg.
HP: -4	60", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 45 Seg.
HP: -3	60", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.
HP: -2	60", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 55 Seg.
HP: -1", "#{skillfactor}#": "100", "sp": "0" }, } }, "plague_doctor_fumigate": { "id": "333", "ident": "plague_doctor_fumigate", "name": "FUMIGATE", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/fumigate.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Cria uma núvem de fumigação em que você e seus aliados são curados de efeitos de doenças de doenças de condição. Aliados dentro do intervalo são curados de todas as doenças de condição abaixo do Rank 3°.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 3 vezes", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 4 vezes", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 5 vezes", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 6 vezes", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 7 vezes", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 8 vezes", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 9 vezes", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 10 vezes", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 11 vezes", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 12 vezes", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 13 vezes", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 14 vezes", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 15 vezes", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 16 vezes", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Remove doenças de Debuff de Rank 3 ou menor
Aplica-se um max. de 17 times", "#{skillfactor}#": "100", "sp": "0" }, } }, "plague_doctor_pandemic": { "id": "334", "ident": "plague_doctor_pandemic", "name": "PANDEMIC", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/pandemic.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Espalha todas as doenças de condição de inimigos a outros inimigos dentro do alcance.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 5 vezes", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 7 vezes", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 9 vezes", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 11 vezes", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 13 vezes", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 15 vezes", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 17 vezes", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 19 vezes", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 21 vezes", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 23 vezes", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 25 vezes", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 27 vezes", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 29 vezes", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 31 vezes", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 33 times", "#{skillfactor}#": "100", "sp": "0" }, } }, "plague_doctor_beakmask": { "id": "335", "ident": "plague_doctor_beakmask", "name": "BEAKMASK", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/beak_mask.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Usa a Máscara de Bico. A parte da frente da máscara é protegida através de uma droga especial, o que pode bloquear doenças de condição abaixo do Rank 2 dos inimigos.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 35 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 40 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 45 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 55 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 65 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 70 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 75 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 80 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 85 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 90 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 95 Seg.
100% Imunidade de Rank 1 e 2
80% Imunidade de Rank 3", "#{skillfactor}#": "100", "sp": "0" }, } }, "templar_summom-guild-member": { "id": "336", "ident": "templar_summom-guild-member", "name": "Summom Guild Member", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/SummomGuildMember.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/SummonGuildMember.mp4", "desc": "
[Efeito] - [Bonus]<\/div>Convoque os membros da Guilda até você", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "1h", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 1", "#{skillfactor}#": "100", "sp": "12" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 2", "#{skillfactor}#": "100", "sp": "12" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 3", "#{skillfactor}#": "100", "sp": "12" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 4", "#{skillfactor}#": "100", "sp": "12" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 5", "#{skillfactor}#": "100", "sp": "12" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 6", "#{skillfactor}#": "100", "sp": "12" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 7", "#{skillfactor}#": "100", "sp": "12" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 8", "#{skillfactor}#": "100", "sp": "12" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 9", "#{skillfactor}#": "100", "sp": "12" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 10", "#{skillfactor}#": "100", "sp": "12" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 11", "#{skillfactor}#": "100", "sp": "12" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 12", "#{skillfactor}#": "100", "sp": "12" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 13", "#{skillfactor}#": "100", "sp": "12" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 14", "#{skillfactor}#": "100", "sp": "12" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Total de membros da Guilda invocados: 15", "#{skillfactor}#": "100", "sp": "12" }, } }, "templar_warp-to-guild-member": { "id": "337", "ident": "templar_warp-to-guild-member", "name": "Warp to Guild Member", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/WarpToGuildMember.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/WarpToGuildMember.mp4", "desc": "
[Efeito] - [Bonus]<\/div>Se teletransporta para a localização de um membro da guilda selecionado.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "1h", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "0" }, } }, "templar_build-guild-tower": { "id": "338", "ident": "templar_build-guild-tower", "name": "Build Guild Tower", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/BuildGuildTower.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/BuildGuildTower.mp4", "desc": "
[Efeito] - [Bonus]<\/div>Nível 1 = Se teleporta para a Torre de Guilda.
Nível 2 = Usar armazém.
Nível 3 = Cultivo da Guilda.
Nível 4 = Evento de Guilda. 
Nível 5 = Esconderijo da Guilda.
", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Melhora as características da Torre da Guilda", "#{skillfactor}#": "100", "sp": "8" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Melhora as características da Torre da Guilda", "#{skillfactor}#": "100", "sp": "8" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Melhora as características da Torre da Guilda", "#{skillfactor}#": "100", "sp": "8" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Melhora as características da Torre da Guilda", "#{skillfactor}#": "100", "sp": "8" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Melhora as características da Torre da Guilda", "#{skillfactor}#": "100", "sp": "8" }, } }, "templar_reduce-craft-time": { "id": "339", "ident": "templar_reduce-craft-time", "name": "Reduce Craft Time", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/ReduceCraftTime.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/ReduceCraftTime.mp4", "desc": "
[Efeito] - [Bonus]<\/div>Reduz o tempo de craft em 5%. Somente na Torre de Guild.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "10m", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Craft: 5%", "#{skillfactor}#": "100", "sp": "8" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Craft: 10%", "#{skillfactor}#": "100", "sp": "8" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Craft: 15%", "#{skillfactor}#": "100", "sp": "8" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Craft: 20%", "#{skillfactor}#": "100", "sp": "8" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Craft: 25%", "#{skillfactor}#": "100", "sp": "8" }, } }, "templar_battle-orders": { "id": "340", "ident": "templar_battle-orders", "name": "Battle Orders", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/BattleOrders.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/BattleOrders.mp4", "desc": "
[Efeito] - [Bonus]<\/div>Aumenta o ataque físico e mágico por algum tempo", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "2m", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +5
Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +10
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +15
Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +20
Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +25
Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +30
Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +35
Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +40
Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +45
Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +50
Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +55
Duração: 85 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +60
Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +65
Duração: 95 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +70
Duração: 100 Seg.", "#{skillfactor}#": "100", "sp": "8" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "STR: +75
Duração: 105 Seg.", "#{skillfactor}#": "100", "sp": "8" }, } }, "warlock_pole-of-agony": { "id": "341", "ident": "warlock_pole-of-agony", "name": "Pole of Agony", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/PoleofAgony.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/PoleofAgony.mp4", "desc": "
[Magico] - [Sombrio]<\/div>Convoca uma Coluna de Escuridão que faz com que inimigos em contato sofram continuamente.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "1m", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "585", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 8 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "2": { "#{skillatkadd}#": "728", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 9 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "3": { "#{skillatkadd}#": "871", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 10 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "4": { "#{skillatkadd}#": "1014", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 11 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "5": { "#{skillatkadd}#": "1157", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 12 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "6": { "#{skillatkadd}#": "1300", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 13 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "7": { "#{skillatkadd}#": "1443", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 14 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "8": { "#{skillatkadd}#": "1586", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "9": { "#{skillatkadd}#": "1729", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 16 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "10": { "#{skillatkadd}#": "1872", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 17 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "11": { "#{skillatkadd}#": "2015", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 18 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "12": { "#{skillatkadd}#": "2158", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 19 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "13": { "#{skillatkadd}#": "2301", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 20 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "14": { "#{skillatkadd}#": "2444", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 21 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, "15": { "#{skillatkadd}#": "2587", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 22 Seg.
Dano Adicional por seg.: 10", "#{skillfactor}#": "100", "sp": "90" }, } }, "warlock_invocation": { "id": "342", "ident": "warlock_invocation", "name": "Invocation", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/Invocation.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/Invocation.mp4", "desc": "
[Magico] - [Sombrio]<\/div>Solicita a ajuda de espíritos das trevas, convocando-os. Demônios convocados causam dano por contato.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 85 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 95 Seg.", "#{skillfactor}#": "100", "sp": "0" }, } }, "warlock_evil-sacrifice": { "id": "343", "ident": "warlock_evil-sacrifice", "name": "Evil Sacrifice", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/EvilSacrifice.png", "circle": "1", "ranklevel": "5", "maxlevel": "1", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/EvilSacrifice.mp4", "desc": "
[Magico] - [Sombrio]<\/div>Dedica uma oferenda para os espíritos convocados. Os espíritos se locomovem para o destino designado.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "", "#{skillfactor}#": "100", "sp": "0" }, } }, "warlock_dark-theurge": { "id": "344", "ident": "warlock_dark-theurge", "name": "Dark Theurge", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/DarkSurge.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/DarkSurge.mp4", "desc": "
[Magico] - [Sombrio]<\/div>Convoca espíritos para proteger o Warlock. Os inimigos que tocarem os espíritos sofrerão dano.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "32", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "607", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "2": { "#{skillatkadd}#": "760", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "3": { "#{skillatkadd}#": "913", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "4": { "#{skillatkadd}#": "1066", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "1219", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "6": { "#{skillatkadd}#": "1372", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "7": { "#{skillatkadd}#": "1525", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "8": { "#{skillatkadd}#": "1678", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "9": { "#{skillatkadd}#": "1831", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "10": { "#{skillatkadd}#": "1984", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "11": { "#{skillatkadd}#": "2137", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "12": { "#{skillatkadd}#": "2290", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "13": { "#{skillatkadd}#": "2443", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "14": { "#{skillatkadd}#": "2596", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "15": { "#{skillatkadd}#": "2749", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "66" }, } }, "warlock_mastema": { "id": "345", "ident": "warlock_mastema", "name": "Mastema", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/Mastema.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/Mastema.mp4", "desc": "
[Magico] - [Sombrio]<\/div>Convocar Mastema, o Diabo do ódio.
Inimigos atingidos por esta magia são marcados, e terão Propriedades do tipo Demônio durante um certo tempo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "37", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "1092", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "2": { "#{skillatkadd}#": "1335", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "3": { "#{skillatkadd}#": "1578", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "4": { "#{skillatkadd}#": "1821", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "5": { "#{skillatkadd}#": "2064", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "6": { "#{skillatkadd}#": "2307", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "7": { "#{skillatkadd}#": "2550", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "8": { "#{skillatkadd}#": "2793", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "9": { "#{skillatkadd}#": "3036", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "10": { "#{skillatkadd}#": "3279", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "11": { "#{skillatkadd}#": "3522", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "12": { "#{skillatkadd}#": "3765", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "13": { "#{skillatkadd}#": "4008", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "14": { "#{skillatkadd}#": "4251", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "15": { "#{skillatkadd}#": "4494", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "69" }, } }, "kabbalist_revenged-sevenfold": { "id": "346", "ident": "kabbalist_revenged-sevenfold", "name": "Revenged Sevenfold", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/RevengedSevenfold.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/RevengedSevenfold.webm", "desc": "
[Magico] - [Santo]<\/div>Coloca uma melhoria (buff) no Cabalista e nos membros do grupo, fazendo com que o próximo ataque recebido reflita causando dano mágico (sagrado).", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 10%", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 20%", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 30%", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 40%", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 50%", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 60%", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 70%", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 80%", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 90%", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 100%", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 110%", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 120%", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 130%", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 140%", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Dano Adicional: 150%", "#{skillfactor}#": "100", "sp": "0" }, } }, "kabbalist_ein-sof": { "id": "347", "ident": "kabbalist_ein-sof", "name": "Ein Sof", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/AyinSof.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/AyinSof.webm", "desc": "
[Magico] - [Santo]<\/div>Cria uma zona no chão que aumenta o HP máximo do jogador que passar por ela, durante certo tempo.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 23 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +20%", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 26 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +40%", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 29 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +60%", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 32 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +80%", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 35 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +100%", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 38 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +120%", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 41 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +140%", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 44 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +160%", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 47 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +180%", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +200%", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 53 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +220%", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 56 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +240%", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 59 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +260%", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 62 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +280%", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 65 Seg.
Duração do Círculo Mágico: 15 Seg.
Máx. HP: +300%", "#{skillfactor}#": "100", "sp": "0" }, } }, "kabbalist_merkabah": { "id": "348", "ident": "kabbalist_merkabah", "name": "Merkabah", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/Merkabah.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/Merkabah.webm", "desc": "
[Magico] - [Santo]<\/div>Convoca Ophanims que ataca o alvo. A quantidade de Ophanims é delimitada pelo level da habilidade.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "0" }, } }, "kabbalist_gematria": { "id": "349", "ident": "kabbalist_gematria", "name": "Gematria", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/Gematria.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/Gematria.webm", "desc": "
<\/div>Lê o nome do alvo (personagem ou monstro) e atribui valores aleatórios entre 0 e 9 para cálculos posteriores que afetam diretamente as habilidades do Cabalista.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 1 vezes", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 2 vezes", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 3 vezes", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 4 vezes", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 5 vezes", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 6 vezes", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 7 vezes", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 8 vezes", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 9 vezes", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 10 vezes", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 11 vezes", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 12 vezes", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 13 vezes", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 14 vezes", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 15 times", "#{skillfactor}#": "100", "sp": "0" }, } }, "kabbalist_reduce-level": { "id": "350", "ident": "kabbalist_reduce-level", "name": "Reduce Level", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/ReduceLevel.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/ReduceLevel.webm", "desc": "
<\/div>Usa o Cálculo do Gematria como base na fórmula de reduzir o level do alvo. Essa habilidade reduz o level do alvo de modo definitivo. Não é usável em PVP.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível adicional do inimigo 1
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível adicional do inimigo 2
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível adicional do inimigo 3
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível adicional do inimigo 4
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Nível adicional do inimigo 5
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "0" }, } }, "featherfoot_blood-bath": { "id": "351", "ident": "featherfoot_blood-bath", "name": "Blood Bath", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/BloodBath.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/bloodbath.webm", "desc": "
[Magico] - [Sombrio]<\/div>Besta, Demônio e monstros do tipo Inseto começarão a jorrar sangue, deixando uma poça de sangue que irá recuperar HP do usuário.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "323", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 30", "#{skillfactor}#": "100", "sp": "75" }, "2": { "#{skillatkadd}#": "406", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 40", "#{skillfactor}#": "100", "sp": "75" }, "3": { "#{skillatkadd}#": "489", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 50", "#{skillfactor}#": "100", "sp": "75" }, "4": { "#{skillatkadd}#": "572", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 60", "#{skillfactor}#": "100", "sp": "75" }, "5": { "#{skillatkadd}#": "655", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 70", "#{skillfactor}#": "100", "sp": "75" }, "6": { "#{skillatkadd}#": "738", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 80", "#{skillfactor}#": "100", "sp": "75" }, "7": { "#{skillatkadd}#": "821", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 90	", "#{skillfactor}#": "100", "sp": "75" }, "8": { "#{skillatkadd}#": "904", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 100", "#{skillfactor}#": "100", "sp": "75" }, "9": { "#{skillatkadd}#": "987", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 110", "#{skillfactor}#": "100", "sp": "75" }, "10": { "#{skillatkadd}#": "1070", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 120", "#{skillfactor}#": "100", "sp": "75" }, "11": { "#{skillatkadd}#": "1153", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 130", "#{skillfactor}#": "100", "sp": "75" }, "12": { "#{skillatkadd}#": "1236", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 140", "#{skillfactor}#": "100", "sp": "75" }, "13": { "#{skillatkadd}#": "1319", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 150", "#{skillfactor}#": "100", "sp": "75" }, "14": { "#{skillatkadd}#": "1402", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 160", "#{skillfactor}#": "100", "sp": "75" }, "15": { "#{skillatkadd}#": "1485", "#{skillefect}#": "Dano do Atributo: 0%
[Sagramento] Duração: 5 Seg.
Recuperação de HP: 170", "#{skillfactor}#": "100", "sp": "75" }, } }, "featherfoot_blood-sucking": { "id": "352", "ident": "featherfoot_blood-sucking", "name": "Blood Sucking", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/BloodSucking.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/bloodsuckling.webm", "desc": "
[Magico] - [Sombrio]<\/div>Drena a força de monstros tipo Besta, Demonio e Inseto para recuperar HP do usuário.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "543", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 10%
Consume 49 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "665", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 15%
Consume 56 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "787", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 20%
Consume 63 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "909", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 25%
Consume 70 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "1031", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 30%
Consume 77 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "6": { "#{skillatkadd}#": "1153", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 35%
Consume 84 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "7": { "#{skillatkadd}#": "1275", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 40%
Consume 91 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "8": { "#{skillatkadd}#": "1397", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 45%
Consume 98 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "9": { "#{skillatkadd}#": "1519", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 50%
Consume 105 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "10": { "#{skillatkadd}#": "1641", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 55%
Consume 112 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "11": { "#{skillatkadd}#": "1763", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 60%
Consume 119 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "12": { "#{skillatkadd}#": "1885", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 65%
Consume 126 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "13": { "#{skillatkadd}#": "2007", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 70%
Consume 133 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "14": { "#{skillatkadd}#": "2129", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 75%
Consume 140 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, "15": { "#{skillatkadd}#": "2251", "#{skillefect}#": "Dano do Atributo: 0%
Sugando Sangue: 80%
Consume 147 SP por 0.4 seg.", "#{skillfactor}#": "100", "sp": "0" }, } }, "featherfoot_bone-pointing": { "id": "353", "ident": "featherfoot_bone-pointing", "name": "Bone Pointing", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/BonePointing.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/bonepointing.webm", "desc": "
[Magico] - [Sombrio]<\/div>Invoca um pedaço de osso que derruba os inimigos próximos e irá atacá-los automaticamente. Os alvos podem se tornar amaldiçoados.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "50", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 35 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 40 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 45 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 50 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 55 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 60 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 65 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 70 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 75 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 80 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 85 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 90 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 95 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 100 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 105 Seg.
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "64" }, } }, "featherfoot_ngadhundi": { "id": "354", "ident": "featherfoot_ngadhundi", "name": "Ngadhundi", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/Ngadhundi.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/ngadhundi.webm", "desc": "
[Magico] - [Sombrio]<\/div>Golpeia o alvo com um grande pedaço de osso e os corrompem. Alvos terão seus HP maximos gradualmente reduzida.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "12", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "1132", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "1369", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "3": { "#{skillatkadd}#": "1606", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "1843", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "5": { "#{skillatkadd}#": "2080", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "6": { "#{skillatkadd}#": "2317", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 28 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "7": { "#{skillatkadd}#": "2554", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 31 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "8": { "#{skillatkadd}#": "2791", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 34 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "9": { "#{skillatkadd}#": "3028", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 37 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "10": { "#{skillatkadd}#": "3265", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "11": { "#{skillatkadd}#": "3502", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 43 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "12": { "#{skillatkadd}#": "3739", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 46 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "13": { "#{skillatkadd}#": "3976", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 49 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "14": { "#{skillatkadd}#": "4213", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 52 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "15": { "#{skillatkadd}#": "4450", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "45" }, } }, "featherfoot_kurdaitcha": { "id": "355", "ident": "featherfoot_kurdaitcha", "name": "Kurdaitcha", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/Kurdaitcha.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/kurdaitcha.webm", "desc": "
[Magico] - [Terra]<\/div>Deixar pegadas na terra que amaldiçoam os inimigos que pisarem nelas.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "32", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 6 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 7 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 8 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 9 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 10 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 11 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 12 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 13 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 14 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 15 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 16 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 17 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 18 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 19 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Kurdaitcha Máx. Duração: 20 Seg.
-15 Velocidade de Movimento
[Maldição] Duração: 7 Seg.", "#{skillfactor}#": "100", "sp": "71" }, } }, "cannoneer_cannon-shot": { "id": "356", "ident": "cannoneer_cannon-shot", "name": "Cannon Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/CannonShot_icon.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/CannonShot.mp4", "desc": "
[Físico] - [Projétil]<\/div>Dispara um projétil para alvejar inimigos no terrestres. Causa -50% de dano em inimigos tipo Voador.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "12", "element": "none", "reqstance": 'BestaCanhão', "levellist": { "1": { "#{skillatkadd}#": "2000", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "2": { "#{skillatkadd}#": "2264", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "3": { "#{skillatkadd}#": "2528", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "4": { "#{skillatkadd}#": "2792", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "5": { "#{skillatkadd}#": "3056", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "6": { "#{skillatkadd}#": "3320", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "3584", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "8": { "#{skillatkadd}#": "3848", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "9": { "#{skillatkadd}#": "4112", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "10": { "#{skillatkadd}#": "4376", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "11": { "#{skillatkadd}#": "4640", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "12": { "#{skillatkadd}#": "4904", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "13": { "#{skillatkadd}#": "5168", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "14": { "#{skillatkadd}#": "5432", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "15": { "#{skillatkadd}#": "5696", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, } }, "cannoneer_shootdown": { "id": "357", "ident": "cannoneer_shootdown", "name": "Shootdown", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/ShootDown_icon.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/ShootDown.mp4", "desc": "
[Físico] - [Projétil]<\/div>Dispara um projétil para alvejar inimigos no voadores. Causa -50% de dano em inimigos tipo Terrestres.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "13", "element": "none", "reqstance": 'BestaCanhão', "levellist": { "1": { "#{skillatkadd}#": "1053", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "2": { "#{skillatkadd}#": "1343", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "3": { "#{skillatkadd}#": "1633", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "1923", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "5": { "#{skillatkadd}#": "2213", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "6": { "#{skillatkadd}#": "2503", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "7": { "#{skillatkadd}#": "2793", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "8": { "#{skillatkadd}#": "3083", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "9": { "#{skillatkadd}#": "3373", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "10": { "#{skillatkadd}#": "3663", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "11": { "#{skillatkadd}#": "3953", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "12": { "#{skillatkadd}#": "4243", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "13": { "#{skillatkadd}#": "4533", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "14": { "#{skillatkadd}#": "4823", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "15": { "#{skillatkadd}#": "5113", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, } }, "cannoneer_siege-burst": { "id": "358", "ident": "cannoneer_siege-burst", "name": "Siege Burst", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/SiegeBurst_icon.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/SiegeBurst.mp4", "desc": "
[Físico] - [Projétil]<\/div>Dispara projéteis no chão usando um morteiro. Inimigos atingidos serão derrubados. Causa 5x dano adicional à estruturas inimigas.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "38", "element": "none", "reqstance": 'BestaCanhão', "levellist": { "1": { "#{skillatkadd}#": "859", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "2": { "#{skillatkadd}#": "1098", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "3": { "#{skillatkadd}#": "1337", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "4": { "#{skillatkadd}#": "1576", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "5": { "#{skillatkadd}#": "1815", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "6": { "#{skillatkadd}#": "2054", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "7": { "#{skillatkadd}#": "2293", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "8": { "#{skillatkadd}#": "2532", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "9": { "#{skillatkadd}#": "2771", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "10": { "#{skillatkadd}#": "3010", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "11": { "#{skillatkadd}#": "3249", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "12": { "#{skillatkadd}#": "3488", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "13": { "#{skillatkadd}#": "3727", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "14": { "#{skillatkadd}#": "3966", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "15": { "#{skillatkadd}#": "4205", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, } }, "cannoneer_cannon-blast": { "id": "359", "ident": "cannoneer_cannon-blast", "name": "Cannon Blast", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/CannonBlast_icon.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/CannonBlast.mp4", "desc": "
[Físico] - [Projétil]<\/div>Causa dano a vários inimigos a frente com um disparo em forma de arco em direção ao chão.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "27", "element": "none", "reqstance": 'BestaCanhão', "levellist": { "1": { "#{skillatkadd}#": "2192", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "2": { "#{skillatkadd}#": "2482", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "3": { "#{skillatkadd}#": "2772", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "4": { "#{skillatkadd}#": "3062", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "5": { "#{skillatkadd}#": "3352", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "6": { "#{skillatkadd}#": "3642", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "7": { "#{skillatkadd}#": "3932", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "8": { "#{skillatkadd}#": "4222", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "9": { "#{skillatkadd}#": "4512", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "10": { "#{skillatkadd}#": "4802", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "11": { "#{skillatkadd}#": "5092", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "12": { "#{skillatkadd}#": "5382", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "13": { "#{skillatkadd}#": "5672", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "14": { "#{skillatkadd}#": "5962", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, "15": { "#{skillatkadd}#": "6252", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "104" }, } }, "musketeer_butt-stroke": { "id": "360", "ident": "musketeer_butt-stroke", "name": "Butt Stroke", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/ButtStroke_icon.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/ButtStroke.mp4", "desc": "
[Físico] - [Golpe]<\/div>Usa o mosquete para golpear o inimigo na cabeça", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "8", "element": "none", "reqstance": 'Mosquete', "levellist": { "1": { "#{skillatkadd}#": "691", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "2": { "#{skillatkadd}#": "874", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "1057", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "4": { "#{skillatkadd}#": "1240", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "5": { "#{skillatkadd}#": "1423", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "6": { "#{skillatkadd}#": "1606", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "7": { "#{skillatkadd}#": "1789", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "8": { "#{skillatkadd}#": "1972", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "9": { "#{skillatkadd}#": "2155", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "10": { "#{skillatkadd}#": "2338", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "11": { "#{skillatkadd}#": "2521", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "12": { "#{skillatkadd}#": "2704", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "13": { "#{skillatkadd}#": "2887", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "14": { "#{skillatkadd}#": "3070", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "15": { "#{skillatkadd}#": "3253", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, } }, "musketeer_snipe": { "id": "361", "ident": "musketeer_snipe", "name": "Snipe", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/Snipe_icon.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/Snipe.mp4", "desc": "
[Físico] - [Projétil]<\/div>", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'Mosquete', "levellist": { "1": { "#{skillatkadd}#": "1894", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "2": { "#{skillatkadd}#": "2295", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "3": { "#{skillatkadd}#": "2696", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "4": { "#{skillatkadd}#": "3097", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "5": { "#{skillatkadd}#": "3498", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "6": { "#{skillatkadd}#": "3899", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "7": { "#{skillatkadd}#": "4300", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "8": { "#{skillatkadd}#": "4701", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "9": { "#{skillatkadd}#": "5102", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "10": { "#{skillatkadd}#": "5503", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "11": { "#{skillatkadd}#": "5904", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "12": { "#{skillatkadd}#": "6305", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "13": { "#{skillatkadd}#": "6706", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "14": { "#{skillatkadd}#": "7107", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "15": { "#{skillatkadd}#": "7508", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, } }, "musketeer_covering-fire": { "id": "362", "ident": "musketeer_covering-fire", "name": "Covering Fire", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/CoveringFire_icon.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/CoveringFire.mp4", "desc": "
[Físico] - [Projétil]<\/div>", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'Mosquete', "levellist": { "1": { "#{skillatkadd}#": "115", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "2": { "#{skillatkadd}#": "136", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "3": { "#{skillatkadd}#": "157", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "4": { "#{skillatkadd}#": "178", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "199", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "6": { "#{skillatkadd}#": "220", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "7": { "#{skillatkadd}#": "241", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "8": { "#{skillatkadd}#": "262", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "9": { "#{skillatkadd}#": "283", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "10": { "#{skillatkadd}#": "304", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "11": { "#{skillatkadd}#": "325", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "12": { "#{skillatkadd}#": "346", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "13": { "#{skillatkadd}#": "367", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "14": { "#{skillatkadd}#": "388", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "15": { "#{skillatkadd}#": "409", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, } }, "musketeer_bayonet-thrust": { "id": "363", "ident": "musketeer_bayonet-thrust", "name": "Bayonet Thrust", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/BayonetTrust_icon.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/BayonetTrust.mp4", "desc": "
[Físico] - [Perfurante]<\/div>", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "9", "element": "none", "reqstance": 'Mosquete', "levellist": { "1": { "#{skillatkadd}#": "804", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "2": { "#{skillatkadd}#": "1020", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "3": { "#{skillatkadd}#": "1236", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "4": { "#{skillatkadd}#": "1452", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "5": { "#{skillatkadd}#": "1668", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "6": { "#{skillatkadd}#": "1884", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "7": { "#{skillatkadd}#": "2100", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "8": { "#{skillatkadd}#": "2316", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "9": { "#{skillatkadd}#": "2532", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "10": { "#{skillatkadd}#": "2748", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "11": { "#{skillatkadd}#": "2964", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "12": { "#{skillatkadd}#": "3180", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "13": { "#{skillatkadd}#": "3396", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "14": { "#{skillatkadd}#": "3612", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, "15": { "#{skillatkadd}#": "3828", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "41" }, } }, "musketeer_penetration-shot": { "id": "364", "ident": "musketeer_penetration-shot", "name": "Penetration Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/PenetrationShot_icon.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/PenetrationShot.mp4", "desc": "
[Físico] - [Projétil]<\/div>", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "19", "element": "none", "reqstance": 'Mosquete', "levellist": { "1": { "#{skillatkadd}#": "789", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "2": { "#{skillatkadd}#": "989", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "3": { "#{skillatkadd}#": "1189", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "4": { "#{skillatkadd}#": "1389", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "5": { "#{skillatkadd}#": "1589", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "6": { "#{skillatkadd}#": "1789", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "7": { "#{skillatkadd}#": "1989", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "8": { "#{skillatkadd}#": "2189", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "9": { "#{skillatkadd}#": "2389", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "10": { "#{skillatkadd}#": "2589", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "11": { "#{skillatkadd}#": "2789", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "12": { "#{skillatkadd}#": "2989", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "13": { "#{skillatkadd}#": "3189", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "14": { "#{skillatkadd}#": "3389", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, "15": { "#{skillatkadd}#": "3589", "#{skillefect}#": "Bonus de Ataque: 150%
Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "56" }, } }, "musketeer_headshot": { "id": "365", "ident": "musketeer_headshot", "name": "Headshot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/HeadShot_icon.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/HeadShot.mp4", "desc": "
[Físico] - [Projétil]<\/div>", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'Mosquete', "levellist": { "1": { "#{skillatkadd}#": "1029", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -5", "#{skillfactor}#": "100", "sp": "51" }, "2": { "#{skillatkadd}#": "1370", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -10", "#{skillfactor}#": "100", "sp": "51" }, "3": { "#{skillatkadd}#": "1711", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -15", "#{skillfactor}#": "100", "sp": "51" }, "4": { "#{skillatkadd}#": "2052", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -20", "#{skillfactor}#": "100", "sp": "51" }, "5": { "#{skillatkadd}#": "2393", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -25", "#{skillfactor}#": "100", "sp": "51" }, "6": { "#{skillatkadd}#": "2734", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -30", "#{skillfactor}#": "100", "sp": "51" }, "7": { "#{skillatkadd}#": "3075", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -35", "#{skillfactor}#": "100", "sp": "51" }, "8": { "#{skillatkadd}#": "3416", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -40", "#{skillfactor}#": "100", "sp": "51" }, "9": { "#{skillatkadd}#": "3757", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -45", "#{skillfactor}#": "100", "sp": "51" }, "10": { "#{skillatkadd}#": "4098", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -50", "#{skillfactor}#": "100", "sp": "51" }, "11": { "#{skillatkadd}#": "4439", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -55", "#{skillfactor}#": "100", "sp": "51" }, "12": { "#{skillatkadd}#": "4780", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -60", "#{skillfactor}#": "100", "sp": "51" }, "13": { "#{skillatkadd}#": "5121", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -65", "#{skillfactor}#": "100", "sp": "51" }, "14": { "#{skillatkadd}#": "5462", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -70", "#{skillfactor}#": "100", "sp": "51" }, "15": { "#{skillatkadd}#": "5803", "#{skillefect}#": "Bonus de Ataque: 300%
Dano do Atributo: 0%
INT, SPR: -75", "#{skillfactor}#": "100", "sp": "51" }, } }, "shinobi_mijin-no-jutsu": { "id": "366", "ident": "shinobi_mijin-no-jutsu", "name": "Mijin no Jutsu", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/icon_mijinnojutsu.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/mijin_no_jutsu.mp4", "desc": "
[Físico] - [Golpe]<\/div>Utiliza a pólvora para causar uma explosão que ataca inimigos próximos. Você também vai sofrer dano com essa habilidade, e pode ser morrer, se você tomar muito dano.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "50", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "2043", "#{skillefect}#": "Dano do Atributo: 0%
Consume 6500 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "74" }, "2": { "#{skillatkadd}#": "2645", "#{skillefect}#": "Dano do Atributo: 0%
Consume 6000 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "83" }, "3": { "#{skillatkadd}#": "3247", "#{skillefect}#": "Dano do Atributo: 0%
Consume 5500 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "92" }, "4": { "#{skillatkadd}#": "3849", "#{skillefect}#": "Dano do Atributo: 0%
Consume 5000 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "101" }, "5": { "#{skillatkadd}#": "4451", "#{skillefect}#": "Dano do Atributo: 0%
Consume 4500 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "110" }, "6": { "#{skillatkadd}#": "5053", "#{skillefect}#": "Dano do Atributo: 0%
Consume 4000 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "119" }, "7": { "#{skillatkadd}#": "5655", "#{skillefect}#": "Dano do Atributo: 0%
Consume 3500 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "128" }, "8": { "#{skillatkadd}#": "6257", "#{skillefect}#": "Dano do Atributo: 0%
Consume 3000 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "137" }, "9": { "#{skillatkadd}#": "6859", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2500 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "146" }, "10": { "#{skillatkadd}#": "7461", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2000 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "155" }, "11": { "#{skillatkadd}#": "8063", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1500 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "164" }, "12": { "#{skillatkadd}#": "8665", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1000 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "173" }, "13": { "#{skillatkadd}#": "9267", "#{skillefect}#": "Dano do Atributo: 0%
Consume 500 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "182" }, "14": { "#{skillatkadd}#": "9869", "#{skillefect}#": "Dano do Atributo: 0%
Consume 0 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "191" }, "15": { "#{skillatkadd}#": "10471", "#{skillefect}#": "Dano do Atributo: 0%
Consume -500 HP
Consume 5 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "200" }, } }, "shinobi_bunshin-no-jutsu": { "id": "367", "ident": "shinobi_bunshin-no-jutsu", "name": "Bunshin no Jutsu", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/icon_bunshinnojutsu.png", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/Bunshin_no_Jutsu.mp4", "desc": "
<\/div>Criar um clone de si mesmo. Clones imitar as ações do seu corpo e algumas habilidades podem ser usados por seu clone. A força máxima dos clones são determinados pela destreza do utilizador.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "49", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 16 Seg.
Invoca 1 Clone das Sombras
Aumenta o dano: 1x", "#{skillfactor}#": "100", "sp": "80" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 17 Seg.
Invoca 2 Clone das Sombras
Aumenta o dano: 2x", "#{skillfactor}#": "100", "sp": "92" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 18 Seg.
Invoca 3 Clone das Sombras
Aumenta o dano: 3x", "#{skillfactor}#": "100", "sp": "104" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 19 Seg.
Invoca 4 Clone das Sombras
Aumenta o dano: 4x", "#{skillfactor}#": "100", "sp": "116" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.
Invoca 5 Clone das Sombras
Aumenta o dano: 5x", "#{skillfactor}#": "100", "sp": "128" }, } }, "shinobi_mokuton-no-jutsu": { "id": "368", "ident": "shinobi_mokuton-no-jutsu", "name": "Mokuton no Jutsu", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/icon_mokutonnojutsu.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
<\/div>Enganar o inimigo com uma isca feita de troncos. Feito com sucesso, confunde o inimigo e lhe permite um contra-ataque.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "35", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "981", "#{skillefect}#": "Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "1212", "#{skillefect}#": "Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "46" }, "3": { "#{skillatkadd}#": "1443", "#{skillefect}#": "Duração: 30 Seg.", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "1674", "#{skillefect}#": "Duração: 35 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "5": { "#{skillatkadd}#": "1905", "#{skillefect}#": "Duração: 40 Seg.", "#{skillfactor}#": "100", "sp": "58" }, "6": { "#{skillatkadd}#": "2136", "#{skillefect}#": "Duração: 45 Seg.", "#{skillfactor}#": "100", "sp": "62" }, "7": { "#{skillatkadd}#": "2367", "#{skillefect}#": "Duração: 50 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "8": { "#{skillatkadd}#": "2598", "#{skillefect}#": "Duração: 55 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "9": { "#{skillatkadd}#": "2829", "#{skillefect}#": "Duração: 60 Seg.", "#{skillfactor}#": "100", "sp": "74" }, "10": { "#{skillatkadd}#": "3060", "#{skillefect}#": "Duração: 65 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "11": { "#{skillatkadd}#": "3291", "#{skillefect}#": "Duração: 70 Seg.", "#{skillfactor}#": "100", "sp": "82" }, "12": { "#{skillatkadd}#": "3522", "#{skillefect}#": "Duração: 75 Seg.", "#{skillfactor}#": "100", "sp": "86" }, "13": { "#{skillatkadd}#": "3753", "#{skillefect}#": "Duração: 80 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "14": { "#{skillatkadd}#": "3984", "#{skillefect}#": "Duração: 85 Seg.", "#{skillfactor}#": "100", "sp": "94" }, "15": { "#{skillatkadd}#": "4215", "#{skillefect}#": "Duração: 90 Seg.", "#{skillfactor}#": "100", "sp": "98" }, } }, "shinobi_katon-no-jutsu": { "id": "369", "ident": "shinobi_katon-no-jutsu", "name": "Katon no Jutsu", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/icon_katonnojutsu.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/Katon_no_Jutsu.mp4", "desc": "
[Físico] - [Fogo]<\/div>Disparar pólvora em uma linha na frente de você, danificando um grande número de inimigos.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "29", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "498", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "65" }, "2": { "#{skillatkadd}#": "600", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "74" }, "3": { "#{skillatkadd}#": "702", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "83" }, "4": { "#{skillatkadd}#": "804", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "92" }, "5": { "#{skillatkadd}#": "906", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "101" }, "6": { "#{skillatkadd}#": "1008", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "110" }, "7": { "#{skillatkadd}#": "1110", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "119" }, "8": { "#{skillatkadd}#": "1212", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "128" }, "9": { "#{skillatkadd}#": "1314", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "137" }, "10": { "#{skillatkadd}#": "1416", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "146" }, "11": { "#{skillatkadd}#": "1518", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "155" }, "12": { "#{skillatkadd}#": "1620", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "164" }, "13": { "#{skillatkadd}#": "1722", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "173" }, "14": { "#{skillatkadd}#": "1824", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "182" }, "15": { "#{skillatkadd}#": "1926", "#{skillefect}#": "Dano do Atributo: 0%
Consume 2 Ninjutsu Bombs", "#{skillfactor}#": "100", "sp": "191" }, } }, "shinobi_kunai": { "id": "370", "ident": "shinobi_kunai", "name": "Kunai", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/icon_kunai.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Físico] - [Perfurante]<\/div>Jogue kunai para a frente, danificando os inimigos atingidos.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "291", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "324", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "45" }, "3": { "#{skillatkadd}#": "357", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "390", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "423", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "60" }, "6": { "#{skillatkadd}#": "456", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "65" }, "7": { "#{skillatkadd}#": "489", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "70" }, "8": { "#{skillatkadd}#": "522", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "75" }, "9": { "#{skillatkadd}#": "555", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "10": { "#{skillatkadd}#": "588", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "85" }, "11": { "#{skillatkadd}#": "621", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "90" }, "12": { "#{skillatkadd}#": "654", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "95" }, "13": { "#{skillatkadd}#": "687", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "100" }, "14": { "#{skillatkadd}#": "720", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "105" }, "15": { "#{skillatkadd}#": "753", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "110" }, } }, "peltasta_langort": { "id": "371", "ident": "peltasta_langort", "name": "Langort", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/Peltasta_Langort.jpg", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "", "desc": "
[Físico] - [Golpe]<\/div>Esfaqueia com espada o inimigo enquanto mantem o escudo em defesa.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "150", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "19" }, "2": { "#{skillatkadd}#": "180", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "22" }, "3": { "#{skillatkadd}#": "210", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "25" }, "4": { "#{skillatkadd}#": "240", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "28" }, "5": { "#{skillatkadd}#": "270", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "31" }, } }, "corsair_pistol-shot": { "id": "372", "ident": "corsair_pistol-shot", "name": "Pistol Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/Corsario_PistolShot.jpg", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/pistol_shot.webm", "desc": "
[Físico] - [Projétil]<\/div>Inflige dano no inimigo a frente, disparando com uma pistola como arma auxiliar.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "33", "element": "none", "reqstance": 'Pistola', "levellist": { "1": { "#{skillatkadd}#": "267", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "34" }, "2": { "#{skillatkadd}#": "329", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "39" }, "3": { "#{skillatkadd}#": "391", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "44" }, "4": { "#{skillatkadd}#": "453", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "49" }, "5": { "#{skillatkadd}#": "515", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "54" }, } }, "chaplain_last-rites": { "id": "373", "ident": "chaplain_last-rites", "name": "Last Rites", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/icon_chaplain_lastrites.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Cria um estado divino, onde ataques de membros do Grupo se tornam ataques de propriedade Sagrado. Danos do tipo Sagrado escalam com nível de habilidade do Conjurador. Se a HP é abaixo de 40% o efeito é aumentado.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "40", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 180 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 210 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "48" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 240 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "54" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 270 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "60" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 300 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "66" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 330 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "72" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 360 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "78" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 390 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "84" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 420 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "90" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 450 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "96" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 480 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "102" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 510 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "108" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 540 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "114" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 570 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "120" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 600 Seg.
Consume 1 Plantago [Gyslotis]", "#{skillfactor}#": "100", "sp": "126" }, } }, "chaplain_deploy-capella": { "id": "374", "ident": "chaplain_deploy-capella", "name": "Deploy Capella", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/icon_chaplain_buildcappella.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Cria um santuário usando um manto. Membros do grupo, incluindo o jogador, receberão Aspersão, Ostensório, Benção, Sacramento, Pele de Pedra todos ativados ao mesmo tempo.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "65", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 15 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "55" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 20 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "63" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 25 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "71" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 30 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "79" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 35 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "87" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 40 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "95" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 45 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "103" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 50 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "111" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 55 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "119" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 60 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "127" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 65 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "135" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 70 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "143" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 75 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "151" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 80 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "159" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Efeito: 85 Seg.
Consume 1 Manto", "#{skillfactor}#": "100", "sp": "167" }, } }, "chaplain_magnus-exorcismus": { "id": "375", "ident": "chaplain_magnus-exorcismus", "name": "Magnus Exorcismus", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/icon_chaplain_magnusexorcismus.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Muda o círculo mágico da habilidade 'Exorcizar' [exorcize padre/priest c3] para um raio divino. O raio divino inflige dano ao longo do tempo aos inimigos próximos.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "60", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "254", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 11 Seg.", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "318", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 12 Seg.", "#{skillfactor}#": "100", "sp": "51" }, "3": { "#{skillatkadd}#": "382", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 13 Seg.", "#{skillfactor}#": "100", "sp": "57" }, "4": { "#{skillatkadd}#": "446", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 14 Seg.", "#{skillfactor}#": "100", "sp": "63" }, "5": { "#{skillatkadd}#": "510", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 15 Seg.", "#{skillfactor}#": "100", "sp": "69" }, "6": { "#{skillatkadd}#": "574", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 16 Seg.", "#{skillfactor}#": "100", "sp": "75" }, "7": { "#{skillatkadd}#": "638", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 17 Seg.", "#{skillfactor}#": "100", "sp": "81" }, "8": { "#{skillatkadd}#": "702", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 18 Seg.", "#{skillfactor}#": "100", "sp": "87" }, "9": { "#{skillatkadd}#": "766", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 19 Seg.", "#{skillfactor}#": "100", "sp": "93" }, "10": { "#{skillatkadd}#": "830", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 20 Seg.", "#{skillfactor}#": "100", "sp": "99" }, "11": { "#{skillatkadd}#": "894", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 21 Seg.", "#{skillfactor}#": "100", "sp": "105" }, "12": { "#{skillatkadd}#": "958", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 22 Seg.", "#{skillfactor}#": "100", "sp": "111" }, "13": { "#{skillatkadd}#": "1022", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 23 Seg.", "#{skillfactor}#": "100", "sp": "117" }, "14": { "#{skillatkadd}#": "1086", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 24 Seg.", "#{skillfactor}#": "100", "sp": "123" }, "15": { "#{skillatkadd}#": "1150", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 25 Seg.", "#{skillfactor}#": "100", "sp": "129" }, } }, "chaplain_aspergillum": { "id": "376", "ident": "chaplain_aspergillum", "name": "Aspergillum", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/icon_chaplain_aspergillum.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "", "desc": "
[Efeito] - [Bonus]<\/div>Derrama água benta em seu armamento que então espirra nos inimigos durante o combate. A quantidade de água benta utilizada esta relacionada com o nível de Aspersão [ Aspersion - padre/priest c1 ] do jogador. ", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "30", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 10 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "47" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 20 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "54" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "61" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 40 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "68" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 50 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "75" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "82" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 70 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "89" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 80 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "96" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 90 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "103" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 100 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "110" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 110 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "117" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 120 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "124" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 130 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "131" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 140 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "138" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 150 Seg.
Consume 1 Água Benta", "#{skillfactor}#": "100", "sp": "145" }, } }, "runecaster_hagalaz": { "id": "377", "ident": "runecaster_hagalaz", "name": "Hagalaz", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_runescaster_Hagalaz.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/hagalaz.mp4", "desc": "
[Magico] - [Terra]<\/div>Inflige dano massivo em múltiplos inimigos numa área específica. Inimigos que atacarem tem o seu dano refletido a sua volta.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "95", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "1392", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "73" }, "2": { "#{skillatkadd}#": "1715", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "88" }, "3": { "#{skillatkadd}#": "2038", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "103" }, "4": { "#{skillatkadd}#": "2361", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "118" }, "5": { "#{skillatkadd}#": "2684", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "133" }, "6": { "#{skillatkadd}#": "3007", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "148" }, "7": { "#{skillatkadd}#": "3330", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "163" }, "8": { "#{skillatkadd}#": "3653", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "178" }, "9": { "#{skillatkadd}#": "3976", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "193" }, "10": { "#{skillatkadd}#": "4299", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "208" }, "11": { "#{skillatkadd}#": "4622", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "223" }, "12": { "#{skillatkadd}#": "4945", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "238" }, "13": { "#{skillatkadd}#": "5268", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "253" }, "14": { "#{skillatkadd}#": "5591", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "268" }, "15": { "#{skillatkadd}#": "5914", "#{skillefect}#": "Bonus de Ataque: 400%
Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "283" }, } }, "runecaster_isa": { "id": "378", "ident": "runecaster_isa", "name": "Isa", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_runescaster_Isa.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/isa.mp4", "desc": "
[Magico] - [Bonus]<\/div>Aumenta o dano mágico de propriedade [Gelo] do conjurador e de seu grupo em 300%", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "180", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 10 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "67" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 20 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "79" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 30 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "91" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 40 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "103" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 50 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "115" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 60 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "127" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 70 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "139" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 80 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "151" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 90 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "163" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 100 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "175" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 110 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "187" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 120 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "199" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 130 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "211" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 140 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "223" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Aumenta o dano de ataque tipo gelo em 300%
Consume 1 Rune Stone
Duração: 150 seg.
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "235" }, } }, "runecaster_thurisaz": { "id": "379", "ident": "runecaster_thurisaz", "name": "Thurisaz", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_runescaster_Thurisaz.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/thurisaz.mp4", "desc": "
[Magico] - [Bonus]<\/div>Cria um círculo temporário aumentando o tamanho dos aliados e seu ataque e defesa aumentam.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "300", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 30 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 60 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "86" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 90 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "100" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 120 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "114" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 150 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "128" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 180 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "142" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 210 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "156" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 240 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "170" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 270 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "184" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 300 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "198" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 330 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "212" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 360 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "226" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 390 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "240" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 420 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "254" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Duração: 450 Seg.
Duração do Círculo Mágico: 10 Seg.
Defense, Máx. HP: +100%
Velocidade de Movimento: +20
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "268" }, } }, "runecaster_tiwaz": { "id": "380", "ident": "runecaster_tiwaz", "name": "Tiwaz", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_runescaster_Tiwaz.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/tiwaz.mp4", "desc": "
[Magico] - [Sagrado]<\/div>Um ataque divino projetado em forma de cone na sua frente.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "50", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": " 783", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "70" }, "2": { "#{skillatkadd}#": "1037", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "3": { "#{skillatkadd}#": "1291", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "98" }, "4": { "#{skillatkadd}#": "1545", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "112" }, "5": { "#{skillatkadd}#": "1799", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "126" }, "6": { "#{skillatkadd}#": "2053", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "140" }, "7": { "#{skillatkadd}#": "2307", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "154" }, "8": { "#{skillatkadd}#": "2561", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "168" }, "9": { "#{skillatkadd}#": "2815", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "182" }, "10": { "#{skillatkadd}#": "3069", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "196" }, "11": { "#{skillatkadd}#": "3323", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "210" }, "12": { "#{skillatkadd}#": "3577", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "224" }, "13": { "#{skillatkadd}#": "3831", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "238" }, "14": { "#{skillatkadd}#": "4085", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "252" }, "15": { "#{skillatkadd}#": "4339", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "266" }, } }, "runecaster_algiz": { "id": "381", "ident": "runecaster_algiz", "name": "Algiz", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/icon_runescaster_Algiz.png", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/Algiz.mp4", "desc": "
[Magico] - [Bonus]<\/div>Aumenta a chance de resistir a condições de status em si mesmo e para o grupo, temporariamente.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "90", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +10%
Duração: 10 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "65" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +20%
Duração: 20 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "77" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +30%
Duração: 30 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "89" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +40%
Duração: 40 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "101" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +50%
Duração: 50 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "113" }, "6": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +60%
Duração: 60 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "125" }, "7": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +70%
Duração: 70 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "137" }, "8": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +80%
Duração: 80 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "149" }, "9": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +90%
Duração: 90 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "161" }, "10": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +100%
Duração: 100 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "173" }, "11": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +110%
Duração: 110 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "185" }, "12": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +120%
Duração: 120 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "197" }, "13": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +130%
Duração: 130 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "209" }, "14": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +140%
Duração: 140 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "221" }, "15": { "#{skillatkadd}#": "", "#{skillefect}#": "Chances de resistir a efeitos: +150%
Duração: 150 Seg.
Consume 1 Rune Stone
Tempo de Conjuração 8 Seg.", "#{skillfactor}#": "100", "sp": "233" }, } }, "doppelsoeldner_zornhau": { "id": "382", "ident": "doppelsoeldner_zornhau", "name": "Zornhau", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/zornhau.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "15", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/11006.mp4", "desc": "
[Físico] - [Cortante]<\/div>Infligir dano e atordoa um inimigo, desferindo um grande golpe com toda sua força.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'Espada 2Mãos', "levellist": { "1": { "#{skillatkadd}#": "1291", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "42" }, "2": { "#{skillatkadd}#": "1603", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "48" }, "3": { "#{skillatkadd}#": "1915", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "54" }, "4": { "#{skillatkadd}#": "2227", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "60" }, "5": { "#{skillatkadd}#": "2539", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "66" }, "6": { "#{skillatkadd}#": "2851", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "72" }, "7": { "#{skillatkadd}#": "3163", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "78" }, "8": { "#{skillatkadd}#": "3475", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "84" }, "9": { "#{skillatkadd}#": "3787", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "90" }, "10": { "#{skillatkadd}#": "4099", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "96" }, "11": { "#{skillatkadd}#": "4411", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "102" }, "12": { "#{skillatkadd}#": "4723", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "108" }, "13": { "#{skillatkadd}#": "5035", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "114" }, "14": { "#{skillatkadd}#": "5347", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "120" }, "15": { "#{skillatkadd}#": "5659", "#{skillefect}#": "Dano do Atributo: 0%
Duração: 5 Seg.", "#{skillfactor}#": "100", "sp": "126" }, } }, "doppelsoeldner_zucken": { "id": "383", "ident": "doppelsoeldner_zucken", "name": "Zucken", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/zucken.jpg", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/11008.mp4", "desc": "
[Físico] - [Cortante]<\/div>Infligir danos os inimigos a frente com uma série de golpes laterais. Causa dano adicional para os inimigos que estão atordoados.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "20", "element": "none", "reqstance": 'Espada 2Mãos', "levellist": { "1": { "#{skillatkadd}#": "459", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "8" }, "2": { "#{skillatkadd}#": "559", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "51" }, "3": { "#{skillatkadd}#": "659", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "94" }, "4": { "#{skillatkadd}#": "759", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "137" }, "5": { "#{skillatkadd}#": "859", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "180" }, "6": { "#{skillatkadd}#": "959", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "223" }, "7": { "#{skillatkadd}#": "1059", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "266" }, "8": { "#{skillatkadd}#": "1159", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "309" }, "9": { "#{skillatkadd}#": "1259", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "352" }, "10": { "#{skillatkadd}#": "1359", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "395" }, } }, "doppelsoeldner_redel": { "id": "384", "ident": "doppelsoeldner_redel", "name": "Redel", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/redel.jpg", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/11007.mp4", "desc": "
[Físico] - [Cortante]<\/div>Desfere ataques consecutivos a um inimigo a frente balançando sua arma.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'Espada 2Mãos', "levellist": { "1": { "#{skillatkadd}#": "394", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "478", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "53" }, "3": { "#{skillatkadd}#": "562", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "61" }, "4": { "#{skillatkadd}#": "646", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "69" }, "5": { "#{skillatkadd}#": "730", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "77" }, "6": { "#{skillatkadd}#": "814", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "85" }, "7": { "#{skillatkadd}#": "898", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "93" }, "8": { "#{skillatkadd}#": "982", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "101" }, "9": { "#{skillatkadd}#": "1066", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "109" }, "10": { "#{skillatkadd}#": "1150", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "117" }, } }, "sorcerer_evocation": { "id": "385", "ident": "sorcerer_evocation", "name": "Evocation", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/evocation.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/20709.mp4", "desc": "
[Magico] - [Sombrio]<\/div>Atacar os inimigos com sua invocação com base no cartão secundário equipado no Grimório.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "55", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "1553", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "75" }, "2": { "#{skillatkadd}#": "1791", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "90" }, "3": { "#{skillatkadd}#": "2029", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "105" }, "4": { "#{skillatkadd}#": "2267", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "120" }, "5": { "#{skillatkadd}#": "2505", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "135" }, } }, "sorcerer_desmodus": { "id": "386", "ident": "sorcerer_desmodus", "name": "Desmodus", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/desmodus.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/20710.mp4", "desc": "
[Magico] - [Terra]<\/div>Invoca morcegos que sugam o sangue dos inimigos causando dano.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "893", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "2": { "#{skillatkadd}#": "1173", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "66" }, "3": { "#{skillatkadd}#": "1453", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "73" }, "4": { "#{skillatkadd}#": "1733", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "5": { "#{skillatkadd}#": "2013", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "87" }, } }, "squire_penalty-reduction": { "id": "387", "ident": "squire_penalty-reduction", "name": "Penalty Reduction", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/mitigatepenalty.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/swordsman/10707.mp4", "desc": "
[Físico] - [Bonus]<\/div>Reduz a penalidade de incapacitar o combate.
Equipamento Durabilidade: -2% / -2% Nv
Consumida Prata: -0,4% / -0.4% Nv
Consumida Gem: -1% / -1% Nv
", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "120", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Penalidade da Durabilidade do Equipamento: -2%
Penalidade do Consumo de Prata: -0.4%
Penalidade do Consumo de Gema: -1%", "#{skillfactor}#": "100", "sp": "40" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Penalidade da Durabilidade do Equipamento: -4%
Penalidade do Consumo de Prata: -0.8%
Penalidade do Consumo de Gema: -2%", "#{skillfactor}#": "100", "sp": "45" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Penalidade da Durabilidade do Equipamento: -6%
Penalidade do Consumo de Prata: -1.2%
Penalidade do Consumo de Gema: -3%", "#{skillfactor}#": "100", "sp": "50" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Penalidade da Durabilidade do Equipamento: -8%
Penalidade do Consumo de Prata: -1.6%
Penalidade do Consumo de Gema: -4%", "#{skillfactor}#": "100", "sp": "55" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Penalidade da Durabilidade do Equipamento: -10%
Penalidade do Consumo de Prata: -2%
Penalidade do Consumo de Gema: -5%", "#{skillfactor}#": "100", "sp": "60" }, } }, "falconer_sonic-strike": { "id": "388", "ident": "falconer_sonic-strike", "name": "Sonic Strike", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/blisteringthrash.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/31008.mp4", "desc": "
[Físico] - [Golpe]<\/div>Comanda o seu falcão para atacar os inimigos em uma área alvo.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "45", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "1392", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "1671", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "52" }, "3": { "#{skillatkadd}#": "1950", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "59" }, "4": { "#{skillatkadd}#": "2229", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "66" }, "5": { "#{skillatkadd}#": "2508", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "73" }, "6": { "#{skillatkadd}#": "2787", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "80" }, "7": { "#{skillatkadd}#": "3066", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "87" }, "8": { "#{skillatkadd}#": "3345", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "94" }, "9": { "#{skillatkadd}#": "3624", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "101" }, "10": { "#{skillatkadd}#": "3903", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "108" }, } }, "schwarzereiter_wild-shot": { "id": "389", "ident": "schwarzereiter_wild-shot", "name": "Wild Shot", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/wildshot.png", "circle": "2", "ranklevel": "5", "maxlevel": "10", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/archer/30905.mp4", "desc": "
[Físico] - [Projétil]<\/div>Atacar um inimigo com uma besta e uma pistola com rachadas rápidas com as duas mãos.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "25", "element": "none", "reqstance": 'BestaPistola', "levellist": { "1": { "#{skillatkadd}#": "168", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "55" }, "2": { "#{skillatkadd}#": "193", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "63" }, "3": { "#{skillatkadd}#": "218", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "71" }, "4": { "#{skillatkadd}#": "243", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "79" }, "5": { "#{skillatkadd}#": "268", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "87" }, "6": { "#{skillatkadd}#": "293", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "95" }, "7": { "#{skillatkadd}#": "318", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "103" }, "8": { "#{skillatkadd}#": "343", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "111" }, "9": { "#{skillatkadd}#": "368", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "119" }, "10": { "#{skillatkadd}#": "393", "#{skillefect}#": "Dano do Atributo: 0%", "#{skillfactor}#": "100", "sp": "127" }, } }, "chronomancer_pass": { "id": "390", "ident": "chronomancer_pass", "name": "Pass", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/pass.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/wizard/20807.mp4", "desc": "
[Magico] - [Bonus]<\/div>Reduz o tempo de recarga de suas habilidades e dos membros do sua grupo [Party].", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "0", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Recarga: 5 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Recarga: 10 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Recarga: 15 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Recarga: 20 Seg.", "#{skillfactor}#": "100", "sp": "0" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Redução do Tempo de Recarga: 25 Seg.", "#{skillfactor}#": "100", "sp": "0" }, } }, "pardoner_decatose": { "id": "391", "ident": "pardoner_decatose", "name": "Decatose", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/dekatos.png", "circle": "3", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/40809.mp4", "desc": "
[Físico] - [Golpe]<\/div>Ataca um inimigo com o dinheiro recolhido para oferecer aos deuses. Inimigos com exceção de Monstros Chefes [Boss] podem ser mortos instantaneamente em uma chance de 1/10. O dinheiro oferecido pode ser escolhido novamente ao passar por cima.", "desc2": "ATAQUE: #{skillatkadd}# 
#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "15", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "1500", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "35" }, "2": { "#{skillatkadd}#": "1600", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "40" }, "3": { "#{skillatkadd}#": "1700", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "45" }, "4": { "#{skillatkadd}#": "1800", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "50" }, "5": { "#{skillatkadd}#": "1900", "#{skillefect}#": "Dano do Atributo: 0%
Consume 1500 Prata [Silver]", "#{skillfactor}#": "100", "sp": "55" }, } }, "kabbalist_notarikon": { "id": "392", "ident": "kabbalist_notarikon", "name": "Notarikon", "icon": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/notarikon.jpg", "circle": "1", "ranklevel": "5", "maxlevel": "5", "video": "http://tosdatabase.com.br/cms/admin/files/_DADOS_CLASSES/cleric/41206.mp4", "desc": "
[Magico] - [Bonus]<\/div>Divida o nome de um inimigo e calcular um novo número a partir da primeira e da última letra.", "desc2": "#{skillefect}#", "type1": "contato", "type2": "ataque", "cooldown": "10", "element": "none", "reqstance": 'TODAS', "levellist": { "1": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 1 vezes", "#{skillfactor}#": "100", "sp": "45" }, "2": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 2 vezes", "#{skillfactor}#": "100", "sp": "51" }, "3": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 3 vezes", "#{skillfactor}#": "100", "sp": "57" }, "4": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 4 vezes", "#{skillfactor}#": "100", "sp": "63" }, "5": { "#{skillatkadd}#": "", "#{skillefect}#": "Aplica-se um max. de 5 vezes", "#{skillfactor}#": "100", "sp": "69" }, } }, }; var skillpoints = {}; var selectedclasses = ["", "", "", "", "", "", "", "", "", ""]; var circlelist = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]; var spentskillpoints = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; function checkrequirements(rank, classname) { //Chaplain if(classname === "char4_14") { var priestcircle = 0; for(var i = 0; i < rank; ++i) { if(selectedclasses[i] === 'char4_3') { ++priestcircle; } } if(priestcircle < 3) { alert('Capelão [Chaplain] requer Ciclo 3 de Padre [Priest]'); return false; } } return true; } function selectclass(rank, classname) { if(checkrequirements(rank, classname) === false) return; if(selectedclasses[rank - 1] !== "") { //if(selectedclasses[rank - 1] === classname) { $('#skill_sim_rank' + rank + '_classes .skill_sim_class_button').removeClass('active'); $('#skill_sim_rank' + rank + '_classes .skill_sim_class_button').removeClass('unselected'); $('#skill_sim_rank' + rank + '_classes .skill_sim_class_button').addClass('enabled'); resetskills(rank); resetrank(rank + 1); $('#skill_sim_rank' + rank + '_skills').html(''); classcirclelist[selectedclasses[rank - 1]] -= 1; selectedclasses[rank - 1] = ""; return; } selectedclasses[rank - 1] = classname; classcirclelist[classname] += 1; circlelist[rank - 1] = classcirclelist[classname]; if(rank === 1) { classobj = classlist[classname]; baseclass = classobj.base; } //if(selectedclasses[rank] !== "") { // resetrank(rank + 1); //} initskills(rank, classname); initrank(rank + 1, classname); $('#skill_sim_rank' + rank + '_classes .skill_sim_class_button').removeClass('active'); $('#skill_sim_rank' + rank + '_classes .skill_sim_class_button').removeClass('enabled'); $('#skill_sim_rank' + rank + '_classes .skill_sim_class_button').addClass('unselected'); $('#skill_sim_rank' + rank + '_' + classname + '_button').removeClass('unselected'); $('#skill_sim_rank' + rank + '_' + classname + '_button').addClass('active'); } function resetskills(rank) { classname = selectedclasses[rank - 1]; if(classname === "") return; skillpoints[classname] += (spentskillpoints[rank - 1] - 15); spentskillpoints[rank - 1] = 0; //$('.skill_sim_skill_points_' + classname).html(skillpoints[classname]); updateskillpointviews(classname); } function resetrank(rank) { $('#skill_sim_rank' + rank + '_classes').html(""); $('#skill_sim_rank' + rank + '_skills').html(""); $('#skill_sim_rank' + rank + '_row').hide(); classname = selectedclasses[rank - 1]; if(classname === "") { return; } selectedclasses[rank - 1] = ""; classcirclelist[classname] -= 1; resetskills(rank); if(rank < maxrank) { resetrank(rank + 1); } } function initrank(rank, classname, max_circle) { if(rank > maxrank) return; htmlstring = ""; for(var _rank = 1; _rank <= rank; ++_rank) { rankarray = ranklist['rank' + _rank][baseclass]; for(i = 0; i < rankarray.length; ++i) { classobj = classlist[rankarray[i]]; circle = classcirclelist[rankarray[i]]; if(circle < classobj.max_circle) { htmlstring += '
'; htmlstring += '
'; htmlstring += '
circle ' + (circle + 1) + '
'; htmlstring += '
' + classobj.name + '
'; htmlstring += '
'; } } } $('#skill_sim_rank' + rank + '_classes').html(htmlstring); $('#skill_sim_rank' + rank + '_row').show(); } function sound(){ document.getElementById("sound").play(); } function initskills(rank, classname) { classobj = classlist[classname]; spentskillpoints[rank - 1] = 0; circle = classcirclelist[classname]; /*while((rank - 1 - circle) >= 0 && selectedclasses[rank - 1 - circle] === classname) { ++circle; } circlelist[rank - 1] = circle;*/ var prevcirclerank = 0; if(circle > 1) { for(j = 1; j < rank; ++j) { if(selectedclasses[j - 1] === classname) { prevcirclerank = j; } } } var htmlstring = ''; htmlstring += '
0 Pontos de Habilidade
'; htmlstring += ''; for(i = 0; i < classobj.skills.length; ++i) { skillname = classobj.skills[i]; skillobj = skilllist[skillname]; if(circle >= skillobj.circle) { absolutelevel = 0; if(circle > 1) { skillelement = $('#skill_sim_skill_value_' + prevcirclerank + '_' + skillname); if(skillelement.length > 0) { absolutelevel = parseInt(skillelement.html()); } } maxdisplaylevel = (1 + (circle - skillobj.circle)) * skillobj.ranklevel; if(maxdisplaylevel > skillobj.maxlevel) { maxdisplaylevel = skillobj.maxlevel; } htmlstring += '
'; htmlstring += '

'; htmlstring += ''; htmlstring += '
' + absolutelevel + ' / ' + maxdisplaylevel + '
'; if(skillobj.video !== "") { htmlstring += '
'; } /* htmlstring += '
'; if(skillabilitylist[skillname] !== undefined) { abilitynamelist = skillabilitylist[skillname]; for(j = 0; j < abilitynamelist.length; ++j) { abilityname = abilitynamelist[j]; ability = abilitylist[abilityname]; if(ability.reqcircle <= circle) { htmlstring += '' + ability.name + ''; } } } */ htmlstring += '
'; htmlstring += ''; htmlstring += '
'; } } $('#skill_sim_rank' + rank + '_skills').html(htmlstring); $('#skill_sim_selected_ranks').val(rank); if(circle > 1) { skillpoints[classname] += 15; } else { skillpoints[classname] = 15; } //$('.skill_sim_skill_points_' + classname).html(skillpoints[classname]); updateskillpointviews(classname); } function escapeRegExp(string) { return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"); } function replaceAll(string, find, replace) { return string.replace(new RegExp(escapeRegExp(find), 'g'), replace); } function createskilltooltipcontent(skillobj, level) { var htmlstring = ""; htmlstring += '' + skillobj.name + ''; htmlstring += skillobj.desc + '
'; var desc2 = ""; if(level > 0) { htmlstring += "NÍVEL " + (level) + "
"; var levelinfo = skillobj.levellist[level]; desc2 = skillobj.desc2; desc2 = replaceAll(desc2, '#{skillatkadd}#', levelinfo['#{skillatkadd}#']); desc2 = replaceAll(desc2, '#{skillefect}#', levelinfo['#{skillefect}#']); desc2 = replaceAll(desc2, '#{skillefectlvl}#', levelinfo['#{skillefectlvl}#']); desc2 = replaceAll(desc2, '#{skillefecttime}#', levelinfo['#{skillefecttime}#']); desc2 = replaceAll(desc2, '#{skillfactor}#', levelinfo['#{skillfactor}#']); desc2 = replaceAll(desc2, '#{skillsr}#', levelinfo['#{skillsr}#']); desc2 = replaceAll(desc2, '#{captionratio2}#', levelinfo['#{captionratio2}#']); htmlstring += desc2; htmlstring += '
CUSTO DE MANA: ' + levelinfo['sp'] + '
'; htmlstring += '
'; } if(level < skillobj.maxlevel) { htmlstring += "NÍVEL " + (level + 1) + "
"; var levelinfo = skillobj.levellist[level + 1]; desc2 = skillobj.desc2; desc2 = replaceAll(desc2, '#{skillatkadd}#', levelinfo['#{skillatkadd}#']); desc2 = replaceAll(desc2, '#{skillefect}#', levelinfo['#{skillefect}#']); desc2 = replaceAll(desc2, '#{skillefectlvl}#', levelinfo['#{skillefectlvl}#']); desc2 = replaceAll(desc2, '#{skillefecttime}#', levelinfo['#{skillefecttime}#']); desc2 = replaceAll(desc2, '#{skillfactor}#', levelinfo['#{skillfactor}#']); desc2 = replaceAll(desc2, '#{skillsr}#', levelinfo['#{skillsr}#']); desc2 = replaceAll(desc2, '#{captionratio2}#', levelinfo['#{captionratio2}#']); htmlstring += desc2; htmlstring += '
CUSTO DE MANA: ' + levelinfo['sp'] + '
'; htmlstring += '
'; } //htmlstring += "TIPO: " + skillobj.type1 + " / " + skillobj.type2 + "
"; htmlstring += "TEMPO DE RECARGA: " + skillobj.cooldown + "s
"; if(skillobj.reqstance !== "") { htmlstring += "ARMA: " + skillobj.reqstance + "
"; } if(skillobj.element !== "none") { htmlstring += "ELEMENTO: "; htmlstring += '' + skillobj.element + '
'; } return htmlstring; } function updateskilltooltip(skillobj, circle, level) { var htmlstring = createskilltooltipcontent(skillobj, level); $('#skill_sim_skill_' + skillobj.ident + '_' + circle + '_tooltip').html(htmlstring); $('#tooltip').html(htmlstring); } function increaseskill(rank, skillname, levels) { classname = selectedclasses[rank - 1]; skillelement = $('#skill_sim_skill_value_' + rank + '_' + skillname); if(skillelement.length === 0) { return; } skilllevel = skillelement.data('level'); skilllevelabsolute = parseInt(skillelement.html()); skillmaxlevel = skillelement.data('max-level'); classskillpoints = skillpoints[selectedclasses[rank - 1]]; realskillpoints = getrealskillpoints(rank, classname); if(skilllevelabsolute >= skillmaxlevel) { //max level reached } else if(realskillpoints === 0) { //not enough skill points } else { skilllevel += levels; skilllevelabsolute += levels; spentskillpoints[rank - 1] += levels; skillelement.data('level', skilllevel); skillelement.html(skilllevelabsolute); $('#skill_sim_skill_input_' + rank + '_' + skillname).val(skilllevel); skillpoints[selectedclasses[rank - 1]] = classskillpoints - levels; //$('.skill_sim_skill_points_' + classname).html(skillpoints[selectedclasses[rank - 1]]); updateskillpointviews(classname); updateskilltooltip(skilllist[skillname], classcirclelist[classname], skilllevelabsolute); //if(rank < maxrank && selectedclasses[rank - 1] === selectedclasses[rank]) { if(rank < maxrank) { increaseskillupper(rank + 1, classname, skillname, levels); } } } function increaseskillupper(rank, classname, skillname, levels) { if(selectedclasses[rank - 1] === classname) { skillelement = $('#skill_sim_skill_value_' + rank + '_' + skillname); skilllevel = skillelement.data('level'); skillmaxlevel = skillelement.data('max-level'); skilllevelabsolute = parseInt(skillelement.html()); if(skilllevelabsolute >= skillmaxlevel) { skillleveldiff = (skilllevelabsolute - skillmaxlevel) + levels; skilllevel -= skillleveldiff; spentskillpoints[rank - 1] -= skillleveldiff; skillelement.data('level', skilllevel); $('#skill_sim_skill_input_' + rank + '_' + skillname).val(skilllevel); classname = selectedclasses[rank - 1]; skillpoints[classname] += skillleveldiff; //$('.skill_sim_skill_points_' + classname).html(skillpoints[classname]); updateskillpointviews(classname); } else { skillelement.html(skilllevelabsolute + levels); updateskilltooltip(skilllist[skillname], classcirclelist[classname], skilllevelabsolute + levels); /*if(rank < maxrank && selectedclasses[rank - 1] === selectedclasses[rank]) { increaseskillupper(rank + 1, skillname, levels); }*/ } } if(rank < maxrank) { increaseskillupper(rank + 1, classname, skillname, levels); } } function decreaseskill(rank, skillname) { classname = selectedclasses[rank - 1]; skillelement = $('#skill_sim_skill_value_' + rank + '_' + skillname); skilllevel = skillelement.data('level'); skilllevelabsolute = parseInt(skillelement.html()); classskillpoints = skillpoints[selectedclasses[rank - 1]]; if(skilllevel === 0) { //no skill points for this rank left } else { --skilllevel; --skilllevelabsolute; --spentskillpoints[rank - 1]; skillelement.data('level', skilllevel); skillelement.html(skilllevelabsolute); $('#skill_sim_skill_input_' + rank + '_' + skillname).val(skilllevel); skillpoints[selectedclasses[rank - 1]] = classskillpoints + 1; //$('.skill_sim_skill_points_' + classname).html(skillpoints[selectedclasses[rank - 1]]); updateskillpointviews(classname); updateskilltooltip(skilllist[skillname], classcirclelist[classname], skilllevelabsolute); //if(rank < maxrank && selectedclasses[rank - 1] === selectedclasses[rank]) { if(rank < maxrank) { decreaseskillupper(rank + 1, classname, skillname); } } } function decreaseskillupper(rank, classname, skillname) { if(selectedclasses[rank - 1] === classname) { skillelement = $('#skill_sim_skill_value_' + rank + '_' + skillname); skilllevel = skillelement.data('level'); skilllevelabsolute = parseInt(skillelement.html()); if(skilllevelabsolute > 0) { skillelement.html(skilllevelabsolute - 1); updateskilltooltip(skilllist[skillname], classcirclelist[classname], skilllevelabsolute - 1); } } if(rank < maxrank) { decreaseskillupper(rank + 1, classname, skillname); } } function updateskillpointviews(classname) { for(rank = 1; rank <= maxrank; ++rank) { if(selectedclasses[rank - 1] !== classname) continue; $('.skill_sim_skill_points_' + classname + '_' + circlelist[rank - 1]).html(getrealskillpoints(rank, classname)); } } function getrealskillpoints(rank, classname) { //value = Math.min(skillpoints[classname], (circlelist[rank - 1] * 15) - spentskillpoints[rank - 1]); maxcirclelevel = (circlelist[rank - 1] * 15); if(rank >= 2 && selectedclasses[rank - 2] === selectedclasses[rank - 1]) { maxcirclelevel -= spentskillpoints[rank - 2]; } if(selectedclasses[rank] === selectedclasses[rank - 1] && spentskillpoints[rank] > 15) { maxcirclelevel -= (spentskillpoints[rank] - 15); } value = Math.min(skillpoints[classname], maxcirclelevel - spentskillpoints[rank - 1]); return value; } $(".loading_simualdor").addClass("hidden");