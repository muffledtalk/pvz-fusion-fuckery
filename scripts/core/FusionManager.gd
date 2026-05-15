extends Node

signal fusion_success(new_plant)

var sun = 500

var fused_plants = []

func fuse(plant_a, plant_b):
	if sun < 50:
		print("Not enough sun, broke ass")
		return null
	sun -= 50
	var fusion = Plant.new()
	fusion.plant_name = plant_a.plant_name + "-" + plant_b.plant_name + " ABOMINATION"
	fusion.health = (plant_a.health + plant_b.health) * 1.69
	fusion.damage = (plant_a.damage + plant_b.damage) * 2.1
	fusion.cooldown = max(0.3, (plant_a.cooldown + plant_b.cooldown) / 3.0)
	
	# UNHINGED SYNERGIES
	if "explosive" in plant_a.tags and "thicc" in plant_b.tags:
		fusion.special = "MOANS ON EXPLOSION"
		print("💥 A fucking legendary plant was born, nga!")
	
	fused_plants.append(fusion)
	emit_signal("fusion_success", fusion)
	return fusion

class Plant:
	var plant_name = "Default"
	var health = 100.0
	var damage = 25.0
	var cooldown = 1.5
	var tags = []
	var special = ""