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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isSupply(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::balance::Supply` + "<");
}

export interface SupplyFields<T extends PhantomTypeArgument> {
  value: ToField<"u64">;
}

export type SupplyReified<T extends PhantomTypeArgument> = Reified<
  Supply<T>,
  SupplyFields<T>
>;

/**
 * Move struct: `Supply`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class Supply<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::balance::Supply`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Supply.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::balance::Supply<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = Supply.$isPhantom;

  readonly value: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: SupplyFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      Supply.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::balance::Supply<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.value = fields.value;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): SupplyReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: Supply.$typeName,
      fullTypeName: composeSuiType(
        Supply.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::balance::Supply<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: Supply.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => Supply.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Supply.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => Supply.fromBcs(T, data),
      bcs: Supply.bcs,
      fromJSONField: (field: any) => Supply.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => Supply.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Supply.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Supply.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        Supply.fetch(client, T, id),
      new: (fields: SupplyFields<ToPhantomTypeArgument<T>>) => {
        return new Supply([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Supply.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<Supply<ToPhantomTypeArgument<T>>>> {
    return phantom(Supply.reified(T));
  }
  static get p() {
    return Supply.phantom;
  }

  static get bcs() {
    return bcs.struct("Supply", {
      value: bcs.u64(),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): Supply<ToPhantomTypeArgument<T>> {
    return Supply.reified(typeArg).new({
      value: decodeFromFields("u64", fields.value),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): Supply<ToPhantomTypeArgument<T>> {
    if (!isSupply(item.type)) {
      throw new Error("not a Supply type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Supply.reified(typeArg).new({
      value: decodeFromFieldsWithTypes("u64", item.fields.value),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): Supply<ToPhantomTypeArgument<T>> {
    return Supply.fromFields(typeArg, Supply.bcs.parse(data));
  }

  toJSONField() {
    return {
      value: this.value.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): Supply<ToPhantomTypeArgument<T>> {
    return Supply.reified(typeArg).new({
      value: decodeFromJSONField("u64", field.value),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): Supply<ToPhantomTypeArgument<T>> {
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

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): Supply<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSupply(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Supply object`,
      );
    }
    return Supply.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): Supply<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSupply(data.bcs.type)) {
        throw new Error(`object at is not a Supply object`);
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

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<Supply<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Supply object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isSupply(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Supply object`);
    }

    return Supply.fromSuiObjectData(typeArg, res.data);
  }
}
