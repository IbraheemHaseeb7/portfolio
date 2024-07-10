import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

export async function GET(request: NextRequest) {
    const filePath = "public/resume/full_stack_Ibraheem_bin_haseeb.pdf";
    const file = fs.readFileSync(filePath);
    const response = new NextResponse(file, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="full_stack_Ibraheem_bin_haseeb.pdf"`
        },
    });
    return response;
}
