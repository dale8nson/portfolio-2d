"use client"
import { ReactNode } from 'react'
import * as PIXI from 'pixi.js'
import { BlurFilter, DisplacementFilter, Texture, Sprite as PixiSprite } from 'pixi.js';
import { Stage, withFilters, Container, Sprite } from '@pixi/react'
import { AdjustmentFilter } from '@pixi/filter-adjustment'



export const Pixi = ({ width, height, children }: { width: number, height: number, children: ReactNode }) => {


  return (
    <Stage {...{ width, height }}>
      {children}
    </Stage>
  )
}