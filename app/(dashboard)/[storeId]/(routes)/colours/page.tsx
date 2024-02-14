import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { ColoursClient } from "./components/client";
import { ColourColumn } from "./components/columns";

const ColoursPage = async ({ params }: { params: { storeId: string } }) => {
  const colours = await prismadb.colour.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const formattedColours: ColourColumn[] = colours.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.created_at, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColoursClient data={formattedColours} />
      </div>
    </div>
  );
};

export default ColoursPage;
