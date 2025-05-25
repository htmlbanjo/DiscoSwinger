import { Actors_skill } from '@data/models/'

interface IActorSkill {
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
interface IActorSkillResponse {
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

function setResponseItem(actor): IActorSkillResponse {
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

export const getActorSkillSome = async (): Promise<IActorSkillResponse[]> => {
  try {
    return Actors_skill.findAll().then(result =>
      result?.reduce(
        (actorSkillList: IActorSkillResponse[], actorSkill: IActorSkill) => {
          actorSkillList.push(setResponseItem(actorSkill))
          return actorSkillList
        },
        [] as IActorSkillResponse[]
      )
    )
  } catch (err) {
    throw new Error(`Couldn't fetch actor list: ${err}`)
  }
}

export const getActorSkillOne = (id: number): IActorSkillResponse => {
  try {
    return Actors_skill.findOne({ where: { id } }).then(
      (actorSk: IActorSkill) => setResponseItem(actorSk)
    )
  } catch (err) {
    throw new Error(`Couln't find actor with ID=<\${id}>: ${err}`)
  }
}
