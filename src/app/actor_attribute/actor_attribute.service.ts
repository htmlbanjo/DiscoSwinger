import { Actors_attribute } from '@data/models/'

interface IActorAttr {
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
interface IActorAttrResponse {
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
}

function setResponseItem(actor): IActorAttrResponse {
  return {
    id: actor.id,
    name: actor.name,
    shortDescription: actor.shortDescription,
    longDescription: actor.longDescription,
    isPlayer: actor.isPlayer,
    isNPC: actor.isNPC,
    isFemale: actor.isFemale,
    PSY: actor.PSY,
    COR: actor.COR,
    ITL: actor.ITL,
    MOT: actor.MOT
  }
}

export const getActorAttrSome = async (): Promise<IActorAttrResponse[]> => {
  try {
    return Actors_attribute.findAll().then(result =>
      result?.reduce(
        (actorSkillList: IActorAttrResponse[], actorSkill: IActorAttr) => {
          actorSkillList.push(setResponseItem(actorSkill))
          return actorSkillList
        },
        [] as IActorAttrResponse[]
      )
    )
  } catch (err) {
    throw new Error(`Couldn't fetch actor list: ${err}`)
  }
}

export const getActorAttrOne = (id: number): IActorAttrResponse => {
  try {
    return Actors_attribute.findOne({ where: { id } }).then(
      (actorSk: IActorAttr) => setResponseItem(actorSk)
    )
  } catch (err) {
    throw new Error(`Couln't find actor with ID=<\${id}>: ${err}`)
  }
}
