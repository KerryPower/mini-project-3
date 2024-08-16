import { NextResponse } from "next/server";
import { getOrders, addOrder, updateOrder, deleteOrder } from "../../../controllers/orderController";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const status = searchParams.get('status');
        const orders = await getOrders(status);
        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message || 'Failed to retrieve orders' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const newData = await req.json();
        const addedOrder = await addOrder(newData);
        return NextResponse.json(addedOrder, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message || 'Failed to parse request body' }, { status: 400 });
    }
}

export async function PUT(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID query parameter is required' }, { status: 400 });
        }

        const newData = await req.json();
        const result = await updateOrder(id, newData);
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message || 'Failed to parse request body' }, { status: 400 });
    }
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID query parameter is required' }, { status: 400 });
        }

        const deletedOrder = await deleteOrder(id);
        return NextResponse.json(deletedOrder, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message || 'Failed to process request' }, { status: 500 });
    }
}