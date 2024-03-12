const game_container = document.querySelector('.div-container-for-game')
new_battle = new Battle(50, 50)
// game_container.classList.remove('.no-display')
const btn_start_game = document.querySelector('.btn-start-game')
btn_start_game.addEventListener(('click'),()=>{
game_container.classList.remove('no-display')
document.querySelector('.div-game-start-container').remove()
new_battle.display_initate_battle()
})

const buttonMovesAll = document.querySelectorAll('.btn-player-move')
const stage = document.querySelector('.h1-stage');

buttonMovesAll[0].addEventListener(('click'), ()=> {
    new_battle.condition_for_player_attack(0,new_battle.create_random_number(2))
    new_battle.condition_for_enemy_attack(0, new_battle.create_random_number(2))
})
buttonMovesAll[1].addEventListener(('click'), ()=> {
    new_battle.condition_for_player_attack(1,new_battle.create_random_number(2))
    new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
    new_battle.display_initate_battle()
})
buttonMovesAll[2].addEventListener(('click'), ()=> {
    new_battle.condition_for_player_attack(1,new_battle.create_random_number(2))
    new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})
buttonMovesAll[3].addEventListener(('click'), ()=>{
    new_battle.condition_for_player_attack(2,new_battle.create_random_number(2))
    new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})
buttonMovesAll[4].addEventListener(('click'), ()=>{
    new_battle.condition_for_player_attack(2,new_battle.create_random_number(2))
    new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})
buttonMovesAll[5].addEventListener(('click'), ()=>{
    new_battle.defend()
    let input = 'Player One has defended. Player has gained 10 energy.'
    new_battle.insert_into_battle_log(input)
    new_battle.create_input_element(input)
    new_battle.display_initate_battle()  
    new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})

const buttonAllMovesTwo =  document.querySelectorAll('.btn-player-move-set-two')
buttonAllMovesTwo[0].addEventListener(('click'), ()=>{
    new_battle.condition_for_player_attack(3,new_battle.create_random_number(2))
        new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})
buttonAllMovesTwo[1].addEventListener(('click'), ()=>{
    new_battle.condition_for_player_attack(3,new_battle.create_random_number(2))
        new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})
buttonAllMovesTwo[2].addEventListener(('click'), ()=>{
    new_battle.condition_for_player_attack(4,new_battle.create_random_number(2))
        new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})
buttonAllMovesTwo[3].addEventListener(('click'), ()=>{
    new_battle.condition_for_player_attack(4,new_battle.create_random_number(2))
        new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})
buttonAllMovesTwo[4].addEventListener(('click'), ()=>{
    new_battle.condition_for_player_attack(5,new_battle.create_random_number(2))
        new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})
buttonAllMovesTwo[5].addEventListener(('click'), ()=>{
    new_battle.condition_for_player_attack(5,new_battle.create_random_number(2))
        new_battle.condition_for_enemy_attack(new_battle.create_random_number(5),new_battle.create_random_number(2))
})
