import { NextResponse } from 'next/server'
import { appendFile } from '@/lib/db'

export async function POST(request: Request){
  try{
    const data = await request.json()
    const item = {
      name: String(data.name||'').trim(),
      email: String(data.email||'').trim(),
      phone: String(data.phone||'').trim(),
      subject: String(data.subject||'').trim(),
      message: String(data.message||'').trim(),
      consent: Boolean(data.consent),
      createdAt: new Date().toISOString()
    }
    if (!item.name || !item.email || !item.message){
      return NextResponse.json({ ok:false, error: 'Campos obrigatórios faltando.' }, { status: 400 })
    }
    await appendFile('submissions.json', item)
    return NextResponse.json({ ok:true }, { status: 201 })
  }catch(e:any){
    return NextResponse.json({ ok:false, error: e.message||'Erro' }, { status: 400 })
  }
}
