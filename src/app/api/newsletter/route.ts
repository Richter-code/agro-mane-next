import { NextResponse } from 'next/server'
import { appendFile } from '@/lib/db'

export async function POST(request: Request){
  try{
    const data = await request.json()
    const item = {
      email: String(data.email||'').trim(),
      consent: Boolean(data.consent),
      createdAt: new Date().toISOString()
    }
    if (!item.email) return NextResponse.json({ ok:false, error: 'E-mail é obrigatório.' }, { status: 400 })
    await appendFile('newsletter.json', item)
    return NextResponse.json({ ok:true }, { status: 201 })
  }catch(e:any){
    return NextResponse.json({ ok:false, error: e.message||'Erro' }, { status: 400 })
  }
}
