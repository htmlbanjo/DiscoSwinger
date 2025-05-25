import { Conversations_dialog } from '@data/models/'
import { response } from 'express'

interface IDialog {
  id: number
  parentId: number
  dialogId: number
  checkType: string
  checkDifficulty: number
  checkGameDifficulty: number
  isRoot: number
  isGroup: number
  refId: string
  isHub: number
  dialogShort: string
  dialogLong: string
  actorId: number
  actorName: string
  conversantId: number
  conversantName: number
  skillRefId: string
  skillId: number
  skillName: string
  modifiers: string
  sequence: string
  conditionPriority: number
  conditionString: string
  userScript: string
  inputId: string
  outputId: string
  flag: string
  createdAt: string
  updatedAt: string
}
interface IModifier {
  tooltip: string
  variable: string
  modifier: number
}
interface IDialogResponse {
  id: number
  parentId: number
  dialogId: number
  checkType: string
  checkDifficulty: number
  checkGameDifficulty: number
  isRoot: number
  isGroup: number
  refId: string
  isHub: number
  dialogShort: string
  dialogLong: string
  actorId: number
  actorName: string
  conversantId: number
  conversantName: number
  skillId: number
  skillName: string
  modifiers: IModifier[]
  sequence: string
  conditionPriority: number
  conditionString: string
  userScript: string
  inputId: string
  outputId: string
  flag: string
  createdAt: string
  updatedAt: string
}

function parseModifierList(modifiers: string) {
  if (!!!modifiers) {
    return
  }
  return JSON.parse(modifiers).reduce((r: IModifier[], m) => {
    r.push({
      modifier: parseInt(m?.modifier),
      tooltip: m?.tooltip,
      variable: m?.variable
    })
    return r
  }, [] as IModifier[])
}

function setResponseItem(item): IDialogResponse {
  return {
    id: item.id,
    parentId: item.parentId,
    dialogId: item.dialogId,
    checkType: item.checkType,
    checkDifficulty: item.checkDifficulty,
    checkGameDifficulty: item.checkGameDifficulty,
    isRoot: item.isRoot,
    isGroup: item.isGroup,
    refId: item.refId,
    isHub: item.isHub,
    dialogShort: item.dialogShort,
    dialogLong: item.dialogLong,
    actorId: item.actorId,
    actorName: item.actorName,
    conversantId: item.conversantId,
    conversantName: item.conversantName,
    skillId: item.skillId,
    skillName: item.skillName,
    modifiers: parseModifierList(item?.modifiers),
    sequence: item.sequence,
    conditionPriority: item.conditionPriority,
    conditionString: item.conditionString,
    userScript: item.userScript,
    inputId: item.inputId,
    outputId: item.outputId,
    flag: item.flag,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt
  }
}

function setDialogResult(result: IDialog[]): IDialogResponse[] {
  return result?.reduce((dialogList: IDialogResponse[], dialog: IDialog) => {
    dialogList.push(setResponseItem(dialog))
    return dialogList
  }, [] as IDialogResponse[])
}

function findAllWithParams(params) {
  return Conversations_dialog.findAll({ where: { ...params } }).then(result =>
    setDialogResult(result)
  )
}
function findAll() {
  throw new Error(
    'Need at least one param (All dialog in the game is a very long list!)'
  )
  //return Conversations_dialog.findAll().then(result => setDialogResult(result))
}
function findOneWithParams(params) {
  return Conversations_dialog.findOne({ where: { ...params } }).then(
    (conversation: IDialogResponse) => setResponseItem(conversation)
  )
}
function findOne() {
  return Conversations_dialog.findOne().then((conversation: IDialogResponse) =>
    setResponseItem(conversation)
  )
}

export const getDialogSome = async (params): Promise<IDialogResponse[]> => {
  try {
    return params ? findAllWithParams(params) : findAll()
  } catch (err) {
    throw new Error(`Couldn't fetch dialog item: ${err}`)
  }
}

export const getDialogOne = (id: number, params): Promise<IDialogResponse> => {
  try {
    return params ? findOneWithParams(params) : findOne()
  } catch (err) {
    throw new Error(`Couln't find dialog with ID=<\${id}>: ${err}`)
  }
}
