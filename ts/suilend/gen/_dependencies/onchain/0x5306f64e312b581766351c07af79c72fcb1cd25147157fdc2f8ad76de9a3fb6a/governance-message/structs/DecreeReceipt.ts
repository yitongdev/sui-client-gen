import * as reified from "../../../../../_framework/reified.js";
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
  fieldToJSON,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { Bytes32 } from "../../bytes32/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDecreeReceipt(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::governance_message::DecreeReceipt` + "<");
}

export interface DecreeReceiptFields<T0 extends PhantomTypeArgument> {
  payload: ToField<Vector<"u8">>;
  digest: ToField<Bytes32>;
  sequence: ToField<"u64">;
}

export type DecreeReceiptReified<T0 extends PhantomTypeArgument> = Reified<
  DecreeReceipt<T0>,
  DecreeReceiptFields<T0>
>;

/**
 * Move struct: `DecreeReceipt`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::governance_message`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class DecreeReceipt<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::governance_message::DecreeReceipt`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = DecreeReceipt.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::governance_message::DecreeReceipt<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = DecreeReceipt.$isPhantom;

  readonly payload: ToField<Vector<"u8">>;
  readonly digest: ToField<Bytes32>;
  readonly sequence: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: DecreeReceiptFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      DecreeReceipt.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::governance_message::DecreeReceipt<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.payload = fields.payload;
    this.digest = fields.digest;
    this.sequence = fields.sequence;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): DecreeReceiptReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: DecreeReceipt.$typeName,
      fullTypeName: composeSuiType(
        DecreeReceipt.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::governance_message::DecreeReceipt<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: DecreeReceipt.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        DecreeReceipt.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        DecreeReceipt.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => DecreeReceipt.fromBcs(T0, data),
      bcs: DecreeReceipt.bcs,
      fromJSONField: (field: any) => DecreeReceipt.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => DecreeReceipt.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        DecreeReceipt.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        DecreeReceipt.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        DecreeReceipt.fetch(client, T0, id),
      new: (fields: DecreeReceiptFields<ToPhantomTypeArgument<T0>>) => {
        return new DecreeReceipt([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DecreeReceipt.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<DecreeReceipt<ToPhantomTypeArgument<T0>>>> {
    return phantom(DecreeReceipt.reified(T0));
  }
  static get p() {
    return DecreeReceipt.phantom;
  }

  static get bcs() {
    return bcs.struct("DecreeReceipt", {
      payload: bcs.vector(bcs.u8()),
      digest: Bytes32.bcs,
      sequence: bcs.u64(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): DecreeReceipt<ToPhantomTypeArgument<T0>> {
    return DecreeReceipt.reified(typeArg).new({
      payload: decodeFromFields(reified.vector("u8"), fields.payload),
      digest: decodeFromFields(Bytes32.reified(), fields.digest),
      sequence: decodeFromFields("u64", fields.sequence),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): DecreeReceipt<ToPhantomTypeArgument<T0>> {
    if (!isDecreeReceipt(item.type)) {
      throw new Error("not a DecreeReceipt type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return DecreeReceipt.reified(typeArg).new({
      payload: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.payload,
      ),
      digest: decodeFromFieldsWithTypes(Bytes32.reified(), item.fields.digest),
      sequence: decodeFromFieldsWithTypes("u64", item.fields.sequence),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): DecreeReceipt<ToPhantomTypeArgument<T0>> {
    return DecreeReceipt.fromFields(typeArg, DecreeReceipt.bcs.parse(data));
  }

  toJSONField() {
    return {
      payload: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.payload),
      digest: this.digest.toJSONField(),
      sequence: this.sequence.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): DecreeReceipt<ToPhantomTypeArgument<T0>> {
    return DecreeReceipt.reified(typeArg).new({
      payload: decodeFromJSONField(reified.vector("u8"), field.payload),
      digest: decodeFromJSONField(Bytes32.reified(), field.digest),
      sequence: decodeFromJSONField("u64", field.sequence),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): DecreeReceipt<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== DecreeReceipt.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(DecreeReceipt.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return DecreeReceipt.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): DecreeReceipt<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDecreeReceipt(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a DecreeReceipt object`,
      );
    }
    return DecreeReceipt.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): DecreeReceipt<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isDecreeReceipt(data.bcs.type)
      ) {
        throw new Error(`object at is not a DecreeReceipt object`);
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

      return DecreeReceipt.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DecreeReceipt.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<DecreeReceipt<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching DecreeReceipt object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDecreeReceipt(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a DecreeReceipt object`);
    }

    return DecreeReceipt.fromSuiObjectData(typeArg, res.data);
  }
}
