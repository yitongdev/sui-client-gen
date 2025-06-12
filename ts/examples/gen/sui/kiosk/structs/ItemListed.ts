import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isItemListed(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::kiosk::ItemListed` + "<");
}

export interface ItemListedFields<T extends PhantomTypeArgument> {
  kiosk: ToField<ID>;
  id: ToField<ID>;
  price: ToField<"u64">;
}

export type ItemListedReified<T extends PhantomTypeArgument> = Reified<
  ItemListed<T>,
  ItemListedFields<T>
>;

/**
 * Move struct: `ItemListed`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class ItemListed<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk::ItemListed`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ItemListed.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk::ItemListed<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = ItemListed.$isPhantom;

  readonly kiosk: ToField<ID>;
  readonly id: ToField<ID>;
  readonly price: ToField<"u64">;

  private constructor(typeArgs: [PhantomToTypeStr<T>], fields: ItemListedFields<T>) {
    this.$fullTypeName = composeSuiType(
      ItemListed.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk::ItemListed<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.kiosk = fields.kiosk;
    this.id = fields.id;
    this.price = fields.price;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): ItemListedReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: ItemListed.$typeName,
      fullTypeName: composeSuiType(
        ItemListed.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::kiosk::ItemListed<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
      isPhantom: ItemListed.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => ItemListed.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ItemListed.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => ItemListed.fromBcs(T, data),
      bcs: ItemListed.bcs,
      fromJSONField: (field: any) => ItemListed.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => ItemListed.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) => ItemListed.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) => ItemListed.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => ItemListed.fetch(client, T, id),
      new: (fields: ItemListedFields<ToPhantomTypeArgument<T>>) => {
        return new ItemListed([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ItemListed.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<ItemListed<ToPhantomTypeArgument<T>>>> {
    return phantom(ItemListed.reified(T));
  }
  static get p() {
    return ItemListed.phantom;
  }

  static get bcs() {
    return bcs.struct("ItemListed", {
      kiosk: ID.bcs,
      id: ID.bcs,
      price: bcs.u64(),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): ItemListed<ToPhantomTypeArgument<T>> {
    return ItemListed.reified(typeArg).new({
      kiosk: decodeFromFields(ID.reified(), fields.kiosk),
      id: decodeFromFields(ID.reified(), fields.id),
      price: decodeFromFields("u64", fields.price),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): ItemListed<ToPhantomTypeArgument<T>> {
    if (!isItemListed(item.type)) {
      throw new Error("not a ItemListed type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return ItemListed.reified(typeArg).new({
      kiosk: decodeFromFieldsWithTypes(ID.reified(), item.fields.kiosk),
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
      price: decodeFromFieldsWithTypes("u64", item.fields.price),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): ItemListed<ToPhantomTypeArgument<T>> {
    return ItemListed.fromFields(typeArg, ItemListed.bcs.parse(data));
  }

  toJSONField() {
    return {
      kiosk: this.kiosk,
      id: this.id,
      price: this.price.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): ItemListed<ToPhantomTypeArgument<T>> {
    return ItemListed.reified(typeArg).new({
      kiosk: decodeFromJSONField(ID.reified(), field.kiosk),
      id: decodeFromJSONField(ID.reified(), field.id),
      price: decodeFromJSONField("u64", field.price),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): ItemListed<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== ItemListed.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(ItemListed.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return ItemListed.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): ItemListed<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isItemListed(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ItemListed object`);
    }
    return ItemListed.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): ItemListed<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isItemListed(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ItemListed object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return ItemListed.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ItemListed.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<ItemListed<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ItemListed object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isItemListed(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ItemListed object`);
    }

    return ItemListed.fromSuiObjectData(typeArg, res.data);
  }
}
