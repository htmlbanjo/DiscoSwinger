import { Locations } from '@data/models/'

interface ILocation {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}
interface ILocationResponse {
  id: number
  name: string
}

function setResponseItem(location): ILocationResponse {
  return {
    id: location.id,
    name: location.name
  }
}

export const getLocationSome = async (): Promise<ILocationResponse[]> => {
  try {
    return Locations.findAll().then(result =>
      result?.reduce(
        (locationList: ILocationResponse[], location: ILocation) => {
          locationList.push(setResponseItem(location))
          return locationList
        },
        [] as ILocationResponse[]
      )
    )
  } catch (err) {
    throw new Error(`Couldn't fetch location list: ${err}`)
  }
}

export const getLocationOne = (id: number): ILocationResponse => {
  try {
    return Locations.findOne({ where: { id } }).then((location: ILocation) =>
      setResponseItem(location)
    )
  } catch (err) {
    throw new Error(`Couln't find location with ID=<\${id}>: ${err}`)
  }
}
