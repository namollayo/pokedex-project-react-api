import { DivLoading, PokeballLoading } from './styles';
import  Pokeball  from '../../assets/pokeball.gif'

export function LoadingAnimation() {

    return (
        <DivLoading>
            <PokeballLoading src={Pokeball}/>
        </DivLoading>
    )
}