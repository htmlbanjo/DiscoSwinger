import { Actors } from '@data/models/'

interface IActor {
  actorId: number
  refId: string
  name: string
  shortDescription: string
  longDescription: string
  isPlayer: boolean
  isNPC: boolean
  isFemale: boolean
  createdAt: string
  updatedAt: string
}
interface IActorResponse {
  actorId: number
  refId: string
  name: string
  shortDescription: string
  longDescription: string
  isPlayer: boolean
  isNPC: boolean
  isFemale: boolean
}

function setResponseItem(actor): IActorResponse {
  return {
    actorId: actor.actorId,
    refId: actor.refId,
    name: actor.name,
    shortDescription: actor.shortDescription,
    longDescription: actor.longDescription,
    isPlayer: actor.isPlayer,
    isNPC: actor.isNPC,
    isFemale: actor.isFemale
  }
}

export const getActorSome = async (): Promise<IActorResponse[]> => {
  try {
    return Actors.findAll().then(result =>
      result?.reduce((actorList: IActorResponse[], actor: IActor) => {
        actorList.push(setResponseItem(actor))
        return actorList
      }, [] as IActorResponse[])
    )
  } catch (err) {
    throw new Error(`Couldn't fetch actor list: ${err}`)
  }
}

export const getActorOne = (actorId: number): IActorResponse => {
  try {
    return Actors.findOne({ where: { actorId } }).then((actor: IActor) =>
      setResponseItem(actor)
    )
  } catch (err) {
    throw new Error(`Couln't find actor with actorId=<\${actorId}>: ${err}`)
  }
}
