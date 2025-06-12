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

export function isCurrencyCreated(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::coin::CurrencyCreated` + "<");
}

export interface CurrencyCreatedFields<T0 extends PhantomTypeArgument> {
  decimals: ToField<"u8">;
}

export type CurrencyCreatedReified<T0 extends PhantomTypeArgument> = Reified<
  CurrencyCreated<T0>,
  CurrencyCreatedFields<T0>
>;

/**
 * Move struct: `CurrencyCreated`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class CurrencyCreated<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::CurrencyCreated`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = CurrencyCreated.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::CurrencyCreated<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = CurrencyCreated.$isPhantom;

  readonly decimals: ToField<"u8">;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: CurrencyCreatedFields<T0>) {
    this.$fullTypeName = composeSuiType(
      CurrencyCreated.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::CurrencyCreated<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.decimals = fields.decimals;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): CurrencyCreatedReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: CurrencyCreated.$typeName,
      fullTypeName: composeSuiType(
        CurrencyCreated.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::coin::CurrencyCreated<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: CurrencyCreated.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => CurrencyCreated.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => CurrencyCreated.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => CurrencyCreated.fromBcs(T0, data),
      bcs: CurrencyCreated.bcs,
      fromJSONField: (field: any) => CurrencyCreated.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => CurrencyCreated.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => CurrencyCreated.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => CurrencyCreated.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => CurrencyCreated.fetch(client, T0, id),
      new: (fields: CurrencyCreatedFields<ToPhantomTypeArgument<T0>>) => {
        return new CurrencyCreated([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CurrencyCreated.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<CurrencyCreated<ToPhantomTypeArgument<T0>>>> {
    return phantom(CurrencyCreated.reified(T0));
  }
  static get p() {
    return CurrencyCreated.phantom;
  }

  static get bcs() {
    return bcs.struct("CurrencyCreated", {
      decimals: bcs.u8(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): CurrencyCreated<ToPhantomTypeArgument<T0>> {
    return CurrencyCreated.reified(typeArg).new({
      decimals: decodeFromFields("u8", fields.decimals),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): CurrencyCreated<ToPhantomTypeArgument<T0>> {
    if (!isCurrencyCreated(item.type)) {
      throw new Error("not a CurrencyCreated type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return CurrencyCreated.reified(typeArg).new({
      decimals: decodeFromFieldsWithTypes("u8", item.fields.decimals),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): CurrencyCreated<ToPhantomTypeArgument<T0>> {
    return CurrencyCreated.fromFields(typeArg, CurrencyCreated.bcs.parse(data));
  }

  toJSONField() {
    return {
      decimals: this.decimals,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): CurrencyCreated<ToPhantomTypeArgument<T0>> {
    return CurrencyCreated.reified(typeArg).new({
      decimals: decodeFromJSONField("u8", field.decimals),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): CurrencyCreated<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== CurrencyCreated.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(CurrencyCreated.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return CurrencyCreated.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): CurrencyCreated<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCurrencyCreated(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a CurrencyCreated object`);
    }
    return CurrencyCreated.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): CurrencyCreated<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isCurrencyCreated(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a CurrencyCreated object`);
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

      return CurrencyCreated.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CurrencyCreated.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<CurrencyCreated<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching CurrencyCreated object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isCurrencyCreated(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a CurrencyCreated object`);
    }

    return CurrencyCreated.fromSuiObjectData(typeArg, res.data);
  }
}
