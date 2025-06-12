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
import { PKG_V8 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isLiquidityRequest(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V8}::reserve::LiquidityRequest` + "<");
}

export interface LiquidityRequestFields<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> {
  amount: ToField<"u64">;
  fee: ToField<"u64">;
}

export type LiquidityRequestReified<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> = Reified<LiquidityRequest<T0, T1>, LiquidityRequestFields<T0, T1>>;

/**
 * Move struct: `LiquidityRequest`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 * @typeParam T1 - Type parameter 1 (phantom)
 */
export class LiquidityRequest<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V8}::reserve::LiquidityRequest`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = LiquidityRequest.$typeName;
  readonly $fullTypeName: `${typeof PKG_V8}::reserve::LiquidityRequest<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>];
  readonly $isPhantom = LiquidityRequest.$isPhantom;

  readonly amount: ToField<"u64">;
  readonly fee: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>],
    fields: LiquidityRequestFields<T0, T1>,
  ) {
    this.$fullTypeName = composeSuiType(
      LiquidityRequest.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V8}::reserve::LiquidityRequest<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
    this.$typeArgs = typeArgs;

    this.amount = fields.amount;
    this.fee = fields.fee;
  }

  static reified<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(T0: T0, T1: T1): LiquidityRequestReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    return {
      typeName: LiquidityRequest.$typeName,
      fullTypeName: composeSuiType(
        LiquidityRequest.$typeName,
        ...[extractType(T0), extractType(T1)],
      ) as `${typeof PKG_V8}::reserve::LiquidityRequest<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`,
      typeArgs: [extractType(T0), extractType(T1)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T1>>,
      ],
      isPhantom: LiquidityRequest.$isPhantom,
      reifiedTypeArgs: [T0, T1],
      fromFields: (fields: Record<string, any>) => LiquidityRequest.fromFields([T0, T1], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LiquidityRequest.fromFieldsWithTypes([T0, T1], item),
      fromBcs: (data: Uint8Array) => LiquidityRequest.fromBcs([T0, T1], data),
      bcs: LiquidityRequest.bcs,
      fromJSONField: (field: any) => LiquidityRequest.fromJSONField([T0, T1], field),
      fromJSON: (json: Record<string, any>) => LiquidityRequest.fromJSON([T0, T1], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LiquidityRequest.fromSuiParsedData([T0, T1], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LiquidityRequest.fromSuiObjectData([T0, T1], content),
      fetch: async (client: SuiClient, id: string) => LiquidityRequest.fetch(client, [T0, T1], id),
      new: (
        fields: LiquidityRequestFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>,
      ) => {
        return new LiquidityRequest([extractType(T0), extractType(T1)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LiquidityRequest.reified;
  }

  static phantom<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
  ): PhantomReified<
    ToTypeStr<LiquidityRequest<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>
  > {
    return phantom(LiquidityRequest.reified(T0, T1));
  }
  static get p() {
    return LiquidityRequest.phantom;
  }

  static get bcs() {
    return bcs.struct("LiquidityRequest", {
      amount: bcs.u64(),
      fee: bcs.u64(),
    });
  }

  static fromFields<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    fields: Record<string, any>,
  ): LiquidityRequest<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return LiquidityRequest.reified(typeArg0, typeArg1).new({
      amount: decodeFromFields("u64", fields.amount),
      fee: decodeFromFields("u64", fields.fee),
    });
  }

  static fromFieldsWithTypes<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    item: FieldsWithTypes,
  ): LiquidityRequest<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (!isLiquidityRequest(item.type)) {
      throw new Error("not a LiquidityRequest type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return LiquidityRequest.reified(typeArg0, typeArg1).new({
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
      fee: decodeFromFieldsWithTypes("u64", item.fields.fee),
    });
  }

  static fromBcs<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: Uint8Array,
  ): LiquidityRequest<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return LiquidityRequest.fromFields([typeArg0, typeArg1], LiquidityRequest.bcs.parse(data));
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      amount: this.amount.toString(),
      fee: this.fee.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    field: any,
  ): LiquidityRequest<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return LiquidityRequest.reified(typeArg0, typeArg1).new({
      amount: decodeFromJSONField("u64", field.amount),
      fee: decodeFromJSONField("u64", field.fee),
    });
  }

  static fromJSON<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    json: Record<string, any>,
  ): LiquidityRequest<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (json.$typeName !== LiquidityRequest.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(LiquidityRequest.$typeName, ...[typeArg0, typeArg1].map(extractType)),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return LiquidityRequest.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    content: SuiParsedData,
  ): LiquidityRequest<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLiquidityRequest(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a LiquidityRequest object`);
    }
    return LiquidityRequest.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: SuiObjectData,
  ): LiquidityRequest<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isLiquidityRequest(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a LiquidityRequest object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      gotTypeArgs.forEach((gotTypeArg, i) => {
        const compressedGotType = compressSuiType(gotTypeArg);
        const typeArg = typeArgs[i];
        if (!typeArg) {
          throw new Error(`missing type argument at position ${i}`);
        }
        const expectedTypeArg = compressSuiType(extractType(typeArg));
        if (compressedGotType !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
          );
        }
      });

      return LiquidityRequest.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LiquidityRequest.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T0, T1],
    id: string,
  ): Promise<LiquidityRequest<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching LiquidityRequest object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidityRequest(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a LiquidityRequest object`);
    }

    return LiquidityRequest.fromSuiObjectData(typeArgs, res.data);
  }
}
