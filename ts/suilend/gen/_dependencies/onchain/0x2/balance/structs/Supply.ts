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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isSupply(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::balance::Supply` + "<");
}

export interface SupplyFields<T0 extends PhantomTypeArgument> {
  value: ToField<"u64">;
}

export type SupplyReified<T0 extends PhantomTypeArgument> = Reified<Supply<T0>, SupplyFields<T0>>;

/**
 * Move struct: `Supply`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class Supply<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::balance::Supply`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Supply.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::balance::Supply<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = Supply.$isPhantom;

  readonly value: ToField<"u64">;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: SupplyFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Supply.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::balance::Supply<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.value = fields.value;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): SupplyReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: Supply.$typeName,
      fullTypeName: composeSuiType(
        Supply.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::balance::Supply<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: Supply.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Supply.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Supply.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Supply.fromBcs(T0, data),
      bcs: Supply.bcs,
      fromJSONField: (field: any) => Supply.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Supply.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => Supply.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => Supply.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => Supply.fetch(client, T0, id),
      new: (fields: SupplyFields<ToPhantomTypeArgument<T0>>) => {
        return new Supply([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Supply.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Supply<ToPhantomTypeArgument<T0>>>> {
    return phantom(Supply.reified(T0));
  }
  static get p() {
    return Supply.phantom;
  }

  static get bcs() {
    return bcs.struct("Supply", {
      value: bcs.u64(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Supply<ToPhantomTypeArgument<T0>> {
    return Supply.reified(typeArg).new({ value: decodeFromFields("u64", fields.value) });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Supply<ToPhantomTypeArgument<T0>> {
    if (!isSupply(item.type)) {
      throw new Error("not a Supply type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Supply.reified(typeArg).new({
      value: decodeFromFieldsWithTypes("u64", item.fields.value),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): Supply<ToPhantomTypeArgument<T0>> {
    return Supply.fromFields(typeArg, Supply.bcs.parse(data));
  }

  toJSONField() {
    return {
      value: this.value.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): Supply<ToPhantomTypeArgument<T0>> {
    return Supply.reified(typeArg).new({ value: decodeFromJSONField("u64", field.value) });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Supply<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== Supply.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Supply.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Supply.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Supply<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSupply(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Supply object`);
    }
    return Supply.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Supply<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSupply(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Supply object`);
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

      return Supply.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Supply.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Supply<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Supply object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isSupply(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Supply object`);
    }

    return Supply.fromSuiObjectData(typeArg, res.data);
  }
}
