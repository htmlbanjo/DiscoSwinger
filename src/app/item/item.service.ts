import { Items } from '@data/models/'

interface IItem {
  itemId: number
  name: string
  displayName: string
  description: string
  itemType: number
  itemGroup: number
  itemValue: number
  conversation: string
  stackName: string
  isCursed: boolean
  mediumText: string
  multipleAllowed: boolean
  isAutoEquipable: boolean
  isThought: boolean
  isSubstance: boolean
  isConsumable: boolean
  isItem: boolean
  equipOrb: string
  thoughtType: number
  bonus: string
  fixtureBonus: string
  fixtureDescription: string
  requirement: string
  timeLeft: number
  isStackable: boolean
  isMusic: boolean
  isTape: boolean
  isEvidence: boolean
  isInventoryItem: boolean
  isClothing: boolean
  isNote: boolean
  isTare: boolean
  isDice: boolean
}
interface IItemResponse {
  id: number
  name: string
  displayName: string
  description: string
  itemType: number
  itemGroup: number
  itemValue: number
  conversation: string
  stackName: string
  isCursed: boolean
  mediumText: string
  multipleAllowed: boolean
  isAutoEquipable: boolean
  isThought: boolean
  isSubstance: boolean
  isConsumable: boolean
  isItem: boolean
  equipOrb: string
  thoughtType: number
  bonus: string
  fixtureBonus: string
  fixtureDescription: string
  requirement: string
  timeLeft: number
  isStackable: boolean
  isMusic: boolean
  isTape: boolean
  isEvidence: boolean
  isInventoryItem: boolean
  isClothing: boolean
  isNote: boolean
  isTare: boolean
  isDice: boolean
}

function setResponseItem(item): IItemResponse {
  return {
    id: item.itemId,
    name: item.name,
    displayName: item.displayName,
    description: item.description,
    itemType: item.itemType,
    itemGroup: item.itemGroup,
    itemValue: item.itemValue,
    conversation: item.conversation,
    stackName: item.stackName,
    isCursed: item.isCursed,
    mediumText: item.mediumText,
    multipleAllowed: item.multipleAllowed,
    isAutoEquipable: item.isAutoEquipable,
    isThought: item.isThought,
    isSubstance: item.isSubstance,
    isConsumable: item.isConsumable,
    isItem: item.isItem,
    equipOrb: item.equipOrb,
    thoughtType: item.thoughtType,
    bonus: item.bonus,
    fixtureBonus: item.fixtureBonus,
    fixtureDescription: item.fixtureDescription,
    requirement: item.requirement,
    timeLeft: item.timeLeft,
    isStackable: item.isStackable,
    isMusic: item.isMusic,
    isTape: item.isTape,
    isEvidence: item.isEvidence,
    isInventoryItem: item.isInventoryItem,
    isClothing: item.isClothing,
    isNote: item.isNote,
    isTare: item.isTare,
    isDice: item.isDice
  }
}

export const getItemSome = async (): Promise<IItemResponse[]> => {
  try {
    return Items.findAll().then(result =>
      result?.reduce((itemList: IItemResponse[], item: IItem) => {
        itemList.push(setResponseItem(item))
        return itemList
      }, [] as IItemResponse[])
    )
  } catch (err) {
    throw new Error(`Couldn't fetch item list: ${err}`)
  }
}

export const getItemOne = (id: number): IItemResponse => {
  try {
    return Items.findOne({ where: { id } }).then((item: IItem) =>
      setResponseItem(item)
    )
  } catch (err) {
    throw new Error(`Couln't find item with ID=<\${id}>: ${err}`)
  }
}
