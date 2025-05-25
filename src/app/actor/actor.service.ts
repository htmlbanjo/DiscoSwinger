import { Actors_all } from '@data/models/'

interface IActor {
  id: number
  name: string
  shortDescription: string
  longDescription: string
  isPlayer: boolean
  isNPC: boolean
  isFemale: boolean
  PSY: number
  COR: number
  ITL: number
  MOT: number
  createdAt: string
  updatedAt: string
}
interface IActorResponse {
  id: number
  name: string
  isPlayer: boolean
  isNPC: boolean
  isFemale: boolean
  PSY: number
  COR: number
  ITL: number
  MOT: number
}

function setResponseItem(actor): IActorResponse {
  return {
    id: actor.id,
    name: actor.name,
    isPlayer: actor.isPlayer,
    isNPC: actor.isNPC,
    isFemale: actor.isFemale,
    PSY: actor.PSY,
    COR: actor.COR,
    ITL: actor.ITL,
    MOT: actor.MOT
  }
}

export const getActorSome = async (): Promise<IActorResponse[]> => {
  try {
    return Actors_all.findAll().then(result =>
      result?.reduce((actorList: IActorResponse[], actor: IActor) => {
        actorList.push(setResponseItem(actor))
        return actorList
      }, [] as IActorResponse[])
    )
  } catch (err) {
    throw new Error(`Couldn't fetch actor list: ${err}`)
  }
}

export const getActorOne = (id: number): IActorResponse => {
  try {
    return Actors_all.findOne({ where: { id } }).then((actor: IActor) =>
      setResponseItem(actor)
    )
  } catch (err) {
    throw new Error(`Couln't find actor with ID=<\${id}>: ${err}`)
  }
}
