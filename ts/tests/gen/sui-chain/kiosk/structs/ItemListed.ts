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

export interface ItemListedFields<T0 extends PhantomTypeArgument> {
  kiosk: ToField<ID>;
  id: ToField<ID>;
  price: ToField<"u64">;
}

export type ItemListedReified<T0 extends PhantomTypeArgument> = Reified<
  ItemListed<T0>,
  ItemListedFields<T0>
>;

/**
 * Move struct: `ItemListed`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class ItemListed<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk::ItemListed`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ItemListed.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk::ItemListed<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = ItemListed.$isPhantom;

  readonly kiosk: ToField<ID>;
  readonly id: ToField<ID>;
  readonly price: ToField<"u64">;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: ItemListedFields<T0>) {
    this.$fullTypeName = composeSuiType(
      ItemListed.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk::ItemListed<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.kiosk = fields.kiosk;
    this.id = fields.id;
    this.price = fields.price;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): ItemListedReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: ItemListed.$typeName,
      fullTypeName: composeSuiType(
        ItemListed.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::kiosk::ItemListed<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: ItemListed.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => ItemListed.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ItemListed.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => ItemListed.fromBcs(T0, data),
      bcs: ItemListed.bcs,
      fromJSONField: (field: any) => ItemListed.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => ItemListed.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => ItemListed.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => ItemListed.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => ItemListed.fetch(client, T0, id),
      new: (fields: ItemListedFields<ToPhantomTypeArgument<T0>>) => {
        return new ItemListed([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ItemListed.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<ItemListed<ToPhantomTypeArgument<T0>>>> {
    return phantom(ItemListed.reified(T0));
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

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): ItemListed<ToPhantomTypeArgument<T0>> {
    return ItemListed.reified(typeArg).new({
      kiosk: decodeFromFields(ID.reified(), fields.kiosk),
      id: decodeFromFields(ID.reified(), fields.id),
      price: decodeFromFields("u64", fields.price),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): ItemListed<ToPhantomTypeArgument<T0>> {
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

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): ItemListed<ToPhantomTypeArgument<T0>> {
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

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): ItemListed<ToPhantomTypeArgument<T0>> {
    return ItemListed.reified(typeArg).new({
      kiosk: decodeFromJSONField(ID.reified(), field.kiosk),
      id: decodeFromJSONField(ID.reified(), field.id),
      price: decodeFromJSONField("u64", field.price),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): ItemListed<ToPhantomTypeArgument<T0>> {
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

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): ItemListed<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isItemListed(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ItemListed object`);
    }
    return ItemListed.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): ItemListed<ToPhantomTypeArgument<T0>> {
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

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<ItemListed<ToPhantomTypeArgument<T0>>> {
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
