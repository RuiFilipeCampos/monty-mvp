import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const WATER = "WATER"
const GOLD = "GOLD"
const AIR = "AIR"


type Water = "WATER"
type Gold = "GOLD"
type Air = "AIR"



type Photon = "PHOTON"
type Electron = "ELECTRON"
type Positron = "POSITRON"

const PHOTON = "PHOTON"
const ELECTRON = "ELECTRON"
const POSITRON = "POSITRON"

type Energy = 1 | 10 | 30



type Material =  Water | Gold | Air
type CondensedStateMaterial = Water | Gold
type Particle = Photon | Electron | Positron


export interface SphereState {
  radius: number,
  numberOfParticles:number,
  energy:Energy,
  materialInside: Material,
  particleType:Particle,
}

const initialState: SphereState = {
  radius: 200,
  numberOfParticles:500,
  energy:1,
  materialInside: WATER,
  particleType: PHOTON,
}

export const sphereSlice = createSlice({
  name: 'sphere',
  initialState,
  reducers: {
    setRadius: (state, action: PayloadAction<number>) => {
      state.radius = action.payload
    },
    setNumberOfParticles: (state, action: PayloadAction<number>) => {
      state.numberOfParticles = action.payload
    },
    setEnergy: (state, action: PayloadAction<Energy>) => {
      state.energy = action.payload
    },
    setMaterialInside: (state, action: PayloadAction<Material>) => {
      state.materialInside = action.payload
    },
    setParticleType: (state, action: PayloadAction<Particle>) => {
      state.particleType = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  setRadius, 
  setNumberOfParticles,  
  setEnergy,
  setMaterialInside,
  setParticleType,
} = sphereSlice.actions

export default sphereSlice.reducer
