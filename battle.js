class Battle {
    constructor(p1HP, p2HP) {
        this.stage = 1
        this.players = {
            player_one: {
                name: 'Player One',
                hp: p1HP,
                energy: 100,
                level: 1
            },
            player_two: {
                hp: p2HP,
                name: 'Player Two',
                level: 1
            }
        }

        this.dodges = {
            left: { name: 'Left', index: 0 },
            right: { name: 'Right', index: 1 }
        }

        this.attacks = {
            jab: { name: 'jab', damage: 5,energy: 3, index: 0},
            rightcross: { name: 'right cross', damage:5,energy: 5, index: 1},
            leftcross: {name: 'left cross', damage:8,energy: 7, index: 2},
            righthook: {name: 'right hook', damage:12,energy: 9, index: 1},
            lefthook: {name: 'left hook', damage:15,energy: 11, index: 1},
            frontkick: {name: 'Front kick', damage: 10, energy: 15},
            left_roundhouse_kick: {name: 'Left roundhouse kick', damage: 10, energy: 8},
            right_roundhouse_kick: {name: 'Right roundhouse kick', damage: 10, energy: 8},
            spinning_elbow_left: {name: ' left sided spinning elbow', damage: 10, energy: 8},
            spinning_elbow_right: {name: ' right sided spinning elbow', damage: 10, energy: 8},
            flyingknee: {name: 'flying knee', damage: 10, energy: 15}

        }
        this.battle_log = []
        this.attackArray = [this.attacks.jab, this.attacks.rightcross, this.attacks.leftcross, this.attacks.righthook, this.attacks.lefthook, this.attacks.frontkick, this.attacks.left_roundhouse_kick,
             this.attacks.right_roundhouse_kick, this.attacks.spinning_elbow_left, this.attacks.spinning_elbow_right, this.attacks.flyingknee]
        this.dodgeArray = [this.dodges.left, this.dodges.right]

        this.level = 1
        this.progression_hp = 10 * this.level
        this.progression_energy = 15 * this.level


// Left off at adding progression to the game.
    }

    insert_into_battle_log(input){
        this.battle_log.push(input);
    }

    create_input_element(){
        let div_battle_log = document.querySelector('.div-battle-log')
        let item = this.battle_log.splice(0,1)
        let element = document.createElement('p')
        element.innerText = item;
        div_battle_log.appendChild(element)
    }



    print_condition_for_moves(switch_, attack_index, dodge_index){
        if(switch_ === 1){
            let input = `Player one throws a ${this.attackArray[attack_index].name}. Player two dodges to the ${this.dodgeArray[dodge_index].name} ${this.attackArray[attack_index].name} has landed.
            Player two has taken ${this.attackArray[attack_index].damage}. Player Two health. ${this.players.player_two.hp}.`
            this.insert_into_battle_log(input)
            this.create_input_element()
        } else if(switch_ === 2){
        let input = `Player one throws a ${this.attackArray[attack_index].name}. Player two dodges to the ${this.dodgeArray[dodge_index].name}
            Player Two has avoided taking any damage.`
            this.insert_into_battle_log(input)
            this.create_input_element()
        } else {
            console.log("Switch does not contain one or two in 'print condition for moves' function")
        }
    }
    print_condition_for_p2_moves(switch_, attack_index, dodge_index){
        if(switch_ === 1){
          let input = `Player Two throws a ${this.attackArray[attack_index].name}. Player one dodges to the ${this.dodgeArray[dodge_index].name}
            ${this.attackArray[attack_index].name} has landed.
            Player One has taken ${this.attackArray[attack_index].damage}. Player One health. ${this.players.player_one.hp}`
            this.insert_into_battle_log(input)
            this.create_input_element()
        } else if(switch_ === 2){
        let input = `Player Two throws a ${this.attackArray[attack_index].name}. Player one dodges to the ${this.dodgeArray[dodge_index].name}
            Player Two has avoided taking any damage.`
            this.insert_into_battle_log(input)
            this.create_input_element()    
        } else {
            console.log("Switch does not contain one or two in 'print condition for moves' function")
        }
    }
    defend(){
        this.players.player_one.energy += 15
    }
    
    initiatingNextStage(){
     this.stage += 1
     new_battle.players.player_one.level += 1
     new_battle.players.player_two.level += 1
     new_battle.players.player_one.hp = (100) + (this.stage * 20) 
     new_battle.players.player_one.energy = (100) + (this.stage * 20) 
     new_battle.players.player_two.hp = (100) + (this.stage * 20)
     this.display_initate_battle()
     document.querySelector('.h1-stage').innerText = `Stage: ${this.stage}`
    }

    condition_for_player_attack(P1attack, p2dodge){
        if(this.players.player_one.energy < 0){
            alert('You must rest to regain energy before attacking again.')
    }else if (this.players.player_two.hp <= 0 ){
            this.initiatingNextStage()
            document.querySelector('.h1-stage').innerText = this.stage;
          
        } else {

            if(P1attack === 0 && p2dodge === 0){
                console.log(`Player Two HP: ${this.get_player_two_hp()}`)
                this.print_condition_for_moves(2, 0, 0) // Jab - Left
                
            } else if(P1attack === 0 && p2dodge === 1){
                this.reduce_player_health(1, 0)
                console.log(`Player Two HP: ${this.get_player_two_hp()}`)
                this.print_condition_for_moves(1, 0, 1) // Jab - Right
                //End of jabs
                
            } else if(P1attack === 1 && p2dodge === 0){
                this.reduce_player_health(1, 1)
                console.log(`Player Two HP: ${this.get_player_two_hp()}`)
                this.print_condition_for_moves(1, 1, 0) // Right Cross Right
                
            } else if(P1attack === 1 && p2dodge === 1){
                this.reduce_player_health(1, 2)
                console.log(`Player Two HP: ${this.get_player_two_hp()}`)
                this.print_condition_for_moves(1, 2, 1) // Ri
            }
            else if(P1attack === 2 && p2dodge === 0){
                this.reduce_player_health(1, 3)
                console.log(`Player Two HP: ${this.get_player_two_hp()}`)
                this.print_condition_for_moves(1, 3, 0) // Right Hook Left
                
            } else if(P1attack === 2 && p2dodge === 1){
                this.reduce_player_health(1, 4)
                console.log(`Player Two HP: ${this.get_player_name(2)}`)
                this.print_condition_for_moves(1, 4, 1) // Right Hook Right
            } else if(P1attack === 3 && p2dodge === 0){
                this.reduce_player_health(1, 5)
                console.log(`Player Two HP: ${this.get_player_name(2)}`)
                this.print_condition_for_moves(1, 5, 1) // 
            }
            else if(P1attack === 3 && p2dodge === 1){
                this.reduce_player_health(1, 6)
                console.log(`Player Two HP: ${this.get_player_name(2)}`)
                this.print_condition_for_moves(1, 6, 1) // Right Hook Right
            }
            else if(P1attack === 4 && p2dodge === 0){
                this.reduce_player_health(1, 7)
                console.log(`Player Two HP: ${this.get_player_name(2)}`)
                this.print_condition_for_moves(1, 7, 1) // Right Hook Right
            }
            else if(P1attack === 4 && p2dodge === 1){
                this.reduce_player_health(1, 8)
                console.log(`Player Two HP: ${this.get_player_name(2)}`)
                this.print_condition_for_moves(1, 8, 1) // Right Hook Right
            }
            else if(P1attack === 5 && p2dodge === 0){
                this.reduce_player_health(1, 9)
                console.log(`Player Two HP: ${this.get_player_name(2)}`)
                this.print_condition_for_moves(1, 9, 1) // Right Hook Right
            }
            else if(P1attack === 5 && p2dodge === 1){
                this.reduce_player_health(1, 10)
                console.log(`Player Two HP: ${this.get_player_name(2)}`)
                this.print_condition_for_moves(1, 10, 1) // Right Hook Right
            }
        }
        if (this.players.player_two.hp <= 0){
            this.initiatingNextStage()
          
        }
            setTimeout(()=>{
            new_battle.display_initate_battle()
        }, 300)

    }
    end_game(){
        this.players.player_one.hp = 100
        this.players.player_two.hp = 100
        this.stage = 1
        this.players.player_one.energy = 100
        this.players.player_one.level = 1
        this.players.player_two.level = 1
        this.display_initate_battle()
        document.querySelector('.h1-stage').innerText = `Stage: ${this.stage}`
    }
    condition_for_enemy_attack(P2attack, p1dodge){
        console.log('Player Two Move')
        if(this.players.player_one.hp <= 0){
            alert('Battle has ended')
            this.end_game()
            
        } else {
            console.log('P2')
            if(P2attack === 0 && p1dodge === 0){
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
                this.print_condition_for_p2_moves(2, 0, 0) // Jab - Left
                
            } else if(P2attack === 0 && p1dodge === 1){
                this.reduce_player_health(2, 0)
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
                this.print_condition_for_p2_moves(1, 0, 1) // Jab - Right
                //End of jabs
                
            } else if(P2attack === 1 && p1dodge === 0){
                this.reduce_player_health(2, 1)
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
                this.print_condition_for_p2_moves(1, 0, 0) // Right Cross Right
                
            } else if(P2attack === 1 && p1dodge === 1){
                this.reduce_player_health(2, 2)
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
                this.print_condition_for_p2_moves(1, 1, 1) // Left Cross Left
            }
            else if(P2attack === 2 && p1dodge === 0){
                this.reduce_player_health(2, 3)
                this.print_condition_for_p2_moves(1, 2, 0) // Right Hook Left
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
            } else if(P2attack === 2 && p1dodge === 1){
                this.reduce_player_health(2, 4)
                this.print_condition_for_p2_moves(1, 3, 1) // Right Hook Right
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
            } else if(P2attack === 3 && p1dodge === 0){
                this.reduce_player_health(2, 5)
                this.print_condition_for_p2_moves(1, 4, 1) // Right Hook Right
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
            } else if(P2attack === 3 && p1dodge === 1){
                this.reduce_player_health(2, 6)
                this.print_condition_for_p2_moves(1, 5, 1) // Right Hook Right
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
            } else if(P2attack === 4 && p1dodge === 0){
                this.reduce_player_health(2, 7)
                this.print_condition_for_p2_moves(1, 6, 1) // Right Hook Right
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
            } else if(P2attack === 4 && p1dodge === 1){
                this.reduce_player_health(2, 8)
                this.print_condition_for_p2_moves(1, 7, 1) // Right Hook Right
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
            } else if(P2attack === 5 && p1dodge === 0){
                this.reduce_player_health(2, 9)
                this.print_condition_for_p2_moves(1, 8, 1) // Right Hook Right
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
            } else if(P2attack === 5 && p1dodge === 1){
                this.reduce_player_health(2, 10)
                this.print_condition_for_p2_moves(1, 9, 1) // Right Hook Right
                console.log(`Player One HP: ${this.get_player_one_hp()}`)
            console.log('End of Player Two Move')
        }
        if (this.players.player_one.hp <= 0){
            alert('Battle has ended')
            this.end_game()
          
        }
            
        setTimeout(()=>{
            new_battle.display_initate_battle()
        }, 2000)
    }
    }
    manipulate_health_player_one(amount) {  // This might be better as a damage function that changing the damage for different attack.
        this.players.player_one.hp -= amount;
    }
    manipulate_health_player_two(amount) {
        this.players.player_two.hp -= amount;
    }
    get_player_one_hp() {
        return this.players.player_one.hp
    }
    get_player_name(switch_){
        if(switch_ === 1){
            return this.players.player_one.name;
        } else if(switch_ === 2) {
            return this.players.player_two.name;
        } else {
            console.log('Error in switch for get_player_name method in battle object')
        }
    }
    get_player_two_hp() {
        return this.players.player_two.hp
    }
    reduce_player_health(switch_, move) {
        if (switch_ === 1) {
            this.manipulate_health_player_two(this.get_attack_damage(move))
            this.manipulate_player_energy(this.get_attack_energy(move), 1)
        } else if (switch_ === 2) {
            this.manipulate_health_player_one(this.get_attack_damage(move))
        } else {
            console.log('blah')
            
        }
    }
    manipulate_player_energy(amount, switch_){
        if (switch_ === 1) {
            this.players.player_one.energy -= amount
    } else if (switch_ === 2) {
        this.players.player_two.energy -= amount
    } else {

        console.log('blah')
        
    }
    }
    get_attack_damage(switch_){
       console.log(this.attackArray[switch_])
        return this.attackArray[switch_].damage
}

get_attack_energy(switch_){
    console.log(this.attackArray[switch_])
     return this.attackArray[switch_].energy
}
get_player_level(switch_){
    if (switch_ === 1) {
        return this.players.player_one.level
} else if (switch_ === 2) {
    return this.players.player_two.level
} else {

    console.log('blah')
}
}
    print_healths() {
        console.log(`Player 1 HP: ${this.get_player_one_hp()}. Energy: ${this.get_player_one_energy()}`)
        console.log(`Player 2 HP: ${this.get_player_two_hp()}`)
    }
    get_player_one_energy(){
        return this.players.player_one.energy
    }
    display_initate_battle() {
        // pq
        
        let p_player_stats = document.querySelectorAll('.p-player-stat')
        p_player_stats[0].innerText = this.get_player_name(1)
        p_player_stats[1].innerText = `Health: ${this.get_player_one_hp()}`
        p_player_stats[2].innerText = `Energy: ${this.get_player_one_energy()}`
        p_player_stats[3].innerHTML = `Level: ${this.get_player_level(1)}`
        
        // p2
        let p2_player_stats = document.querySelectorAll('.p2-player-stat')
        p2_player_stats[0].innerText = this.get_player_name(2)
        p2_player_stats[1].innerText = `Health: ${this.get_player_two_hp()}` 
        p2_player_stats[2].innerHTML = `Level: ${this.get_player_level(2)}`

    }
    create_random_number(num){
        return Math.floor(Math.random() * num)
    }
}