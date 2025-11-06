import { promises as fs } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')

async function ensureFile(file: string){
  await fs.mkdir(DATA_DIR, { recursive: true })
  const fp = path.join(DATA_DIR, file)
  try{ await fs.access(fp) }catch{ await fs.writeFile(fp, '[]', 'utf8') }
  return fp
}

export async function appendFile(file: string, payload: unknown){
  const fp = await ensureFile(file)
  const content = await fs.readFile(fp, 'utf8').catch(()=>'[]')
  let arr: unknown[] = []
  try{ arr = JSON.parse(content || '[]') }catch{ arr = [] }
  ;(arr as unknown[]).push(payload)
  await fs.writeFile(fp, JSON.stringify(arr, null, 2), 'utf8')
}
