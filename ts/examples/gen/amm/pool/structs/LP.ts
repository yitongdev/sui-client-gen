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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isLP(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::pool::LP` + "<");
}

export interface LPFields<
  A extends PhantomTypeArgument,
  B extends PhantomTypeArgument,
> {
  dummyField: ToField<"bool">;
}

export type LPReified<
  A extends PhantomTypeArgument,
  B extends PhantomTypeArgument,
> = Reified<LP<A, B>, LPFields<A, B>>;

/**
 * Move struct: `LP`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @typeParam A - Type parameter 0 (phantom)
 * @typeParam B - Type parameter 1 (phantom)
 */
export class LP<A extends PhantomTypeArgument, B extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::pool::LP`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = LP.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::pool::LP<${PhantomToTypeStr<A>}, ${PhantomToTypeStr<B>}>`;
  readonly $typeArgs: [PhantomToTypeStr<A>, PhantomToTypeStr<B>];
  readonly $isPhantom = LP.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(
    typeArgs: [PhantomToTypeStr<A>, PhantomToTypeStr<B>],
    fields: LPFields<A, B>,
  ) {
    this.$fullTypeName = composeSuiType(
      LP.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::pool::LP<${PhantomToTypeStr<A>}, ${PhantomToTypeStr<B>}>`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(A: A, B: B): LPReified<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    return {
      typeName: LP.$typeName,
      fullTypeName: composeSuiType(
        LP.$typeName,
        ...[extractType(A), extractType(B)],
      ) as `${typeof PKG_V1}::pool::LP<${PhantomToTypeStr<ToPhantomTypeArgument<A>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<B>>}>`,
      typeArgs: [extractType(A), extractType(B)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<A>>,
        PhantomToTypeStr<ToPhantomTypeArgument<B>>,
      ],
      isPhantom: LP.$isPhantom,
      reifiedTypeArgs: [A, B],
      fromFields: (fields: Record<string, any>) =>
        LP.fromFields([A, B], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LP.fromFieldsWithTypes([A, B], item),
      fromBcs: (data: Uint8Array) => LP.fromBcs([A, B], data),
      bcs: LP.bcs,
      fromJSONField: (field: any) => LP.fromJSONField([A, B], field),
      fromJSON: (json: Record<string, any>) => LP.fromJSON([A, B], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LP.fromSuiParsedData([A, B], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LP.fromSuiObjectData([A, B], content),
      fetch: async (client: SuiClient, id: string) =>
        LP.fetch(client, [A, B], id),
      new: (
        fields: LPFields<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>>,
      ) => {
        return new LP([extractType(A), extractType(B)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LP.reified;
  }

  static phantom<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    A: A,
    B: B,
  ): PhantomReified<
    ToTypeStr<LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>>>
  > {
    return phantom(LP.reified(A, B));
  }
  static get p() {
    return LP.phantom;
  }

  static get bcs() {
    return bcs.struct("LP", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    fields: Record<string, any>,
  ): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    return LP.reified(typeArgs[0], typeArgs[1]).new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    item: FieldsWithTypes,
  ): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    if (!isLP(item.type)) {
      throw new Error("not a LP type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return LP.reified(typeArgs[0], typeArgs[1]).new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    data: Uint8Array,
  ): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    return LP.fromFields(typeArgs, LP.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    field: any,
  ): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    return LP.reified(typeArgs[0], typeArgs[1]).new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    json: Record<string, any>,
  ): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    if (json.$typeName !== LP.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(LP.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return LP.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    content: SuiParsedData,
  ): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLP(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a LP object`,
      );
    }
    return LP.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    data: SuiObjectData,
  ): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isLP(data.bcs.type)) {
        throw new Error(`object at is not a LP object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      for (let i = 0; i < 2; i++) {
        const gotTypeArg = compressSuiType(gotTypeArgs[i]);
        const expectedTypeArg = compressSuiType(extractType(typeArgs[i]));
        if (gotTypeArg !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
          );
        }
      }

      return LP.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LP.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [A, B],
    id: string,
  ): Promise<LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching LP object at id ${id}: ${res.error.code}`,
      );
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isLP(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a LP object`);
    }

    return LP.fromSuiObjectData(typeArgs, res.data);
  }
}
