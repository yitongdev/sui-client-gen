import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isItem(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::kiosk::Item`;
}

export interface ItemFields {
  id: ToField<ID>;
}

export type ItemReified = Reified<Item, ItemFields>;

/**
 * Move struct: `Item`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 */
export class Item implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::kiosk::Item`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Item.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::kiosk::Item`;
  readonly $typeArgs: [];
  readonly $isPhantom = Item.$isPhantom;

  readonly id: ToField<ID>;

  private constructor(typeArgs: [], fields: ItemFields) {
    this.$fullTypeName = composeSuiType(
      Item.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::kiosk::Item`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified(): ItemReified {
    return {
      typeName: Item.$typeName,
      fullTypeName: composeSuiType(Item.$typeName, ...[]) as `${typeof PKG_V35}::kiosk::Item`,
      typeArgs: [] as [],
      isPhantom: Item.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Item.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Item.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Item.fromBcs(data),
      bcs: Item.bcs,
      fromJSONField: (field: any) => Item.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Item.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Item.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Item.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Item.fetch(client, id),
      new: (fields: ItemFields) => {
        return new Item([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Item.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Item>> {
    return phantom(Item.reified());
  }
  static get p() {
    return Item.phantom();
  }

  static get bcs() {
    return bcs.struct("Item", {
      id: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Item {
    return Item.reified().new({ id: decodeFromFields(ID.reified(), fields.id) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Item {
    if (!isItem(item.type)) {
      throw new Error("not a Item type");
    }

    return Item.reified().new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id) });
  }

  static fromBcs(data: Uint8Array): Item {
    return Item.fromFields(Item.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Item {
    return Item.reified().new({ id: decodeFromJSONField(ID.reified(), field.id) });
  }

  static fromJSON(json: Record<string, any>): Item {
    if (json.$typeName !== Item.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Item.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Item {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isItem(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Item object`);
    }
    return Item.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Item {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isItem(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Item object`);
      }

      return Item.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Item.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Item> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Item object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isItem(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Item object`);
    }

    return Item.fromSuiObjectData(res.data);
  }
}
