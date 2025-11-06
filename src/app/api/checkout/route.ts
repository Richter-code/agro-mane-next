import { NextResponse } from 'next/server'
import { appendFile } from '@/lib/db'

export async function POST(request: Request){
  try{
    const data = await request.json()
    const order = {
      id: 'ord_' + Math.random().toString(36).slice(2,10),
      items: Array.isArray(data.items) ? data.items : [],
      customer: {
        name: String(data.customer?.name||'').trim(),
        email: String(data.customer?.email||'').trim(),
        phone: String(data.customer?.phone||'').trim(),
        address: String(data.customer?.address||'').trim(),
      },
      notes: String(data.notes||'').trim(),
      total: Number(data.total||0),
      createdAt: new Date().toISOString()
    }
    if (!order.customer.name || !order.customer.email){
      return NextResponse.json({ ok:false, error: 'Nome e e-mail são obrigatórios.' }, { status: 400 })
    }
    if (!order.items.length){
      return NextResponse.json({ ok:false, error: 'Carrinho vazio.' }, { status: 400 })
    }
    await appendFile('orders.json', order)
    return NextResponse.json({ ok:true, id: order.id }, { status: 201 })
  }catch(e:any){
    return NextResponse.json({ ok:false, error: e.message||'Erro' }, { status: 400 })
  }
}
