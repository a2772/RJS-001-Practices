import Cover from './Cover'
import imgPendulum from '../assets/images/pendulum.svg'
import imgChess from '../assets/images/Chess.jpg'
import imgWar from '../assets/images/war.jpg'
import imgMusic from '../assets/images/music.jpg'

function Grid () {
    return(
        <>        
            <Cover 
                title="Pendulum use" subtitle="About pendulum and its use along history" 
                image={imgPendulum} altImg="Pendulum ilustration" 
            />
            <Cover 
                title="Chess" subtitle="Chess, tactics and plays" 
                image={imgChess} altImg="Chess image" 
            />
            <Cover 
                title="War" subtitle="Art of war" 
                image={imgWar} altImg="War image" 
            />
            <Cover 
                title="Music" subtitle="Music and feelings" 
                image={imgMusic} altImg="Musical keyboard" 
            />
        </>
    )
}

export default Grid
