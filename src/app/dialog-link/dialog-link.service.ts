import { Conversations_link } from '@data/models/'

interface IDialogLink {
  id: number
  originConversationId: number
  originDialogId: number
  destinationConversationId: number
  destinationDialogId: number
  isConnector: number
  priority: number
  createdAt: string
  updatedAt: string
}

interface IDialogLinkResponse {
  id: number
  originConversationId: number
  originDialogId: number
  destinationConversationId: number
  destinationDialogId: number
  isConnector: number
  priority: number
}

function setResponseItem(item): IDialogLinkResponse {
  return {
    id: item.id,
    originConversationId: item.originConversationId,
    originDialogId: item.originDialogId,
    destinationConversationId: item.destinationConversationId,
    destinationDialogId: item.destinationDialogId,
    isConnector: item.isConnector,
    priority: item.priority
  }
}
function setDialogResult(result: IDialogLink[]): IDialogLinkResponse[] {
  return result?.reduce(
    (dialogList: IDialogLinkResponse[], dialog: IDialogLink) => {
      dialogList.push(setResponseItem(dialog))
      return dialogList
    },
    [] as IDialogLinkResponse[]
  )
}

function findAllWithParams(params) {
  return Conversations_link.findAll({ where: { ...params } }).then(result =>
    setDialogResult(result)
  )
}

export function findOneWithParams(params) {
  return Conversations_link.findOne({ where: { ...params } }).then(
    (conversation: IDialogLinkResponse) => setResponseItem(conversation)
  )
}

export const getDialogLinkSome = async (
  params
): Promise<IDialogLinkResponse[]> => {
  try {
    return params ? findAllWithParams(params) : null
  } catch (err) {
    throw new Error(`Couldn't fetch dialog item: ${err}`)
  }
}
