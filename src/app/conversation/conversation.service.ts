import sequelize from 'sequelize'
import { Conversations } from '@data/models/'
import { stringify } from 'querystring'

interface IConversation {
  id: number
  conversationId: number
  conversationType: string
  conversationSubType: string
  name: string
  description: string
  taskActive: string
  taskCanceled: string
  taskComplete: string
  taskReward: string
  numSubtasks: number
  subtasks: string
  checkType: number
  condition: string
  instruction: string
  placement: string
  actorId: number
  actorName: string
  conversantId: number
  conversantName: string
  altOrbText: string
  hasALocation: boolean
  location: string
  floor: number
  floorNumber: number
  subject: string
  onUse: string
  dialogOverrideCondition: string
  dialogLength: number
  createdAt: string
  updatedAt: string
}
interface IConversationResponse {
  conversationId: number
  conversationType: string
  conversationSubType: string
  name: string
  description: string
  taskActive: string
  taskCanceled: string
  taskComplete: string
  taskReward: string
  numSubtasks: number
  subtasks: string
  checkType: number
  condition: string
  instruction: string
  placement: string
  actorId: number
  actorName: string
  conversantId: number
  conversantName: string
  hasALocation: boolean
  location: string
  floor: number
  floorNumber: number
  subject: string
  onUse: string
  dialogOverrideCondition: string
  dialogLength: number
}

function setResponseItem(item): IConversationResponse {
  return {
    conversationId: item.conversationId,
    conversationType: item.conversationType,
    conversationSubType: item.conversationSubType,
    name: item.name,
    description: item.description,
    checkType: item.checkType,
    condition: item.condition,
    instruction: item.instruction,
    dialogOverrideCondition: item.dialogOverrideCondition,
    dialogLength: item.dialogLength,
    placement: item.placement,
    taskActive: item.taskActive,
    taskCanceled: item.taskCanceled,
    taskComplete: item.taskComplete,
    taskReward: item.taskReward,
    actorId: item.actorId,
    actorName: item.actorName,
    conversantId: item.conversantId,
    conversantName: item.actorName,
    onUse: item.onUse,
    subtasks: JSON.parse(item.subtasks),
    floorNumber: item.floorNumber,
    numSubtasks: item.numSubtasks,
    hasALocation: item.hasALocation,
    location: item.location,
    floor: item.floor,
    subject: item.subject
  }
}

function setConversationResult(
  result: IConversation[]
): IConversationResponse[] {
  return result?.reduce(
    (
      conversationList: IConversationResponse[],
      conversation: IConversation
    ) => {
      conversationList.push(setResponseItem(conversation))
      return conversationList
    },
    [] as IConversationResponse[]
  )
}

function findAllWithParams(params) {
  return Conversations.findAll({ where: { ...params } }).then(result =>
    setConversationResult(result)
  )
}
function findAll() {
  return Conversations.findAll().then(result => setConversationResult(result))
}
function findOneWithParams(params) {
  return Conversations.findOne({ where: { ...params } }).then(
    (conversation: IConversation) => setResponseItem(conversation)
  )
}
function findOne() {
  return Conversations.findOne().then((conversation: IConversation) =>
    setResponseItem(conversation)
  )
}

export const getConversationSome = async (
  params
): Promise<IConversationResponse[]> => {
  try {
    return params ? findAllWithParams(params) : findAll()
  } catch (err) {
    throw new Error(`Couldn't fetch conversation list: ${err}`)
  }
}

export const getConversationOne = (
  id: number,
  params
): Promise<IConversationResponse> => {
  try {
    return params ? findOneWithParams(params) : findOne()
  } catch (err) {
    throw new Error(`Couln't find conversation with ID=<\${id}>: ${err}`)
  }
}
