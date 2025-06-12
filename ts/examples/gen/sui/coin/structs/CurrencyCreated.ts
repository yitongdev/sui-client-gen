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

export interface CurrencyCreatedFields<T extends PhantomTypeArgument> {
  decimals: ToField<"u8">;
}

export type CurrencyCreatedReified<T extends PhantomTypeArgument> = Reified<
  CurrencyCreated<T>,
  CurrencyCreatedFields<T>
>;

/**
 * Move struct: `CurrencyCreated`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class CurrencyCreated<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::CurrencyCreated`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = CurrencyCreated.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::CurrencyCreated<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = CurrencyCreated.$isPhantom;

  readonly decimals: ToField<"u8">;

  private constructor(typeArgs: [PhantomToTypeStr<T>], fields: CurrencyCreatedFields<T>) {
    this.$fullTypeName = composeSuiType(
      CurrencyCreated.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::CurrencyCreated<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.decimals = fields.decimals;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): CurrencyCreatedReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: CurrencyCreated.$typeName,
      fullTypeName: composeSuiType(
        CurrencyCreated.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::coin::CurrencyCreated<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
      isPhantom: CurrencyCreated.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => CurrencyCreated.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => CurrencyCreated.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => CurrencyCreated.fromBcs(T, data),
      bcs: CurrencyCreated.bcs,
      fromJSONField: (field: any) => CurrencyCreated.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => CurrencyCreated.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) => CurrencyCreated.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) => CurrencyCreated.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => CurrencyCreated.fetch(client, T, id),
      new: (fields: CurrencyCreatedFields<ToPhantomTypeArgument<T>>) => {
        return new CurrencyCreated([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CurrencyCreated.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<CurrencyCreated<ToPhantomTypeArgument<T>>>> {
    return phantom(CurrencyCreated.reified(T));
  }
  static get p() {
    return CurrencyCreated.phantom;
  }

  static get bcs() {
    return bcs.struct("CurrencyCreated", {
      decimals: bcs.u8(),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): CurrencyCreated<ToPhantomTypeArgument<T>> {
    return CurrencyCreated.reified(typeArg).new({
      decimals: decodeFromFields("u8", fields.decimals),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): CurrencyCreated<ToPhantomTypeArgument<T>> {
    if (!isCurrencyCreated(item.type)) {
      throw new Error("not a CurrencyCreated type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return CurrencyCreated.reified(typeArg).new({
      decimals: decodeFromFieldsWithTypes("u8", item.fields.decimals),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): CurrencyCreated<ToPhantomTypeArgument<T>> {
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

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): CurrencyCreated<ToPhantomTypeArgument<T>> {
    return CurrencyCreated.reified(typeArg).new({
      decimals: decodeFromJSONField("u8", field.decimals),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): CurrencyCreated<ToPhantomTypeArgument<T>> {
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

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): CurrencyCreated<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCurrencyCreated(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a CurrencyCreated object`);
    }
    return CurrencyCreated.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): CurrencyCreated<ToPhantomTypeArgument<T>> {
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

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<CurrencyCreated<ToPhantomTypeArgument<T>>> {
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
